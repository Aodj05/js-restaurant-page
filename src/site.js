import loadHome from "./home";
import loadMenu from "./menu";

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
        loadMenu;
    });

    return nav;
}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
}

function loadSite() {
const content = document.getElementById("content");

content.appendChild(makeHeader());
}

export default loadSite;