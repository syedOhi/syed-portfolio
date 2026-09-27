"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const {copy: languages, menuData, menuTranslations} = window.TascaContent;
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => [...document.querySelectorAll(selector)];
    const form = $("#reservation-form");
    const status = $("#form-message");
    const summary = $("#reservation-summary");
    const actions = $("#reservation-actions");
    const modal = $("#menu-modal");
    const panel = $(".menu-modal-panel");
    const hamburger = $(".hamburger");
    const nav = $("#primary-navigation");
    const shell = $(".site-shell");
    const mobileBar = $(".mobile-action-bar");
    const languageSelect = $("#language-select");
    const slides = $$(".gallery-slide");
    const localeCodes = {pt:"pt-PT",en:"en-GB",es:"es-ES",fr:"fr-FR",de:"de-DE",it:"it-IT",nl:"nl-NL"};
    const tenderloinTitles = {pt:"Lombinhos",en:"Tenderloin",es:"Solomillo",fr:"Filet",de:"Filet",it:"Filetto",nl:"Haasje"};
    const dishWords = {pt:["prato","pratos"],en:["dish","dishes"],es:["plato","platos"],fr:["plat","plats"],de:["Gericht","Gerichte"],it:["piatto","piatti"],nl:["gerecht","gerechten"]};
    let language = "pt";
    const accessibilityLabels = {
        pt:["Navegação principal","Alternar navegação","Galeria de fotos","Selecionar fotografia","Atalhos","Carne com molho","Amêijoas","Sobremesa de frutos vermelhos","Sala do restaurante"],
        en:["Main navigation","Toggle navigation","Photo gallery","Choose a photo","Quick links","Meat with sauce","Clams","Berry dessert","Restaurant interior"],
        es:["Navegación principal","Mostrar u ocultar navegación","Galería de fotos","Seleccionar foto","Accesos rápidos","Carne con salsa","Almejas","Postre de frutos rojos","Interior del restaurante"],
        fr:["Navigation principale","Afficher ou masquer la navigation","Galerie de photos","Choisir une photo","Accès rapides","Viande en sauce","Palourdes","Dessert aux fruits rouges","Intérieur du restaurant"],
        de:["Hauptnavigation","Navigation umschalten","Fotogalerie","Foto auswählen","Schnellzugriff","Fleisch mit Sauce","Venusmuscheln","Beerendessert","Innenraum des Restaurants"],
        it:["Navigazione principale","Mostra o nascondi navigazione","Galleria fotografica","Scegli una foto","Collegamenti rapidi","Carne con salsa","Vongole","Dessert ai frutti di bosco","Interno del ristorante"],
        nl:["Hoofdnavigatie","Navigatie openen of sluiten","Fotogalerij","Kies een foto","Snelkoppelingen","Vlees met saus","Venusschelpen","Dessert met bessen","Restaurantinterieur"]
    };
    let activeCategory = null;
    let returnFocus = null;
    let galleryIndex = 0;
    let lastRequest = "";
    let requestRevision = 0;
    const copy = () => languages[language];

    // Only the chosen language is persisted. Reservation data stays in memory.
    try {
        const saved = localStorage.getItem("preferred-language");
        const browserLanguage = "pt";
        language = languages[saved] ? saved : languages[browserLanguage] ? browserLanguage : "pt";
    } catch {
        language = "pt";
    }

    function portugalNow() {
        const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
            timeZone:"Europe/Lisbon",year:"numeric",month:"2-digit",day:"2-digit",
            hour:"2-digit",minute:"2-digit",hourCycle:"h23"
        }).formatToParts(new Date()).map(part => [part.type,part.value]));
        return {date:parts.year+"-"+parts.month+"-"+parts.day,time:parts.hour+":"+parts.minute};
    }

    function resetPreview() {
        lastRequest = "";
        requestRevision++;
        summary.hidden = true;
        summary.replaceChildren();
        actions.hidden = true;
        status.textContent = "";
        status.className = "form-message";
    }

    function setNavigation(open, restoreFocus = false) {
        hamburger.setAttribute("aria-expanded",String(open));
        nav.classList.toggle("active",open);
        const mobile = matchMedia("(max-width:860px)").matches;
        nav.setAttribute("aria-hidden",String(mobile && !open));
        $(".nav-backdrop").setAttribute("aria-hidden",String(!open));
        document.body.classList.toggle("menu-open",open);
        if(restoreFocus) hamburger.focus();
    }

    function translate() {
        document.documentElement.lang = localeCodes[language];
        document.title = "Tasca O Bernardo — Ohi / Portfolio";
        $("#meta-description").content = copy().demoBanner;
        languageSelect.value = language;
        const labels = accessibilityLabels[language];
        $(".navbar").setAttribute("aria-label",labels[0]);
        hamburger.setAttribute("aria-label",labels[1]);
        $("#gallery-slider").setAttribute("aria-label",labels[2]);
        $("#gallery-dots").setAttribute("aria-label",labels[3]);
        mobileBar.setAttribute("aria-label",labels[4]);
        slides.forEach((slide,index)=>{slide.querySelector("img").alt=labels[index+5];});
        languageSelect.setAttribute("aria-label",copy().languageLabel);
        $$("[data-text]").forEach(node => {node.textContent = copy()[node.dataset.text];});
        $$("[data-text-alt]").forEach(node => {node.alt = copy()[node.dataset.textAlt];});
        $(".skip-link").textContent = copy().skipLink;
        $("#name").placeholder = copy().formNamePlaceholder;
        $("#phone").placeholder = copy().formPhonePlaceholder;
        $("#message").placeholder = copy().formMessagePlaceholder;
        $("#guests").options[0].textContent = copy().guestsPlaceholder;
        $(".menu-modal-close").setAttribute("aria-label",copy().modalClose);
        $('[data-direction="prev"]').setAttribute("aria-label",copy().galleryPrevious);
        $('[data-direction="next"]').setAttribute("aria-label",copy().galleryNext);
        $$(".menu-button").forEach(button => {
            button.querySelector("span").textContent = category(button.dataset.category).title;
        });
        resetPreview();
        if(activeCategory) renderCategory(activeCategory);
        form.querySelectorAll("[aria-invalid]").forEach(field=>{field.removeAttribute("aria-invalid");field.removeAttribute("aria-describedby");});
    }

    function category(key) {
        const base = menuData[key];
        const translated = menuTranslations[language]?.[key] || {};
        return {
            title:translated.title || base.title,
            description:translated.description || base.description,
            groups:base.groups.map((group,index) => ({
                title:key === "grelhados" && index === 1 ? tenderloinTitles[language] : translated.groups?.[index]?.title || group.title,
                items:group.items.map((item,itemIndex) => ({
                    name:translated.groups?.[index]?.items?.[itemIndex]?.name || item.name,
                    note:translated.groups?.[index]?.items?.[itemIndex]?.note || item.note
                }))
            }))
        };
    }

    function element(tag,text,className) {
        const node = document.createElement(tag);
        node.textContent = text;
        if(className) node.className = className;
        return node;
    }

    function renderCategory(key) {
        const menu = category(key);
        $("#menu-modal-title").textContent = menu.title;
        $("#menu-modal-tag").textContent = copy().menuTag;
        $("#menu-modal-description").textContent = menu.description;
        const groups = $("#menu-modal-groups");
        groups.replaceChildren();
        menu.groups.forEach(group => {
            const section = element("section","","menu-group");
            const head = element("div","","menu-group-head");
            head.append(element("h4",group.title),element("span",group.items.length+" "+dishWords[language][group.items.length===1?0:1],"menu-group-count"));
            const grid = element("div","","menu-grid");
            group.items.forEach(item => {
                const card = element("article","","menu-item-card");
                card.append(element("strong",item.name),element("span",item.note));
                grid.append(card);
            });
            section.append(head,grid);
            groups.append(section);
        });
        panel.scrollTop = 0;
    }

    function openMenu(key,trigger) {
        setNavigation(false);
        activeCategory = key;
        returnFocus = trigger;
        renderCategory(key);
        modal.hidden = false;
        document.body.classList.add("modal-open");
        shell.inert = true;
        mobileBar.inert = true;
        trigger.setAttribute("aria-expanded","true");
        $(".menu-modal-close").focus();
    }

    function closeMenu() {
        if(modal.hidden) return;
        modal.hidden = true;
        activeCategory = null;
        document.body.classList.remove("modal-open");
        shell.inert = false;
        mobileBar.inert = false;
        $$(".menu-button").forEach(button => button.setAttribute("aria-expanded","false"));
        returnFocus?.focus();
        returnFocus = null;
    }

    function showSlide(index) {
        galleryIndex = (index + slides.length) % slides.length;
        slides.forEach((slide,i) => {
            slide.classList.toggle("is-active",i === galleryIndex);
            slide.setAttribute("aria-hidden",String(i !== galleryIndex));
        });
        $$(".gallery-dot").forEach((dot,i) => dot.setAttribute("aria-pressed",String(i === galleryIndex)));
        $$(".gallery-dot").forEach((dot,i) => dot.classList.toggle("is-active",i === galleryIndex));
    }
    slides.forEach((_,i) => {
        const dot = element("button","","gallery-dot");
        dot.type = "button";
        dot.setAttribute("aria-label",String(i+1)+" / "+slides.length);
        dot.addEventListener("click",()=>showSlide(i));
        $("#gallery-dots").append(dot);
    });
    $$(".gallery-control").forEach(button => button.addEventListener("click",()=>showSlide(galleryIndex+(button.dataset.direction==="next"?1:-1))));
    $("#gallery-slider").addEventListener("keydown",event => {
        if(!["ArrowLeft","ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        showSlide(galleryIndex+(event.key==="ArrowRight"?1:-1));
    });
    let touchStart = null;
    $("#gallery-slider").addEventListener("touchstart",event => {touchStart=event.changedTouches[0].clientX;},{passive:true});
    $("#gallery-slider").addEventListener("touchend",event => {
        if(touchStart===null) return;
        const difference=event.changedTouches[0].clientX-touchStart;
        if(Math.abs(difference)>50) showSlide(galleryIndex+(difference<0?1:-1));
        touchStart=null;
    },{passive:true});

    $$(".menu-button").forEach(button => {
        button.setAttribute("aria-haspopup","dialog");
        button.setAttribute("aria-controls","menu-modal");
        button.setAttribute("aria-expanded","false");
        button.addEventListener("click",()=>openMenu(button.dataset.category,button));
    });
    $$("[data-close-modal]").forEach(button=>button.addEventListener("click",closeMenu));
    hamburger.addEventListener("click",()=>setNavigation(hamburger.getAttribute("aria-expanded")!=="true"));
    $(".nav-backdrop").addEventListener("click",()=>setNavigation(false,true));
    $$(".nav-links a").forEach(link=>link.addEventListener("click",()=>setNavigation(false)));
    window.addEventListener("resize",()=>{if(innerWidth>860)setNavigation(false);});
    document.addEventListener("keydown",event=>{
        if(event.key==="Escape") {
            if(!modal.hidden)closeMenu();
            else if(hamburger.getAttribute("aria-expanded")==="true")setNavigation(false,true);
        }
        if(event.key==="Tab"&&!modal.hidden) {
            const focusable = [...panel.querySelectorAll('button,a[href],[tabindex="0"]')].filter(node=>!node.disabled);
            const first=focusable[0],last=focusable.at(-1);
            if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
            else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
        }
    });
    languageSelect.addEventListener("change",()=>{
        language=languageSelect.value;
        try{localStorage.setItem("preferred-language",language);}catch{}
        translate();
    });
    const syncFormFocus=()=>document.body.classList.toggle("form-focused",Boolean(form.contains(document.activeElement)&&document.activeElement.matches("input,textarea,select")));
    document.addEventListener("focusin",syncFormFocus);
    document.addEventListener("focusout",()=>queueMicrotask(syncFormFocus));

    function invalid(field,message) {
        field.setAttribute("aria-invalid","true");
        field.setAttribute("aria-describedby","form-message");
        status.textContent=message;
        status.className="form-message error";
        field.focus();
    }
    form.querySelectorAll("input,select,textarea").forEach(field=>{
        const changed=()=>{
            field.removeAttribute("aria-invalid");
            field.removeAttribute("aria-describedby");
            resetPreview();
        };
        field.addEventListener("input",changed);
        field.addEventListener("change",changed);
    });
    form.addEventListener("submit",event=>{
        event.preventDefault();
        resetPreview();
        form.querySelectorAll("[aria-invalid]").forEach(field=>{field.removeAttribute("aria-invalid");field.removeAttribute("aria-describedby");});
        const missing=[...form.querySelectorAll("[required]")].find(field=>!field.value.trim());
        if(missing){invalid(missing,copy().messagesRequired);return;}
        const phone=$("#phone").value.trim();
        const digits=phone.replace(/\D/g,"");
        if(digits.length<9||digits.length>15||!/^\+?[\d\s().-]+$/.test(phone)){
            invalid($("#phone"),copy().messagesPhone);return;
        }
        const now=portugalNow(),date=$("#date").value,time=$("#time").value;
        $("#date").min=now.date;
        if(date<now.date){invalid($("#date"),copy().messagesPastDate);return;}
        if(date===now.date&&time<=now.time){invalid($("#time"),copy().messagesPastTime);return;}
        lastRequest=[
            copy().demoBanner,
            copy().summaryTitle,
            copy().formName+": "+$("#name").value.trim(),
            copy().formPhone+": "+phone,
            copy().formGuests+": "+$("#guests").value,
            copy().formDate+": "+date,
            copy().formTime+": "+time+" (Europe/Lisbon)",
            copy().formMessage+": "+($("#message").value.trim()||copy().messagesNoSpecial),
            copy().demoNotice
        ].join("\n");
        summary.textContent=lastRequest;
        summary.hidden=false;
        actions.hidden=false;
        status.className="form-message success";
        status.textContent=copy().messagesReady;
        summary.focus({preventScroll:true});
    });
    $("#reservation-copy").addEventListener("click",async()=>{
        if(!lastRequest)return;
        const revision=requestRevision;
        try{
            if(!navigator.clipboard?.writeText)throw new Error("Clipboard unavailable");
            await navigator.clipboard.writeText(lastRequest);
            if(revision===requestRevision)status.textContent=copy().messagesCopied;
        }catch{
            if(revision===requestRevision)status.textContent=copy().messagesCopyFailed;
        }
    });
    $("#date").min=portugalNow().date;
    translate();
    setNavigation(false);
    showSlide(0);
});
