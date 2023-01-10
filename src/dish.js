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
            "A  secret ingredient that sets this apart from typical Japanese curry: coffee! Curry, Soup, Udon"
        )
    );

    dish.appendChild(
        makeDishItem(
            "SNAKE",
            "When he's not eating wild animals such as snakes, parrots, and tree frogs, Snake will eat whatever pre-prepared foods he's lucky enough to get a hold of. Whiskey, Baked beans, Pork."
        )
    );

    dish.appendChild(
        makeDishItem(
            "LUIGI",
            "Luigi is leaner and greener than Mario, so let's go with a healthy dish. Mushroom, Asparagus, Pesto, Linguini"
        )
    );

    dish.appendChild(
        makeDishItem(
            "PALUTENA",
            " In Kid Icarus Uprising, she's depicted as having quite a voracious appetite - she and Pit always seem to be thinking about food! Green Goddess Sauce, Greek Veggie Patty"
        )
    );

    dish.appendChild(
        makeDishItem(
            "PAC-MAN",
            " He's as old school as old school gets! Try this vintage dish. Assorted Fruits, Gelatin, Topped with whipped cream."
        )
    );

    dish.appendChild(
        makeDishItem(
            "PEACH",
            "A white, multi-tiered layercake is also perfect for a wedding – and numerous Mario games just so happen to involve Peach in a wedding gown. Rosewater cake, Peach Jam, whipped cream and fruit."
        )
    );

    dish.appendChild(
        makeDishItem(
            "WII FIT TRAINER",
            "A healthy snack for Wii Fit's training guru! Peanut Butter, Honey, Assorted seeds, Almonds"
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