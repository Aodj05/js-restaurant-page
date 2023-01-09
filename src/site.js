import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function makeHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restName = document.createElement("h1");
    restName.classList.add("rest-name");
    restName.textContent = "S.S.B Ultimate";

    header.appendChild(restName);
    header.appendChild(makeNav());

    return header;
}

function makeNav() {
    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("btn-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn-nav");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function makeMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function makeFooter() {
    const footer = document.createElement("p");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = "All Names and Characters Copyright © Nintendo";

    const ninLink = document.createElement("a");
    ninLink.href = "http://www.nintendo.com";

    const copyright2 = document.createElement("p");
    copyright2.textContent = "All Dish Names and Images Copyright © Gourmet Smash Bros";

    const wixLink = document.createElement("a");
    wixLink.href = "http://https://superpixeltea.wixsite.com/gourmetsmashultimate";

    footer.appendChild(copyright);
    footer.appendChild(ninLink);

    footer.appendChild(copyright2);
    footer.appendChild(wixLink);

    return footer;
}

function loadSite() {
const content = document.getElementById("content");

content.appendChild(makeHeader());
content.appendChild(makeMain());
content.appendChild(makeFooter());

setActiveBtn(document.querySelector(".btn-nav"));
loadHome();
}

export default loadSite;