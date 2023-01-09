function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImg = document.createElement("img");
    chefImg.src = "img/profilepic.jpg";
    chefImg.alt = "profilepic";

    home.appendChild(createParagraph("Dishes inspired by Smash Characters"));
    home.appendChild(chefImg);
    home.appendChild(createParagraph("Visit us soon!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(makeHome());
}

export default loadHome;