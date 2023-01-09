function makeMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        makeMenuItem(
            "INKLING - Seafood Tempura Platter with Ink Dipping Sauces",
            "Squid, Tempura shrimp, Colored ink sriracha mayo/wasabi mayo, Squid ink soy sauce"
        )
    );

    menu.appendChild(
        makeMenuItem("JOKER - Coffee Curry Udon Soup",
        "Udon, Curry, Coffee"
        )
    );

    menu.appendChild(
        makeMenuItem("SNAKE - Whiskey Baked Beans and Smoked Pork Ration",
        "Whiskey, Beans, Pork Shoulder"
        )
    );

    menu.appendChild(
        makeMenuItem("LUIGI - Mushrooms & Asparagus Pesto Linguine",
        "Assorted Mushroom, Asparagus, Pesto, Linguine Pasta"
        )
    );

    menu.appendChild(
        makeMenuItem("PALUTENA - Green Goddess Greek Veggie Burger",
        "Ciabatta, Greek Veggie Patty, Green Goddess Sauce"
        )
    );

    menu.appendChild(
        makeMenuItem("PAC-MAN - Fruit and Tapioca Pearl Jello Salad",
        "Assorted Fruits, Gelatin, Tapioca"
        )
    );

    menu.appendChild(
        makeMenuItem("PEACH - Regal Rosewater Peach Layercake",
        "Rosewater Cake, Peach Jam, Rosewater Cream Frosting"
        )
    );

    menu.appendChild(
        makeMenuItem("WII FIT TRAINER - Health Nut Protein Bars",
        "Peanut Butter, Honey, Protein Powder, Assorted Nuts and Seeds"
        )
    );

    return menu;
}

function makeMenuItem(name, desc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const dishName = document.createElement("h2");
    dishName.textContent = name;

    const dishDesc = document.createElement("p");
    disDesc.textContent = desc;

    const dishImg = document.createElement("img");
    dishImg.src = `img/dish/${name.toLowerCase()}.png`;
    dishImg.alt = `${name}`;

    menuItem.appendChild(dishImg);
    menuItem.appendChild(dishName);
    menuItem.appendChild(dishDesc);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(makeMenu());
}

export default loadMenu;