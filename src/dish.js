import loadMenu from "./menu";

function makeDish() {
    const dish = document.createElement('div');
    dish.classList.add('dish');

    dish.appendChild(
        makeDishItem(
            "INKLING",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "JOKER",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "SNAKE",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "LUIGI",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "PALUTENA",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "PAC-MAN",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "PEACH",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    dish.appendChild(
        makeDishItem(
            "WII FIT TRAINER",
            "Frying up squid as homage to the Inkling may seem a tad barbaric. Tempura Squid and Shrimp, Sriracha/Wasabi dipping sauces, Squid ink soy sauce"
        )
    );

    return dish;
}

function makeDishItem(name, desc) {
    const dishItem = document.createElement('div');
    dishItem.classList.add('dish-item');

    const dishItemName = document.createElement('h2');
    dishItemName.textContent = name;

    const dishItemDesc = document.createElement('p');
    dishItemDesc.textContent = desc;

    const dishItemImg = document.createElement('img');
    dishItemImg.src = `img/dish/${name}.png`;
    dishItemImg.alt = `${name}`;
    dishItemImg.addEventListener("click", () => {
        loadMenu();
    });
    dishItemImg.addEventListener("touchstart", () => {
        loadMenu();
    });

    dishItem.appendChild(dishItemImg);
    dishItem.appendChild(dishItemName);
    dishItem.appendChild(dishItemDesc);

    return dishItem;
}

function loadDish() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(makeDish());
}

export default loadDish;