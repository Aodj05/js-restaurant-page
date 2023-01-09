function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(makeHome());
}

export default loadHome;