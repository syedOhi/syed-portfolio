// Menu examples inherited from the original portfolio project.
// Dishes are illustrative, not an owner-approved or priced menu.
(() => {
    const videoAsset = "assets/images/AQMZI06CblpmwfCTXTdvBeIvR72ovQh9_UbAJkTEZILOD0b__8rgh8n3AA_0kz3x6SHCJ1X1GzTmnu69PPttwVN_xj80noxgqDsMZ_hiu1DZ9Q.mp4";
    const imageAssets = {
        logo: "assets/images/tasca do bernardo logo.png",
        exterior: "assets/images/470125189_1665079541018404_1252334412030162214_n.jpg",
        terrace: "assets/images/470125189_1665079541018404_1252334412030162214_n.jpg",
        wine: "assets/images/1778665510989.publer.com.jpg",
        lamb: "assets/images/1778665372083.publer.com.jpg",
        grilled: "assets/images/1778665262827.publer.com.jpg",
        creamySteak: "assets/images/1778665371092.publer.com.jpg",
        greens: "assets/images/1778665429671.publer.com.jpg",
        acorda: "assets/images/1778665582999.publer.com.jpg",
        carrots: "assets/images/1778665264825.publer.com.jpg",
        dessert: "assets/images/1778665323374.publer.com.jpg"
    };

    const menuData = {
        tradicional: {
            title: "Traditional",
            description: "Peixe, acordas, sopas e porco preto com a identidade rustica da casa.",
            mediaType: "video",
            mediaSrc: videoAsset,
            groups: [
                {
                    title: "Fish",
                    items: [
                        { name: "Shrimps", note: "Sabor do mar com final delicado e textura rica.", image: imageAssets.grilled },
                        { name: "Clams", note: "Ameijoas com carater costeiro e perfil salino.", image: imageAssets.greens },
                        { name: "Açorda Alentejana", note: "Conforto alentejano em prato icónico.", image: imageAssets.acorda },
                        { name: "Sopa de Tomate Alentejana", note: "Sopa de tomate com bacalhau, ovo e pedacos de pao para um conforto tipico da casa.", image: imageAssets.wine }
                    ]
                },
                {
                    title: "Porco Preto",
                    items: [
                        { name: "Lombinhos Alentejana com Coentros e Alhos", note: "Perfil herbal e autentico do sul.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho de Pimenta", note: "Final intenso e picante elegante.", image: imageAssets.grilled },
                        { name: "Lombinhos com Molho de Cogumelos", note: "Creme profundo com textura suave.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho Roquefort", note: "Molho envolvente e premium.", image: imageAssets.lamb },
                        { name: "Secretos", note: "Corte suculento e muito procurado.", image: imageAssets.grilled },
                        { name: "Plumas", note: "Tenras, delicadas e cheias de sabor.", image: imageAssets.lamb },
                        { name: "Lagartos", note: "Brasa viva e acabamento memoravel.", image: imageAssets.grilled },
                        { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco.", image: imageAssets.acorda },
                        { name: "Espetada de Lombinho", note: "Apresentacao rustica com lado premium.", image: imageAssets.exterior }
                    ]
                }
            ]
        },
        grelhados: {
            title: "Grelhados",
            description: "Carnes premium, cortes classicos e molhos encorpados servidos com visual de brasa.",
            mediaType: "video",
            mediaSrc: videoAsset,
            groups: [
                {
                    title: "Porco Preto",
                    items: [
                        { name: "Black Pork", note: "Brasa premium com carater alentejano.", image: imageAssets.grilled },
                        { name: "Secretos", note: "Corte suculento e muito procurado.", image: imageAssets.grilled },
                        { name: "Plumas", note: "Tenras, delicadas e cheias de sabor.", image: imageAssets.lamb },
                        { name: "Lagartos", note: "Brasa viva e acabamento memoravel.", image: imageAssets.grilled },
                        { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco.", image: imageAssets.acorda }
                    ]
                },
                {
                    title: "Frango",
                    items: [
                        { name: "Lombinhos Bifinhos Alentejana com Coentros e Alhos", note: "Corte fino com assinatura tradicional.", image: imageAssets.grilled },
                        { name: "Lombinhos Grelhados", note: "Brasa direta e acabamento suculento.", image: imageAssets.grilled },
                        { name: "Lombinhos com Molho de Pimenta", note: "Molho vibrante e quente.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho de Cogumelos", note: "Camada cremosa e aromatica.", image: imageAssets.creamySteak },
                        { name: "Lombinhos com Molho Roquefort", note: "Perfil intenso com acabamento cremoso.", image: imageAssets.lamb }
                    ]
                },
                {
                    title: "Lombo de Novilho",
                    items: [
                        { name: "Lombo Grelhado 250g", note: "Corte robusto para amantes de carne.", image: imageAssets.grilled },
                        { name: "Lombo com Molho de Pimenta", note: "Calor controlado e textura rica.", image: imageAssets.creamySteak },
                        { name: "Lombo com Molho de Cogumelos", note: "Classico cremoso da casa.", image: imageAssets.creamySteak },
                        { name: "Lombo com Molho Roquefort", note: "Opcao luxuosa com perfil intenso.", image: imageAssets.lamb },
                        { name: "Espetada de Lombo", note: "Visual de fogo e servico impactante.", image: imageAssets.terrace }
                    ]
                },
                {
                    title: "Borrego",
                    items: [
                        { name: "Grilled Lamb Chop", note: "Costeleta com perfil elegante e forte.", image: imageAssets.lamb }
                    ]
                }
            ]
        },
        entradas: {
            title: "Entradas",
            description: "Pequenos pratos para abrir a mesa com textura, cor e assinatura portuguesa.",
            mediaType: "image",
            mediaSrc: imageAssets.wine,
            groups: [
                {
                    title: "Start Here",
                    items: [
                        { name: "Bread", note: "Pão quente e rústico para abrir a refeição.", image: imageAssets.wine },
                        { name: "Cheese", note: "Seleção cremosa com toque português.", image: imageAssets.dessert },
                        { name: "Olives", note: "Azeitonas intensas com salinidade leve.", image: imageAssets.carrots },
                        { name: "Boiled Carrots Alentejana", note: "Cenouras alentejanas com perfume de ervas.", image: imageAssets.carrots },
                        { name: "Tábua de Enchidos", note: "Charcutaria para partilhar em ambiente premium.", image: imageAssets.exterior },
                        { name: "Grilled Sausage", note: "Linguiça na brasa com presença de fogo.", image: imageAssets.grilled },
                        { name: "Melon with Presunto", note: "Fresco, salgado e perfeito para abrir o apetite.", image: imageAssets.dessert },
                        { name: "Scrambled Eggs with Mushrooms", note: "Conforto cremoso com cogumelos.", image: imageAssets.creamySteak },
                        { name: "Scrambled Eggs with Sausage and Shrimps", note: "Misto intenso de terra e mar.", image: imageAssets.lamb },
                        { name: "Clams", note: "Toque costeiro para começar com força.", image: imageAssets.greens }
                    ]
                }
            ]
        },
        sobremesas: {
            title: "Sobremesas",
            description: "Final doce com um ar caseiro, elegante e alinhado com a atmosfera portuguesa da casa.",
            mediaType: "image",
            mediaSrc: imageAssets.dessert,
            groups: [
                {
                    title: "Doces da Casa",
                    items: [
                        { name: "Sericaia", note: "Clássico alentejano delicado e confortável.", image: imageAssets.dessert },
                        { name: "Arroz Doce", note: "Textura cremosa e final suave.", image: imageAssets.wine },
                        { name: "Mousse de Chocolate", note: "Final intenso e elegante.", image: imageAssets.dessert },
                        { name: "Pudim Caseiro", note: "Sobremesa clássica para fechar a experiência.", image: imageAssets.wine }
                    ]
                }
            ]
        }
    };

    const menuTranslations = {
        pt: {
            tradicional: {
                title: "Tradicional",
                description: "Peixe, acordas, sopas e porco preto com a identidade rustica da casa.",
                groups: [
                    {
                        title: "Peixe",
                        items: [
                            { name: "Camarao", note: "Sabor do mar com final delicado e textura rica." },
                            { name: "Ameijoas", note: "Ameijoas com carater costeiro e perfil salino." },
                            { name: "Acorda Alentejana", note: "Conforto alentejano em prato iconico." },
                            { name: "Sopa de Tomate Alentejana", note: "Sopa de tomate com bacalhau, ovo e pedacos de pao para um conforto tipico da casa." }
                        ]
                    },
                    {
                        title: "Porco Preto",
                        items: [
                            { name: "Lombinhos a Alentejana com Coentros e Alhos", note: "Perfil herbal e autentico do sul." },
                            { name: "Lombinhos com Molho de Pimenta", note: "Final intenso e picante elegante." },
                            { name: "Lombinhos com Molho de Cogumelos", note: "Creme profundo com textura suave." },
                            { name: "Lombinhos com Molho Roquefort", note: "Molho envolvente e premium." },
                            { name: "Secretos", note: "Corte suculento e muito procurado." },
                            { name: "Plumas", note: "Tenras, delicadas e cheias de sabor." },
                            { name: "Lagartos", note: "Brasa viva e acabamento memoravel." },
                            { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco." },
                            { name: "Espetada de Lombinho", note: "Apresentacao rustica com lado premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grelhados",
                description: "Carnes premium, cortes classicos e molhos encorpados servidos com visual de brasa.",
                groups: [
                    {
                        title: "Porco Preto",
                        items: [
                            { name: "Porco Preto", note: "Brasa premium com carater alentejano." },
                            { name: "Secretos", note: "Corte suculento e muito procurado." },
                            { name: "Plumas", note: "Tenras, delicadas e cheias de sabor." },
                            { name: "Lagartos", note: "Brasa viva e acabamento memoravel." },
                            { name: "Carne Alentejana", note: "Feita na frigideira com vinho branco, ameijoas e carne de porco." }
                        ]
                    },
                    {
                        title: "Frango",
                        items: [
                            { name: "Lombinhos Bifinhos a Alentejana com Coentros e Alhos", note: "Corte fino com assinatura tradicional." },
                            { name: "Lombinhos Grelhados", note: "Brasa direta e acabamento suculento." },
                            { name: "Lombinhos com Molho de Pimenta", note: "Molho vibrante e quente." },
                            { name: "Lombinhos com Molho de Cogumelos", note: "Camada cremosa e aromatica." },
                            { name: "Lombinhos com Molho Roquefort", note: "Perfil intenso com acabamento cremoso." }
                        ]
                    },
                    {
                        title: "Lombo de Novilho",
                        items: [
                            { name: "Lombo Grelhado 250g", note: "Corte robusto para amantes de carne." },
                            { name: "Lombo com Molho de Pimenta", note: "Calor controlado e textura rica." },
                            { name: "Lombo com Molho de Cogumelos", note: "Classico cremoso da casa." },
                            { name: "Lombo com Molho Roquefort", note: "Opcao luxuosa com perfil intenso." },
                            { name: "Espetada de Lombo", note: "Visual de fogo e servico impactante." }
                        ]
                    },
                    {
                        title: "Borrego",
                        items: [
                            { name: "Costeleta de Borrego Grelhada", note: "Costeleta com perfil elegante e forte." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entradas",
                description: "Pequenos pratos para abrir a mesa com textura, cor e assinatura portuguesa.",
                groups: [
                    {
                        title: "Comece Aqui",
                        items: [
                            { name: "Pao", note: "Pao quente e rustico para abrir a refeicao." },
                            { name: "Queijo", note: "Selecao cremosa com toque portugues." },
                            { name: "Azeitonas", note: "Azeitonas intensas com salinidade leve." },
                            { name: "Cenouras Cozidas a Alentejana", note: "Cenouras alentejanas com perfume de ervas." },
                            { name: "Tabua de Enchidos", note: "Charcutaria para partilhar em ambiente premium." },
                            { name: "Linguica Assada", note: "Linguica na brasa com presenca de fogo." },
                            { name: "Melao com Presunto", note: "Fresco, salgado e perfeito para abrir o apetite." },
                            { name: "Ovos Mexidos com Cogumelos", note: "Conforto cremoso com cogumelos." },
                            { name: "Ovos Mexidos com Linguica e Camarao", note: "Misto intenso de terra e mar." },
                            { name: "Ameijoas", note: "Toque costeiro para comecar com forca." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Sobremesas",
                description: "Final doce com um ar caseiro, elegante e alinhado com a atmosfera portuguesa da casa.",
                groups: [
                    {
                        title: "Doces da Casa",
                        items: [
                            { name: "Sericaia", note: "Classico alentejano delicado e confortavel." },
                            { name: "Arroz Doce", note: "Textura cremosa e final suave." },
                            { name: "Mousse de Chocolate", note: "Final intenso e elegante." },
                            { name: "Pudim Caseiro", note: "Sobremesa classica para fechar a experiencia." }
                        ]
                    }
                ]
            }
        },
        en: {
            tradicional: {
                title: "Traditional",
                description: "Fish, bread stews, soups and black pork with the house's rustic identity.",
                groups: [
                    {
                        title: "Fish",
                        items: [
                            { name: "Shrimps", note: "Sea flavour with a delicate finish and rich texture." },
                            { name: "Clams", note: "Coastal character with a gentle salty profile." },
                            { name: "Alentejo Acorda", note: "An iconic Alentejo comfort dish." },
                            { name: "Alentejo Tomato Soup", note: "Tomato soup with cod, egg and pieces of bread for a comforting regional dish." }
                        ]
                    },
                    {
                        title: "Black Pork",
                        items: [
                            { name: "Tenderloin Alentejo Style with Coriander and Garlic", note: "Herbal and authentic southern flavour." },
                            { name: "Tenderloin with Pepper Sauce", note: "An elegant spicy finish." },
                            { name: "Tenderloin with Mushroom Sauce", note: "Deep creaminess with a soft texture." },
                            { name: "Tenderloin with Roquefort Sauce", note: "Rich premium sauce with character." },
                            { name: "Secretos", note: "A juicy cut guests always ask for." },
                            { name: "Plumas", note: "Tender, delicate and full of flavour." },
                            { name: "Lagartos", note: "Live-fire grilling with a memorable finish." },
                            { name: "Carne Alentejana", note: "Pork and clams cooked with white wine in a classic pan dish." },
                            { name: "Tenderloin Skewer", note: "Rustic presentation with a premium touch." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grilled",
                description: "Premium meats, classic cuts and rich sauces served with a live-fire look.",
                groups: [
                    {
                        title: "Black Pork",
                        items: [
                            { name: "Black Pork", note: "Premium grilling with Alentejo character." },
                            { name: "Secretos", note: "A juicy cut guests always ask for." },
                            { name: "Plumas", note: "Tender, delicate and full of flavour." },
                            { name: "Lagartos", note: "Live-fire grilling with a memorable finish." },
                            { name: "Carne Alentejana", note: "Pork and clams cooked with white wine in a classic pan dish." }
                        ]
                    },
                    {
                        title: "Chicken",
                        items: [
                            { name: "Thin Tenderloin Alentejo Style with Coriander and Garlic", note: "A thin cut with a traditional signature." },
                            { name: "Grilled Tenderloin", note: "Direct fire and a juicy finish." },
                            { name: "Tenderloin with Pepper Sauce", note: "Vibrant and warming sauce." },
                            { name: "Tenderloin with Mushroom Sauce", note: "Creamy and aromatic layer." },
                            { name: "Tenderloin with Roquefort Sauce", note: "A richer creamy finish with character." }
                        ]
                    },
                    {
                        title: "Beef Loin",
                        items: [
                            { name: "Grilled Loin 250g", note: "A robust cut for meat lovers." },
                            { name: "Loin with Pepper Sauce", note: "Balanced heat and rich texture." },
                            { name: "Loin with Mushroom Sauce", note: "A creamy house classic." },
                            { name: "Loin with Roquefort Sauce", note: "A luxurious option with strong flavour." },
                            { name: "Loin Skewer", note: "Fire-led presentation with real impact." }
                        ]
                    },
                    {
                        title: "Lamb",
                        items: [
                            { name: "Grilled Lamb Chop", note: "A chop with an elegant and bold profile." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Starters",
                description: "Small plates to open the table with texture, colour and Portuguese identity.",
                groups: [
                    {
                        title: "Start Here",
                        items: [
                            { name: "Bread", note: "Warm rustic bread to begin the meal." },
                            { name: "Cheese", note: "A creamy selection with a Portuguese touch." },
                            { name: "Olives", note: "Bold olives with light salinity." },
                            { name: "Alentejo Boiled Carrots", note: "Carrots with herbs and Alentejo character." },
                            { name: "Cured Meat Board", note: "Charcuterie made for sharing in a premium setting." },
                            { name: "Grilled Sausage", note: "Sausage kissed by the grill flame." },
                            { name: "Melon with Cured Ham", note: "Fresh, salty and perfect to open the appetite." },
                            { name: "Scrambled Eggs with Mushrooms", note: "Creamy comfort with mushrooms." },
                            { name: "Scrambled Eggs with Sausage and Shrimps", note: "An intense land-and-sea mix." },
                            { name: "Clams", note: "A coastal touch to start with impact." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "A sweet homemade finish aligned with the restaurant's Portuguese atmosphere.",
                groups: [
                    {
                        title: "House Desserts",
                        items: [
                            { name: "Sericaia", note: "A delicate comforting Alentejo classic." },
                            { name: "Rice Pudding", note: "Creamy texture with a soft finish." },
                            { name: "Chocolate Mousse", note: "An intense yet elegant ending." },
                            { name: "Homemade Flan", note: "A classic dessert to close the experience." }
                        ]
                    }
                ]
            }
        },
        es: {
            tradicional: {
                title: "Tradicional",
                description: "Pescado, acordas, sopas y cerdo negro con la identidad rustica de la casa.",
                groups: [
                    {
                        title: "Pescado",
                        items: [
                            { name: "Gambas", note: "Sabor a mar con final delicado y textura rica." },
                            { name: "Almejas", note: "Caracter costero con perfil salino suave." },
                            { name: "Acorda Alentejana", note: "Plato iconico de confort del Alentejo." },
                            { name: "Sopa de Tomate Alentejana", note: "Sopa de tomate con bacalao, huevo y trozos de pan para un sabor casero y tradicional." }
                        ]
                    },
                    {
                        title: "Cerdo Negro",
                        items: [
                            { name: "Solomillo a la Alentejana con Cilantro y Ajo", note: "Perfil herbal y autentico del sur." },
                            { name: "Solomillo con Salsa de Pimienta", note: "Final intenso y elegante." },
                            { name: "Solomillo con Salsa de Champinones", note: "Crema profunda con textura suave." },
                            { name: "Solomillo con Salsa Roquefort", note: "Salsa envolvente y premium." },
                            { name: "Secretos", note: "Corte jugoso y muy pedido." },
                            { name: "Plumas", note: "Tiernas, delicadas y llenas de sabor." },
                            { name: "Lagartos", note: "Brasa viva y acabado memorable." },
                            { name: "Carne Alentejana", note: "Cerdo y almejas cocinados con vino blanco en sarten." },
                            { name: "Brocheta de Solomillo", note: "Presentacion rustica con toque premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Parrilla",
                description: "Carnes premium, cortes clasicos y salsas intensas servidos con presencia de brasa.",
                groups: [
                    {
                        title: "Parrilla Premium",
                        items: [
                            { name: "Costeleta de Cordero a la Parrilla", note: "Una costeleta con perfil elegante y potente." },
                            { name: "Solomillo Fino a la Alentejana con Cilantro y Ajo", note: "Corte fino con firma tradicional." },
                            { name: "Solomillo a la Parrilla", note: "Brasa directa y acabado jugoso." },
                            { name: "Solomillo con Salsa de Pimienta", note: "Salsa viva y caliente." },
                            { name: "Solomillo con Salsa de Champinones", note: "Capa cremosa y aromatica." },
                            { name: "Solomillo con Salsa Roquefort", note: "Perfil premium con intensidad azul." },
                            { name: "Lomo a la Parrilla 250g", note: "Corte robusto para amantes de la carne." },
                            { name: "Lomo con Salsa de Pimienta", note: "Calor equilibrado y textura rica." },
                            { name: "Lomo con Salsa de Champinones", note: "Clasico cremoso de la casa." },
                            { name: "Lomo con Salsa Roquefort", note: "Opcion lujosa con sabor intenso." },
                            { name: "Brocheta de Lomo", note: "Presentacion al fuego con impacto." },
                            { name: "Cerdo Negro", note: "Parrilla premium con caracter alentejano." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entrantes",
                description: "Pequenos platos para abrir la mesa con textura, color y alma portuguesa.",
                groups: [
                    {
                        title: "Empiece Aqui",
                        items: [
                            { name: "Pan", note: "Pan caliente y rustico para abrir la comida." },
                            { name: "Queso", note: "Seleccion cremosa con toque portugues." },
                            { name: "Aceitunas", note: "Aceitunas intensas con salinidad ligera." },
                            { name: "Zanahorias Cocidas a la Alentejana", note: "Zanahorias con hierbas y perfume del Alentejo." },
                            { name: "Tabla de Embutidos", note: "Charcuteria para compartir en un ambiente premium." },
                            { name: "Salchicha a la Parrilla", note: "Salchicha marcada por la brasa." },
                            { name: "Melon con Jamon", note: "Fresco, salado y perfecto para abrir el apetito." },
                            { name: "Huevos Revueltos con Champinones", note: "Confort cremoso con champinones." },
                            { name: "Huevos Revueltos con Salchicha y Gambas", note: "Mezcla intensa de tierra y mar." },
                            { name: "Almejas", note: "Toque costero para empezar con fuerza." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Postres",
                description: "Un final dulce y casero alineado con la atmosfera portuguesa del restaurante.",
                groups: [
                    {
                        title: "Postres de la Casa",
                        items: [
                            { name: "Sericaia", note: "Clasico delicado y reconfortante del Alentejo." },
                            { name: "Arroz con Leche", note: "Textura cremosa y final suave." },
                            { name: "Mousse de Chocolate", note: "Final intenso y elegante." },
                            { name: "Flan Casero", note: "Postre clasico para cerrar la experiencia." }
                        ]
                    }
                ]
            }
        },
        fr: {
            tradicional: {
                title: "Traditionnel",
                description: "Poisson, acordas, soupes et porc noir avec l'identite rustique de la maison.",
                groups: [
                    {
                        title: "Poisson",
                        items: [
                            { name: "Crevettes", note: "Saveur marine avec une fin delicate et une texture riche." },
                            { name: "Palourdes", note: "Caractere cotier avec une salinite douce." },
                            { name: "Acorda Alentejana", note: "Plat reconfortant iconique de l'Alentejo." },
                            { name: "Soupe Alentejana", note: "Entree chaude et aromatique pour des soirees paisibles." }
                        ]
                    },
                    {
                        title: "Porc Noir",
                        items: [
                            { name: "Filet Mignon a l'Alentejana avec Coriandre et Ail", note: "Profil herbace et authentique du sud." },
                            { name: "Filet Mignon Sauce Poivre", note: "Final intense et elegant." },
                            { name: "Filet Mignon Sauce Champignons", note: "Creme profonde a la texture douce." },
                            { name: "Filet Mignon Sauce Roquefort", note: "Sauce riche et premium." },
                            { name: "Secretos", note: "Une coupe juteuse tres recherchee." },
                            { name: "Plumas", note: "Tendres, delicates et pleines de saveur." },
                            { name: "Lagartos", note: "Cuisson a la braise et finition memorables." },
                            { name: "Carne Alentejana", note: "Porc et palourdes cuits au vin blanc dans une poele classique." },
                            { name: "Brochette de Filet", note: "Presentation rustique avec touche premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Grillades",
                description: "Viandes premium, coupes classiques et sauces riches servies avec l'esprit braise.",
                groups: [
                    {
                        title: "Grill Premium",
                        items: [
                            { name: "Cotelette d'Agneau Grillee", note: "Une cotelette au profil elegant et puissant." },
                            { name: "Fines Tranches de Filet a l'Alentejana", note: "Coupe fine avec signature traditionnelle." },
                            { name: "Filet Grille", note: "Braise directe et finition juteuse." },
                            { name: "Filet Sauce Poivre", note: "Sauce vive et chaleureuse." },
                            { name: "Filet Sauce Champignons", note: "Couche cremeuse et aromatique." },
                            { name: "Filet Sauce Roquefort", note: "Profil premium avec intensite bleue." },
                            { name: "Longe Grillee 250g", note: "Coupe robuste pour amateurs de viande." },
                            { name: "Longe Sauce Poivre", note: "Chaleur equilibree et texture riche." },
                            { name: "Longe Sauce Champignons", note: "Classique cremeux de la maison." },
                            { name: "Longe Sauce Roquefort", note: "Option luxueuse au gout intense." },
                            { name: "Brochette de Longe", note: "Presentation au feu tres impactante." },
                            { name: "Porc Noir", note: "Grill premium avec caractere alentejan." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Entrees",
                description: "Petites assiettes pour ouvrir la table avec texture, couleur et signature portugaise.",
                groups: [
                    {
                        title: "Commencez Ici",
                        items: [
                            { name: "Pain", note: "Pain chaud et rustique pour commencer le repas." },
                            { name: "Fromage", note: "Selection cremeuse avec touche portugaise." },
                            { name: "Olives", note: "Olives intenses a la salinite legere." },
                            { name: "Carottes Alentejana", note: "Carottes parfumees aux herbes de l'Alentejo." },
                            { name: "Planche de Charcuterie", note: "Charcuterie a partager dans une ambiance premium." },
                            { name: "Saucisse Grillee", note: "Saucisse marquee par la braise." },
                            { name: "Melon au Jambon", note: "Frais, sale et parfait pour ouvrir l'appetit." },
                            { name: "Oeufs Brouilles aux Champignons", note: "Confort cremeux aux champignons." },
                            { name: "Oeufs Brouilles a la Saucisse et Crevettes", note: "Melange intense terre et mer." },
                            { name: "Palourdes", note: "Touche cotiere pour commencer avec impact." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Une fin sucree et maison en accord avec l'atmosphere portugaise du restaurant.",
                groups: [
                    {
                        title: "Desserts Maison",
                        items: [
                            { name: "Sericaia", note: "Classique delicat et reconfortant de l'Alentejo." },
                            { name: "Riz au Lait", note: "Texture cremeuse et finale douce." },
                            { name: "Mousse au Chocolat", note: "Une fin intense et elegante." },
                            { name: "Flan Maison", note: "Dessert classique pour cloturer l'experience." }
                        ]
                    }
                ]
            }
        },
        de: {
            tradicional: {
                title: "Traditionell",
                description: "Fisch, Broteintopf, Suppen und schwarzes Schwein mit rustikaler Hausidentitat.",
                groups: [
                    {
                        title: "Fisch",
                        items: [
                            { name: "Garnelen", note: "Meeresgeschmack mit feinem Abgang und reicher Textur." },
                            { name: "Muscheln", note: "Kustennote mit sanft salzigem Profil." },
                            { name: "Acorda Alentejana", note: "Ein ikonisches Wohlgericht aus dem Alentejo." },
                            { name: "Alentejo-Suppe", note: "Warme aromatische Vorspeise fur ruhige Abende." }
                        ]
                    },
                    {
                        title: "Schwarzes Schwein",
                        items: [
                            { name: "Schweinefilet nach Alentejo-Art mit Koriander und Knoblauch", note: "Krauterig und authentisch im Sudstil." },
                            { name: "Schweinefilet mit Pfeffersauce", note: "Intensiver und eleganter Abschluss." },
                            { name: "Schweinefilet mit Pilzsauce", note: "Tiefe Cremigkeit mit sanfter Textur." },
                            { name: "Schweinefilet mit Roquefortsauce", note: "Reiche Premium-Sauce mit Charakter." },
                            { name: "Secretos", note: "Ein saftiger, sehr gefragter Zuschnitt." },
                            { name: "Plumas", note: "Zart, fein und voller Geschmack." },
                            { name: "Lagartos", note: "Lebendiges Grillfeuer mit unvergesslichem Finish." },
                            { name: "Carne Alentejana", note: "Schweinefleisch und Muscheln in Weisswein klassisch aus der Pfanne." },
                            { name: "Filetspies", note: "Rustikale Prasentation mit Premium-Note." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Gegrillt",
                description: "Premium-Fleisch, klassische Zuschnitte und kraftige Saucen mit Glut-Charakter.",
                groups: [
                    {
                        title: "Premium-Grill",
                        items: [
                            { name: "Gegrilltes Lammkotelett", note: "Ein Kotelett mit elegantem und starkem Profil." },
                            { name: "Dunne Filetstreifen nach Alentejo-Art", note: "Feiner Zuschnitt mit traditioneller Handschrift." },
                            { name: "Gegrilltes Schweinefilet", note: "Direkte Glut und saftiger Abschluss." },
                            { name: "Schweinefilet mit Pfeffersauce", note: "Lebendige, warme Sauce." },
                            { name: "Schweinefilet mit Pilzsauce", note: "Cremige und aromatische Schicht." },
                            { name: "Schweinefilet mit Roquefortsauce", note: "Premium-Profil mit Blauschimmel-Intensitat." },
                            { name: "Gegrillte Lende 250g", note: "Krftiger Zuschnitt fur Fleischliebhaber." },
                            { name: "Lende mit Pfeffersauce", note: "Ausgewogene Scharfe und reiche Textur." },
                            { name: "Lende mit Pilzsauce", note: "Cremiger Hausklassiker." },
                            { name: "Lende mit Roquefortsauce", note: "Luxuriose Option mit intensivem Geschmack." },
                            { name: "Lendenspiess", note: "Feuergepragte Prasentation mit Wirkung." },
                            { name: "Schwarzes Schwein", note: "Premium-Grill mit Alentejo-Charakter." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Vorspeisen",
                description: "Kleine Teller zum Auftakt mit Textur, Farbe und portugiesischer Handschrift.",
                groups: [
                    {
                        title: "Hier Beginnen",
                        items: [
                            { name: "Brot", note: "Warmes rustikales Brot zum Start der Mahlzeit." },
                            { name: "Kase", note: "Cremige Auswahl mit portugiesischer Note." },
                            { name: "Oliven", note: "Intensive Oliven mit leichter Salzigkeit." },
                            { name: "Karotten nach Alentejo-Art", note: "Karotten mit Krautern und Alentejo-Duft." },
                            { name: "Wurst- und Schinkenbrett", note: "Charcuterie zum Teilen in Premium-Atmosphare." },
                            { name: "Gegrillte Wurst", note: "Wurst mit deutlicher Glutnote." },
                            { name: "Melone mit Schinken", note: "Frisch, salzig und perfekt fur den Appetit." },
                            { name: "Ruhrrei mit Pilzen", note: "Cremiger Komfort mit Pilzen." },
                            { name: "Ruhrrei mit Wurst und Garnelen", note: "Intensive Mischung aus Land und Meer." },
                            { name: "Muscheln", note: "Kustenakzent fur einen starken Start." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Ein susser hausgemachter Abschluss im Einklang mit der portugiesischen Atmosphare.",
                groups: [
                    {
                        title: "Hausdesserts",
                        items: [
                            { name: "Sericaia", note: "Ein zarter, wohltuender Klassiker aus dem Alentejo." },
                            { name: "Milchreis", note: "Cremige Textur mit sanftem Abschluss." },
                            { name: "Schokoladenmousse", note: "Intensiver und eleganter Abschluss." },
                            { name: "Hausgemachter Pudding", note: "Klassisches Dessert als runder Abschluss." }
                        ]
                    }
                ]
            }
        },
        it: {
            tradicional: {
                title: "Tradizionale",
                description: "Pesce, acorda, zuppe e maiale nero con l'identita rustica della casa.",
                groups: [
                    {
                        title: "Pesce",
                        items: [
                            { name: "Gamberi", note: "Sapore di mare con finale delicato e consistenza ricca." },
                            { name: "Vongole", note: "Carattere costiero con profilo salino leggero." },
                            { name: "Acorda Alentejana", note: "Piatto iconico e confortevole dell'Alentejo." },
                            { name: "Zuppa Alentejana", note: "Antipasto caldo e aromatico per serate tranquille." }
                        ]
                    },
                    {
                        title: "Maiale Nero",
                        items: [
                            { name: "Filetto all'Alentejana con Coriandolo e Aglio", note: "Profilo erbaceo e autentico del sud." },
                            { name: "Filetto con Salsa al Pepe", note: "Finale intenso ed elegante." },
                            { name: "Filetto con Salsa ai Funghi", note: "Cremosita profonda con consistenza morbida." },
                            { name: "Filetto con Salsa al Roquefort", note: "Salsa avvolgente e premium." },
                            { name: "Secretos", note: "Taglio succoso e molto richiesto." },
                            { name: "Plumas", note: "Tenere, delicate e piene di sapore." },
                            { name: "Lagartos", note: "Brace viva e finitura memorabile." },
                            { name: "Carne Alentejana", note: "Maiale e vongole cotti con vino bianco in padella." },
                            { name: "Spiedino di Filetto", note: "Presentazione rustica con tocco premium." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Alla Griglia",
                description: "Carni premium, tagli classici e salse ricche serviti con presenza di brace.",
                groups: [
                    {
                        title: "Griglia Premium",
                        items: [
                            { name: "Costolette di Agnello alla Griglia", note: "Costolette dal profilo elegante e deciso." },
                            { name: "Filetto Sottile all'Alentejana", note: "Taglio sottile con firma tradizionale." },
                            { name: "Filetto alla Griglia", note: "Brace diretta e finitura succosa." },
                            { name: "Filetto con Salsa al Pepe", note: "Salsa viva e calda." },
                            { name: "Filetto con Salsa ai Funghi", note: "Strato cremoso e aromatico." },
                            { name: "Filetto con Salsa al Roquefort", note: "Profilo premium con intensita blu." },
                            { name: "Lombo alla Griglia 250g", note: "Taglio robusto per chi ama la carne." },
                            { name: "Lombo con Salsa al Pepe", note: "Calore equilibrato e consistenza ricca." },
                            { name: "Lombo con Salsa ai Funghi", note: "Classico cremoso della casa." },
                            { name: "Lombo con Salsa al Roquefort", note: "Opzione lussuosa dal gusto intenso." },
                            { name: "Spiedino di Lombo", note: "Presentazione al fuoco di grande impatto." },
                            { name: "Maiale Nero", note: "Griglia premium con carattere alentejano." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Antipasti",
                description: "Piccoli piatti per aprire la tavola con consistenza, colore e firma portoghese.",
                groups: [
                    {
                        title: "Inizia Qui",
                        items: [
                            { name: "Pane", note: "Pane caldo e rustico per iniziare il pasto." },
                            { name: "Formaggio", note: "Selezione cremosa con tocco portoghese." },
                            { name: "Olive", note: "Olive intense con leggera sapidita." },
                            { name: "Carote all'Alentejana", note: "Carote con erbe e profumo dell'Alentejo." },
                            { name: "Tagliere di Salumi", note: "Salumi da condividere in un'atmosfera premium." },
                            { name: "Salsiccia alla Griglia", note: "Salsiccia segnata dalla brace." },
                            { name: "Melone con Prosciutto", note: "Fresco, sapido e perfetto per aprire l'appetito." },
                            { name: "Uova Strapazzate con Funghi", note: "Comfort cremoso con funghi." },
                            { name: "Uova Strapazzate con Salsiccia e Gamberi", note: "Mix intenso di terra e mare." },
                            { name: "Vongole", note: "Tocco costiero per iniziare con forza." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Dessert",
                description: "Un finale dolce e casalingo in sintonia con l'atmosfera portoghese del ristorante.",
                groups: [
                    {
                        title: "Dolci della Casa",
                        items: [
                            { name: "Sericaia", note: "Classico delicato e confortante dell'Alentejo." },
                            { name: "Riso Dolce", note: "Texture cremosa e finale morbido." },
                            { name: "Mousse al Cioccolato", note: "Finale intenso ed elegante." },
                            { name: "Budino Fatto in Casa", note: "Dessert classico per chiudere l'esperienza." }
                        ]
                    }
                ]
            }
        },
        nl: {
            tradicional: {
                title: "Traditioneel",
                description: "Vis, acorda, soepen en zwart varken met de rustieke identiteit van het huis.",
                groups: [
                    {
                        title: "Vis",
                        items: [
                            { name: "Garnalen", note: "Zeesmaak met een delicate afdronk en rijke textuur." },
                            { name: "Kokkels", note: "Kustkarakter met een lichte zilte toets." },
                            { name: "Acorda Alentejana", note: "Een iconisch troostgerecht uit de Alentejo." },
                            { name: "Alentejo-soep", note: "Warme aromatische starter voor rustige avonden." }
                        ]
                    },
                    {
                        title: "Zwart Varken",
                        items: [
                            { name: "Varkenshaas op Alentejo-wijze met Koriander en Knoflook", note: "Kruidig en authentiek zuidelijk karakter." },
                            { name: "Varkenshaas met Pepersaus", note: "Intense maar elegante afdronk." },
                            { name: "Varkenshaas met Champignonsaus", note: "Diepe romigheid met zachte textuur." },
                            { name: "Varkenshaas met Roquefortsaus", note: "Rijke premium saus met karakter." },
                            { name: "Secretos", note: "Een sappige snede waar gasten vaak om vragen." },
                            { name: "Plumas", note: "Mals, verfijnd en vol smaak." },
                            { name: "Lagartos", note: "Levend vuur en een memorabele afwerking." },
                            { name: "Carne Alentejana", note: "Varkensvlees en kokkels bereid met witte wijn in een klassiek pannengerecht." },
                            { name: "Varkenshaasspies", note: "Rustieke presentatie met premium touch." }
                        ]
                    }
                ]
            },
            grelhados: {
                title: "Gegrild",
                description: "Premium vlees, klassieke sneden en volle sauzen met uitstraling van open vuur.",
                groups: [
                    {
                        title: "Premium Grill",
                        items: [
                            { name: "Gegrilde Lamskotelet", note: "Een kotelet met een elegant en krachtig profiel." },
                            { name: "Dunne Varkenshaas op Alentejo-wijze", note: "Dunne snede met traditionele signatuur." },
                            { name: "Gegrilde Varkenshaas", note: "Direct vuur en sappige afwerking." },
                            { name: "Varkenshaas met Pepersaus", note: "Levendige en warme saus." },
                            { name: "Varkenshaas met Champignonsaus", note: "Romige en aromatische laag." },
                            { name: "Varkenshaas met Roquefortsaus", note: "Premium profiel met blauwe intensiteit." },
                            { name: "Gegrilde Lende 250g", note: "Stevige snede voor vleesliefhebbers." },
                            { name: "Lende met Pepersaus", note: "Gebalanceerde warmte en rijke textuur." },
                            { name: "Lende met Champignonsaus", note: "Een romige klassieker van het huis." },
                            { name: "Lende met Roquefortsaus", note: "Luxe optie met uitgesproken smaak." },
                            { name: "Lendespies", note: "Vuurgedreven presentatie met impact." },
                            { name: "Zwart Varken", note: "Premium grill met karakter uit de Alentejo." }
                        ]
                    }
                ]
            },
            entradas: {
                title: "Voorgerechten",
                description: "Kleine borden om de tafel te openen met textuur, kleur en Portugese signatuur.",
                groups: [
                    {
                        title: "Begin Hier",
                        items: [
                            { name: "Brood", note: "Warm rustiek brood om de maaltijd te beginnen." },
                            { name: "Kaas", note: "Romige selectie met Portugese toets." },
                            { name: "Olijven", note: "Intense olijven met lichte ziltigheid." },
                            { name: "Alentejo-wortels", note: "Wortels met kruiden en Alentejo-geur." },
                            { name: "Vleeswarenplank", note: "Charcuterie om te delen in een premium sfeer." },
                            { name: "Gegrilde Worst", note: "Worst met duidelijke grilltoets." },
                            { name: "Meloen met Ham", note: "Fris, zout en perfect om de eetlust te openen." },
                            { name: "Roerei met Champignons", note: "Romig comfort met champignons." },
                            { name: "Roerei met Worst en Garnalen", note: "Intense mix van land en zee." },
                            { name: "Kokkels", note: "Kusttoets om sterk te beginnen." }
                        ]
                    }
                ]
            },
            sobremesas: {
                title: "Desserts",
                description: "Een zoete huisgemaakte afsluiting in lijn met de Portugese sfeer van het restaurant.",
                groups: [
                    {
                        title: "Desserts van het Huis",
                        items: [
                            { name: "Sericaia", note: "Een delicate en troostende klassieker uit de Alentejo." },
                            { name: "Rijstpap", note: "Romige textuur met zachte afdronk." },
                            { name: "Chocolademousse", note: "Intense maar elegante afsluiting." },
                            { name: "Huisgemaakte Pudding", note: "Klassiek dessert om de ervaring af te sluiten." }
                        ]
                    }
                ]
            }
        }
    };


    const copy = {
    "pt": {
        "demoBanner": "Conceito independente por Syed · Não é o site oficial do restaurante",
        "languageLabel": "Selecionar idioma",
        "navMenu": "Carta",
        "navStory": "Sobre o restaurante",
        "navGallery": "Galeria",
        "navBook": "Pedir uma mesa",
        "heroKicker": "À MESA, NO ALENTEJO",
        "heroTitle": "O sabor de ficar mais um bocadinho.",
        "heroSubtitle": "Grelhados, sabores portugueses e tempo para estar à mesa. Bem-vindo à Tasca O Bernardo, em Boavista dos Pinheiros.",
        "heroPrimary": "Conhecer a carta",
        "heroSecondary": "Pedir uma mesa",
        "heroAlt": "Carne com molho e batatas fritas",
        "photoCaption": "Sabores para partilhar.",
        "menuTag": "A CARTA",
        "menuTitle": "O que lhe apetece?",
        "menuIntro": "Explore os pratos por categoria. A carta é ilustrativa; confirme opções, preços e alergénios com o restaurante.",
        "menuButtonStarters": "Sabores para partilhar",
        "menuButtonGrilled": "Cortes premium e brasa",
        "menuButtonTraditional": "Peixe e classicos da casa",
        "menuButtonDesserts": "Final doce portugues",
        "storyAlt": "Mesa posta no interior do restaurante",
        "storyTag": "A NOSSA MESA",
        "storyTitle": "Uma pausa com sabor ao Alentejo.",
        "storyBody": "Em Boavista dos Pinheiros, a Tasca O Bernardo junta cozinha portuguesa e uma mesa que convida a ficar. Entre pratos de carne, sabores do mar e um final doce, há tempo para uma boa conversa.",
        "storyDetail": "Cozinha portuguesa · Boavista dos Pinheiros",
        "storyLink": "Conhecer o espaço",
        "galleryTag": "À VOLTA DA MESA",
        "galleryTitle": "Um pouco da casa.",
        "galleryLink": "Ver mais no Instagram",
        "reviewsPrompt": "Quer saber mais sobre a casa?",
        "reviewsPrimaryButton": "Ler opiniões no Tripadvisor ↗",
        "contactTag": "GUARDE UM LUGAR À MESA",
        "contactTitle": "Uma mesa, uma boa conversa.",
        "contactIntro": "Veja como seria pedir uma mesa. Preencha os detalhes e reveja o pedido antes de o copiar.",
        "demoNotice": "Demonstração independente: nenhum pedido é enviado ao restaurante e nenhuma mesa é reservada.",
        "locationLabel": "LOCALIZAÇÃO",
        "mapLink": "Ver no Google Maps ↗",
        "businessNote": "Confirme horários, preços e disponibilidade diretamente com o restaurante.",
        "formStep": "01 / PREPARAR O PEDIDO",
        "formTitle": "Pedido de reserva",
        "formSubtitle": "Demonstração · Os dados ficam neste dispositivo.",
        "formName": "Nome",
        "formPhone": "Telefone",
        "formGuests": "Pessoas",
        "formDate": "Data",
        "formTime": "Hora",
        "formMessage": "Pedido especial",
        "formSubmit": "Pré-visualizar pedido",
        "formCopy": "Copiar demonstração",
        "footerCredit": "Conceito de website por Syed. Projeto independente, sem afiliação ao restaurante.",
        "menuNotice": "Pratos ilustrativos. Confirme a carta, preços e alergénios com o restaurante.",
        "mobileMap": "A carta",
        "mobileReserve": "Pedir uma mesa",
        "formNamePlaceholder": "Nome",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Pedido especial",
        "guestsPlaceholder": "Selecionar",
        "messagesRequired": "Por favor preencha todos os campos obrigatorios para concluir o pedido.",
        "messagesPhone": "Introduza um numero de telefone valido para podermos identificar a reserva.",
        "messagesPastDate": "A data da reserva nao pode ser anterior ao dia de hoje.",
        "messagesPastTime": "Escolha uma data e hora futuras (hora de Portugal).",
        "messagesNoSpecial": "Sem pedidos especiais.",
        "messagesReady": "Demonstração pronta. Nada foi enviado e nenhuma mesa foi reservada.",
        "messagesCopied": "Demonstração copiada. Nenhum pedido foi enviado.",
        "messagesCopyFailed": "Não foi possível copiar. Selecione e copie o texto abaixo.",
        "summaryTitle": "02 / PRÉ-VISUALIZAÇÃO — NÃO ENVIADO",
        "modalClose": "Fechar carta",
        "galleryPrevious": "Fotografia anterior",
        "galleryNext": "Fotografia seguinte",
        "skipLink": "Saltar para o conteúdo"
    },
    "en": {
        "demoBanner": "Independent concept by Syed · Not the restaurant's official website",
        "languageLabel": "Select language",
        "navMenu": "Menu",
        "navStory": "About restaurant",
        "navGallery": "Gallery",
        "navBook": "Request a table",
        "heroKicker": "AT THE TABLE, IN ALENTEJO",
        "heroTitle": "A taste worth lingering over.",
        "heroSubtitle": "Portuguese flavours, dishes from the grill, and time around the table. Welcome to Tasca O Bernardo in Boavista dos Pinheiros.",
        "heroPrimary": "Explore the menu",
        "heroSecondary": "Request a table",
        "heroAlt": "Meat with sauce and chips",
        "photoCaption": "Flavours to share.",
        "menuTag": "THE MENU",
        "menuTitle": "What takes your fancy?",
        "menuIntro": "Explore dishes by category. This menu is illustrative; confirm dishes, prices and allergens with the restaurant.",
        "menuButtonStarters": "Flavours to share",
        "menuButtonGrilled": "Premium cuts and grill",
        "menuButtonTraditional": "Fish and house classics",
        "menuButtonDesserts": "Portuguese sweet finish",
        "storyAlt": "A set table inside the restaurant",
        "storyTag": "OUR TABLE",
        "storyTitle": "A little pause. A taste of Alentejo.",
        "storyBody": "In Boavista dos Pinheiros, Tasca O Bernardo brings Portuguese cooking to a table that invites you to stay. From meat dishes to flavours of the sea and something sweet, make time for good conversation.",
        "storyDetail": "Portuguese cooking · Boavista dos Pinheiros",
        "storyLink": "Explore the space",
        "galleryTag": "AROUND THE TABLE",
        "galleryTitle": "A glimpse of the house.",
        "galleryLink": "See more on Instagram",
        "reviewsPrompt": "Curious about the restaurant?",
        "reviewsPrimaryButton": "Read reviews on Tripadvisor ↗",
        "contactTag": "MAKE ROOM AT THE TABLE",
        "contactTitle": "Good food. Better company.",
        "contactIntro": "Try the table-request experience. Fill in the details, then review your request before copying it.",
        "demoNotice": "Independent demo: no request is sent to the restaurant and no table is reserved.",
        "locationLabel": "LOCATION",
        "mapLink": "View on Google Maps ↗",
        "businessNote": "Confirm opening hours, prices and availability directly with the restaurant.",
        "formStep": "01 / PREPARE YOUR REQUEST",
        "formTitle": "Reservation request",
        "formSubtitle": "Demo · Your details stay on this device.",
        "formName": "Name",
        "formPhone": "Phone",
        "formGuests": "Guests",
        "formDate": "Date",
        "formTime": "Time",
        "formMessage": "Special request",
        "formSubmit": "Preview request",
        "formCopy": "Copy demo request",
        "footerCredit": "Website concept by Syed. Independent portfolio project, unaffiliated with the restaurant.",
        "menuNotice": "Illustrative dishes. Confirm the menu, prices and allergens with the restaurant.",
        "mobileMap": "The menu",
        "mobileReserve": "Request a table",
        "formNamePlaceholder": "Name",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Special request",
        "guestsPlaceholder": "Select",
        "messagesRequired": "Please complete all required fields to finish your request.",
        "messagesPhone": "Please enter a valid phone number so we can identify the reservation.",
        "messagesPastDate": "The reservation date cannot be earlier than today.",
        "messagesPastTime": "Choose a future date and time (Portugal time).",
        "messagesNoSpecial": "No special requests.",
        "messagesReady": "Demo ready. Nothing was sent and no table has been reserved.",
        "messagesCopied": "Demo copied. No request has been sent.",
        "messagesCopyFailed": "Copy unavailable. Select and copy the text below.",
        "summaryTitle": "02 / PREVIEW — NOT SENT",
        "modalClose": "Close menu",
        "galleryPrevious": "Previous photo",
        "galleryNext": "Next photo",
        "skipLink": "Skip to content"
    },
    "es": {
        "demoBanner": "Concepto independiente de Syed · No es el sitio oficial del restaurante",
        "languageLabel": "Seleccionar idioma",
        "navMenu": "Carta",
        "navStory": "Ambiente",
        "navGallery": "Galeria",
        "navBook": "Pedir una mesa",
        "heroKicker": "A LA MESA, EN EL ALENTEJO",
        "heroTitle": "Un sabor para quedarse un rato más.",
        "heroSubtitle": "Sabores portugueses, platos a la brasa y tiempo para compartir. Bienvenido a Tasca O Bernardo, en Boavista dos Pinheiros.",
        "heroPrimary": "Ver la carta",
        "heroSecondary": "Pedir una mesa",
        "heroAlt": "Carne con salsa y patatas fritas",
        "photoCaption": "Sabores para compartir.",
        "menuTag": "LA CARTA",
        "menuTitle": "¿Qué le apetece?",
        "menuIntro": "Explore los platos por categoría. La carta es ilustrativa; confirme platos, precios y alérgenos con el restaurante.",
        "menuButtonStarters": "Sabores para compartir",
        "menuButtonGrilled": "Cortes premium y parrilla",
        "menuButtonTraditional": "Pescado y clasicos de la casa",
        "menuButtonDesserts": "Final dulce portugues",
        "storyAlt": "Mesa puesta en el restaurante",
        "storyTag": "NUESTRA MESA",
        "storyTitle": "Una pausa con sabor al Alentejo.",
        "storyBody": "En Boavista dos Pinheiros, Tasca O Bernardo reúne cocina portuguesa y una mesa que invita a quedarse. Entre carnes, sabores del mar y un final dulce, hay tiempo para una buena conversación.",
        "storyDetail": "Cocina portuguesa · Boavista dos Pinheiros",
        "storyLink": "Conocer el espacio",
        "galleryTag": "ALREDEDOR DE LA MESA",
        "galleryTitle": "Un vistazo a la casa.",
        "galleryLink": "Ver mas en Instagram",
        "reviewsPrompt": "¿Quiere saber más del restaurante?",
        "reviewsPrimaryButton": "Leer opiniones en Tripadvisor ↗",
        "contactTag": "UN LUGAR A LA MESA",
        "contactTitle": "Una mesa, buena compañía.",
        "contactIntro": "Pruebe la solicitud de mesa. Complete los datos y revise la solicitud antes de copiarla.",
        "demoNotice": "Demostración independiente: no se envía ninguna solicitud ni se reserva una mesa.",
        "locationLabel": "UBICACIÓN",
        "mapLink": "Ver en Google Maps ↗",
        "businessNote": "Confirme horarios, precios y disponibilidad directamente con el restaurante.",
        "formStep": "01 / PREPARAR LA SOLICITUD",
        "formTitle": "Solicitud de reserva",
        "formSubtitle": "Demostración · Sus datos permanecen en este dispositivo.",
        "formName": "Nombre",
        "formPhone": "Telefono",
        "formGuests": "Personas",
        "formDate": "Fecha",
        "formTime": "Hora",
        "formMessage": "Peticion especial",
        "formSubmit": "Ver solicitud",
        "formCopy": "Copiar demostración",
        "footerCredit": "Concepto web de Syed. Proyecto independiente, sin afiliación al restaurante.",
        "menuNotice": "Platos ilustrativos. Confirme carta, precios y alérgenos con el restaurante.",
        "mobileMap": "La carta",
        "mobileReserve": "Pedir una mesa",
        "formNamePlaceholder": "Nombre",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Peticion especial",
        "guestsPlaceholder": "Seleccionar",
        "messagesRequired": "Por favor complete todos los campos obligatorios para finalizar la solicitud.",
        "messagesPhone": "Introduzca un telefono valido para identificar la reserva.",
        "messagesPastDate": "La fecha de la reserva no puede ser anterior a hoy.",
        "messagesPastTime": "Elija una fecha y hora futuras (hora de Portugal).",
        "messagesNoSpecial": "Sin peticiones especiales.",
        "messagesReady": "Demostración lista. No se ha enviado nada ni reservado una mesa.",
        "messagesCopied": "Demostración copiada. No se ha enviado ninguna solicitud.",
        "messagesCopyFailed": "No se pudo copiar. Seleccione y copie el texto de abajo.",
        "summaryTitle": "02 / VISTA PREVIA — NO ENVIADA",
        "modalClose": "Cerrar carta",
        "galleryPrevious": "Foto anterior",
        "galleryNext": "Foto siguiente",
        "skipLink": "Saltar al contenido"
    },
    "fr": {
        "demoBanner": "Concept indépendant par Syed · Ce n'est pas le site officiel du restaurant",
        "languageLabel": "Choisir la langue",
        "navMenu": "Carte",
        "navStory": "Ambiance",
        "navGallery": "Galerie",
        "navBook": "Demander une table",
        "heroKicker": "À TABLE, EN ALENTEJO",
        "heroTitle": "Le plaisir de rester un peu plus.",
        "heroSubtitle": "Saveurs portugaises, grillades et temps partagé à table. Bienvenue à Tasca O Bernardo, à Boavista dos Pinheiros.",
        "heroPrimary": "Voir la carte",
        "heroSecondary": "Demander une table",
        "heroAlt": "Viande en sauce et frites",
        "photoCaption": "Des saveurs à partager.",
        "menuTag": "LA CARTE",
        "menuTitle": "Qu'est-ce qui vous ferait plaisir ?",
        "menuIntro": "Explorez les plats par catégorie. Cette carte est illustrative ; confirmez plats, prix et allergènes auprès du restaurant.",
        "menuButtonStarters": "Saveurs a partager",
        "menuButtonGrilled": "Coupes premium et grill",
        "menuButtonTraditional": "Poisson et classiques maison",
        "menuButtonDesserts": "Final sucre portugais",
        "storyAlt": "Une table dressée au restaurant",
        "storyTag": "NOTRE TABLE",
        "storyTitle": "Une pause aux saveurs de l'Alentejo.",
        "storyBody": "À Boavista dos Pinheiros, Tasca O Bernardo réunit cuisine portugaise et plaisir de prendre son temps. Entre viandes, saveurs de la mer et douceur finale, place à la conversation.",
        "storyDetail": "Cuisine portugaise · Boavista dos Pinheiros",
        "storyLink": "Découvrir le lieu",
        "galleryTag": "AUTOUR DE LA TABLE",
        "galleryTitle": "Un aperçu de la maison.",
        "galleryLink": "Voir plus sur Instagram",
        "reviewsPrompt": "Envie d'en savoir plus ?",
        "reviewsPrimaryButton": "Lire les avis sur Tripadvisor ↗",
        "contactTag": "UNE PLACE À TABLE",
        "contactTitle": "Une table, de bons moments.",
        "contactIntro": "Essayez la demande de table. Remplissez les informations puis relisez votre demande avant de la copier.",
        "demoNotice": "Démonstration indépendante : aucune demande n'est envoyée et aucune table n'est réservée.",
        "locationLabel": "ADRESSE",
        "mapLink": "Voir sur Google Maps ↗",
        "businessNote": "Confirmez horaires, prix et disponibilités directement auprès du restaurant.",
        "formStep": "01 / PRÉPARER LA DEMANDE",
        "formTitle": "Demande de reservation",
        "formSubtitle": "Démonstration · Vos données restent sur cet appareil.",
        "formName": "Nom",
        "formPhone": "Telephone",
        "formGuests": "Convives",
        "formDate": "Date",
        "formTime": "Heure",
        "formMessage": "Demande speciale",
        "formSubmit": "Voir la demande",
        "formCopy": "Copier la démonstration",
        "footerCredit": "Concept de site par Syed. Projet indépendant, sans affiliation au restaurant.",
        "menuNotice": "Plats illustratifs. Confirmez carte, prix et allergènes auprès du restaurant.",
        "mobileMap": "La carte",
        "mobileReserve": "Demander une table",
        "formNamePlaceholder": "Nom",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Demande speciale",
        "guestsPlaceholder": "Choisir",
        "messagesRequired": "Veuillez remplir tous les champs obligatoires pour terminer votre demande.",
        "messagesPhone": "Veuillez saisir un numero de telephone valide pour identifier la reservation.",
        "messagesPastDate": "La date de reservation ne peut pas etre anterieure a aujourd'hui.",
        "messagesPastTime": "Choisissez une date et une heure futures (heure du Portugal).",
        "messagesNoSpecial": "Aucune demande speciale.",
        "messagesReady": "Démonstration prête. Rien n'a été envoyé et aucune table n'est réservée.",
        "messagesCopied": "Démonstration copiée. Aucune demande n'a été envoyée.",
        "messagesCopyFailed": "Copie indisponible. Sélectionnez et copiez le texte ci-dessous.",
        "summaryTitle": "02 / APERÇU — NON ENVOYÉ",
        "modalClose": "Fermer la carte",
        "galleryPrevious": "Photo précédente",
        "galleryNext": "Photo suivante",
        "skipLink": "Aller au contenu"
    },
    "de": {
        "demoBanner": "Unabhängiges Konzept von Syed · Keine offizielle Restaurant-Website",
        "languageLabel": "Sprache wählen",
        "navMenu": "Karte",
        "navStory": "Atmosphare",
        "navGallery": "Galerie",
        "navBook": "Tisch anfragen",
        "heroKicker": "ZU TISCH IM ALENTEJO",
        "heroTitle": "Ein Genuss, der zum Bleiben einlädt.",
        "heroSubtitle": "Portugiesische Aromen, Gerichte vom Grill und Zeit am Tisch. Willkommen in der Tasca O Bernardo in Boavista dos Pinheiros.",
        "heroPrimary": "Speisekarte ansehen",
        "heroSecondary": "Tisch anfragen",
        "heroAlt": "Fleisch mit Sauce und Pommes",
        "photoCaption": "Genuss zum Teilen.",
        "menuTag": "DIE SPEISEKARTE",
        "menuTitle": "Worauf haben Sie Appetit?",
        "menuIntro": "Entdecken Sie die Kategorien. Diese Karte dient zur Illustration; bestätigen Sie Gerichte, Preise und Allergene direkt beim Restaurant.",
        "menuButtonStarters": "Zum Teilen",
        "menuButtonGrilled": "Premium Cuts und Grill",
        "menuButtonTraditional": "Fisch und Hausklassiker",
        "menuButtonDesserts": "Portugiesisches Dessertsfinale",
        "storyAlt": "Ein gedeckter Tisch im Restaurant",
        "storyTag": "UNSER TISCH",
        "storyTitle": "Eine Pause mit dem Geschmack des Alentejo.",
        "storyBody": "In Boavista dos Pinheiros verbindet die Tasca O Bernardo portugiesische Küche mit Zeit zum Verweilen. Fleischgerichte, Aromen des Meeres und ein süßer Abschluss laden zum Gespräch ein.",
        "storyDetail": "Portugiesische Küche · Boavista dos Pinheiros",
        "storyLink": "Restaurant entdecken",
        "galleryTag": "RUND UM DEN TISCH",
        "galleryTitle": "Ein Blick ins Restaurant.",
        "galleryLink": "Mehr auf Instagram",
        "reviewsPrompt": "Mehr über das Restaurant erfahren?",
        "reviewsPrimaryButton": "Bewertungen auf Tripadvisor ↗",
        "contactTag": "EIN PLATZ AM TISCH",
        "contactTitle": "Gutes Essen. Gute Gesellschaft.",
        "contactIntro": "Testen Sie die Tischanfrage. Tragen Sie Ihre Angaben ein und prüfen Sie die Anfrage vor dem Kopieren.",
        "demoNotice": "Unabhängige Demo: Es wird keine Anfrage gesendet und kein Tisch reserviert.",
        "locationLabel": "STANDORT",
        "mapLink": "Auf Google Maps ansehen ↗",
        "businessNote": "Bestätigen Sie Öffnungszeiten, Preise und Verfügbarkeit direkt beim Restaurant.",
        "formStep": "01 / ANFRAGE VORBEREITEN",
        "formTitle": "Reservierungsanfrage",
        "formSubtitle": "Demo · Ihre Angaben bleiben auf diesem Gerät.",
        "formName": "Name",
        "formPhone": "Telefon",
        "formGuests": "Personen",
        "formDate": "Datum",
        "formTime": "Uhrzeit",
        "formMessage": "Besonderer Wunsch",
        "formSubmit": "Anfrage ansehen",
        "formCopy": "Demo-Anfrage kopieren",
        "footerCredit": "Website-Konzept von Syed. Unabhängiges Portfolio-Projekt ohne Verbindung zum Restaurant.",
        "menuNotice": "Beispielgerichte. Bestätigen Sie Speisekarte, Preise und Allergene beim Restaurant.",
        "mobileMap": "Speisekarte",
        "mobileReserve": "Tisch anfragen",
        "formNamePlaceholder": "Name",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Besonderer Wunsch",
        "guestsPlaceholder": "Auswählen",
        "messagesRequired": "Bitte fullen Sie alle Pflichtfelder aus, um die Anfrage abzuschliessen.",
        "messagesPhone": "Bitte geben Sie eine gultige Telefonnummer ein, damit wir die Reservierung erkennen konnen.",
        "messagesPastDate": "Das Reservierungsdatum darf nicht vor heute liegen.",
        "messagesPastTime": "Wählen Sie einen zukünftigen Termin (portugiesische Zeit).",
        "messagesNoSpecial": "Keine besonderen Wunsche.",
        "messagesReady": "Demo bereit. Nichts wurde gesendet und kein Tisch reserviert.",
        "messagesCopied": "Demo kopiert. Keine Anfrage wurde gesendet.",
        "messagesCopyFailed": "Kopieren nicht möglich. Markieren und kopieren Sie den Text unten.",
        "summaryTitle": "02 / VORSCHAU — NICHT GESENDET",
        "modalClose": "Speisekarte schließen",
        "galleryPrevious": "Vorheriges Foto",
        "galleryNext": "Nächstes Foto",
        "skipLink": "Zum Inhalt"
    },
    "it": {
        "demoBanner": "Concept indipendente di Syed · Non è il sito ufficiale del ristorante",
        "languageLabel": "Selezionare la lingua",
        "navMenu": "Carta",
        "navStory": "Atmosfera",
        "navGallery": "Galleria",
        "navBook": "Richiedere un tavolo",
        "heroKicker": "A TAVOLA, IN ALENTEJO",
        "heroTitle": "Il gusto di fermarsi ancora un po'.",
        "heroSubtitle": "Sapori portoghesi, piatti alla griglia e tempo da condividere. Benvenuti alla Tasca O Bernardo, a Boavista dos Pinheiros.",
        "heroPrimary": "Scoprire il menu",
        "heroSecondary": "Richiedere un tavolo",
        "heroAlt": "Carne con salsa e patatine",
        "photoCaption": "Sapori da condividere.",
        "menuTag": "IL MENU",
        "menuTitle": "Di cosa avete voglia?",
        "menuIntro": "Esplorate i piatti per categoria. Il menu è illustrativo; confermate piatti, prezzi e allergeni con il ristorante.",
        "menuButtonStarters": "Sapori da condividere",
        "menuButtonGrilled": "Tagli premium e griglia",
        "menuButtonTraditional": "Pesce e classici della casa",
        "menuButtonDesserts": "Finale dolce portoghese",
        "storyAlt": "Una tavola apparecchiata nel ristorante",
        "storyTag": "LA NOSTRA TAVOLA",
        "storyTitle": "Una pausa dal sapore dell'Alentejo.",
        "storyBody": "A Boavista dos Pinheiros, Tasca O Bernardo unisce cucina portoghese e una tavola che invita a restare. Tra carne, sapori del mare e un finale dolce, c'è tempo per una bella conversazione.",
        "storyDetail": "Cucina portoghese · Boavista dos Pinheiros",
        "storyLink": "Scoprire il locale",
        "galleryTag": "INTORNO ALLA TAVOLA",
        "galleryTitle": "Uno sguardo alla casa.",
        "galleryLink": "Vedi di piu su Instagram",
        "reviewsPrompt": "Volete conoscere meglio il ristorante?",
        "reviewsPrimaryButton": "Leggere le recensioni su Tripadvisor ↗",
        "contactTag": "UN POSTO A TAVOLA",
        "contactTitle": "Buon cibo. Buona compagnia.",
        "contactIntro": "Provate la richiesta di un tavolo. Inserite i dettagli e rileggete la richiesta prima di copiarla.",
        "demoNotice": "Dimostrazione indipendente: nessuna richiesta viene inviata e nessun tavolo viene prenotato.",
        "locationLabel": "POSIZIONE",
        "mapLink": "Vedere su Google Maps ↗",
        "businessNote": "Confermate orari, prezzi e disponibilità direttamente con il ristorante.",
        "formStep": "01 / PREPARARE LA RICHIESTA",
        "formTitle": "Richiesta di prenotazione",
        "formSubtitle": "Dimostrazione · I dati restano su questo dispositivo.",
        "formName": "Nome",
        "formPhone": "Telefono",
        "formGuests": "Persone",
        "formDate": "Data",
        "formTime": "Ora",
        "formMessage": "Richiesta speciale",
        "formSubmit": "Vedere la richiesta",
        "formCopy": "Copiare la dimostrazione",
        "footerCredit": "Concept web di Syed. Progetto indipendente, non affiliato al ristorante.",
        "menuNotice": "Piatti illustrativi. Confermate menu, prezzi e allergeni con il ristorante.",
        "mobileMap": "Il menu",
        "mobileReserve": "Richiedere un tavolo",
        "formNamePlaceholder": "Nome",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Richiesta speciale",
        "guestsPlaceholder": "Selezionare",
        "messagesRequired": "Compila tutti i campi obbligatori per completare la richiesta.",
        "messagesPhone": "Inserisci un numero di telefono valido per identificare la prenotazione.",
        "messagesPastDate": "La data della prenotazione non puo essere precedente a oggi.",
        "messagesPastTime": "Scegliete una data e un'ora future (ora del Portogallo).",
        "messagesNoSpecial": "Nessuna richiesta speciale.",
        "messagesReady": "Dimostrazione pronta. Nulla è stato inviato e nessun tavolo è prenotato.",
        "messagesCopied": "Dimostrazione copiata. Nessuna richiesta è stata inviata.",
        "messagesCopyFailed": "Impossibile copiare. Selezionate e copiate il testo qui sotto.",
        "summaryTitle": "02 / ANTEPRIMA — NON INVIATA",
        "modalClose": "Chiudere il menu",
        "galleryPrevious": "Foto precedente",
        "galleryNext": "Foto successiva",
        "skipLink": "Vai al contenuto"
    },
    "nl": {
        "demoBanner": "Onafhankelijk concept van Syed · Niet de officiële restaurantwebsite",
        "languageLabel": "Taal kiezen",
        "navMenu": "Menu",
        "navStory": "Sfeer",
        "navGallery": "Galerij",
        "navBook": "Vraag een tafel aan",
        "heroKicker": "AAN TAFEL IN DE ALENTEJO",
        "heroTitle": "Een smaak om voor te blijven.",
        "heroSubtitle": "Portugese smaken, gerechten van de grill en tijd voor elkaar. Welkom bij Tasca O Bernardo in Boavista dos Pinheiros.",
        "heroPrimary": "Bekijk het menu",
        "heroSecondary": "Vraag een tafel aan",
        "heroAlt": "Vlees met saus en friet",
        "photoCaption": "Smaken om te delen.",
        "menuTag": "HET MENU",
        "menuTitle": "Waar heeft u zin in?",
        "menuIntro": "Ontdek de gerechten per categorie. Dit menu is ter illustratie; bevestig gerechten, prijzen en allergenen bij het restaurant.",
        "menuButtonStarters": "Om te delen",
        "menuButtonGrilled": "Premium cuts en grill",
        "menuButtonTraditional": "Vis en huisklassiekers",
        "menuButtonDesserts": "Portugees zoet einde",
        "storyAlt": "Een gedekte tafel in het restaurant",
        "storyTag": "ONZE TAFEL",
        "storyTitle": "Een pauze met de smaak van de Alentejo.",
        "storyBody": "In Boavista dos Pinheiros brengt Tasca O Bernardo de Portugese keuken naar een tafel waar u graag blijft zitten. Van vleesgerechten en smaken uit zee tot een zoet slot: tijd voor een goed gesprek.",
        "storyDetail": "Portugese keuken · Boavista dos Pinheiros",
        "storyLink": "Ontdek het restaurant",
        "galleryTag": "ROND DE TAFEL",
        "galleryTitle": "Een kijkje in het restaurant.",
        "galleryLink": "Meer op Instagram bekijken",
        "reviewsPrompt": "Meer weten over het restaurant?",
        "reviewsPrimaryButton": "Lees recensies op Tripadvisor ↗",
        "contactTag": "EEN PLEK AAN TAFEL",
        "contactTitle": "Goed eten. Goed gezelschap.",
        "contactIntro": "Probeer een tafelaanvraag. Vul de gegevens in en bekijk de aanvraag voordat u deze kopieert.",
        "demoNotice": "Onafhankelijke demo: er wordt geen aanvraag verstuurd en geen tafel gereserveerd.",
        "locationLabel": "LOCATIE",
        "mapLink": "Bekijk op Google Maps ↗",
        "businessNote": "Bevestig openingstijden, prijzen en beschikbaarheid rechtstreeks bij het restaurant.",
        "formStep": "01 / AANVRAAG VOORBEREIDEN",
        "formTitle": "Reserveringsaanvraag",
        "formSubtitle": "Demo · Uw gegevens blijven op dit apparaat.",
        "formName": "Naam",
        "formPhone": "Telefoon",
        "formGuests": "Personen",
        "formDate": "Datum",
        "formTime": "Tijd",
        "formMessage": "Speciale wens",
        "formSubmit": "Aanvraag bekijken",
        "formCopy": "Demo-aanvraag kopiëren",
        "footerCredit": "Websiteconcept van Syed. Onafhankelijk portfolioproject, niet verbonden aan het restaurant.",
        "menuNotice": "Voorbeeldgerechten. Bevestig menu, prijzen en allergenen bij het restaurant.",
        "mobileMap": "Het menu",
        "mobileReserve": "Tafel aanvragen",
        "formNamePlaceholder": "Naam",
        "formPhonePlaceholder": "+351 …",
        "formMessagePlaceholder": "Speciale wens",
        "guestsPlaceholder": "Kiezen",
        "messagesRequired": "Vul alle verplichte velden in om uw aanvraag af te ronden.",
        "messagesPhone": "Voer een geldig telefoonnummer in zodat we de reservering kunnen herkennen.",
        "messagesPastDate": "De reserveringsdatum mag niet voor vandaag liggen.",
        "messagesPastTime": "Kies een datum en tijd in de toekomst (Portugese tijd).",
        "messagesNoSpecial": "Geen speciale wensen.",
        "messagesReady": "Demo klaar. Niets is verstuurd en er is geen tafel gereserveerd.",
        "messagesCopied": "Demo gekopieerd. Geen aanvraag verstuurd.",
        "messagesCopyFailed": "Kopiëren niet beschikbaar. Selecteer en kopieer de tekst hieronder.",
        "summaryTitle": "02 / VOORBEELD — NIET VERSTUURD",
        "modalClose": "Menu sluiten",
        "galleryPrevious": "Vorige foto",
        "galleryNext": "Volgende foto",
        "skipLink": "Naar inhoud"
    }
};
    window.TascaContent = { menuData, menuTranslations, copy };
})();
