import loadDish from "./dish";

function makeMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        makeMenuItem(
            "INKLING",
            "Seafood Tempura Platter with Ink Dipping Sauces"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "JOKER",
            "Coffee Curry Udon Soup"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "SNAKE",
            "Whiskey Baked Beans and Smoked Pork Ration"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "LUIGI",
            "Mushrooms & Asparagus Pesto Linguine"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "PALUTENA",
            "Green Goddess Greek Veggie Burger"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "PAC-MAN",
            "Fruit and Tapioca Pearl Jello Salad"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "PEACH",
            "Regal Rosewater Peach Layercake"
        )
    );

    menu.appendChild(
        makeMenuItem(
            "WII FIT TRAINER",
            "Health Nut Protein Bars"
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
    dishDesc.textContent = desc;

    const dishImg = document.createElement("img");
    dishImg.src = `img/dish/${name}.png`;
    dishImg.alt = `${name}`;
    dishImg.addEventListener("click", () => {
        loadDish(name);
    });

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