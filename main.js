(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");return n.src="img/profilepic.jpg",n.alt="profilepic",t.appendChild(e("Dishes inspired by Smash Characters")),t.appendChild(n),t.appendChild(e("Visit us soon!")),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const d=document.createElement("p");d.textContent=t;const c=document.createElement("img");return c.src=`img/dish/${e.toUpperCase}.png`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(d),n}function a(){const e=document.createElement("header");e.classList.add("header");const a=document.createElement("h1");return a.classList.add("rest-name"),a.textContent="S.S.B Ultimate",e.appendChild(a),e.appendChild(function(){const e=document.createElement("nav"),a=document.createElement("button");a.classList.add("btn-nav"),a.textContent="Home",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(d(a),t())}));const c=document.createElement("button");c.classList.add("btn-nav"),c.textContent="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(d(c),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("INKLING","Seafood Tempura Platter with Ink Dipping Sauces")),e.appendChild(n("JOKER","Coffee Curry Udon Soup")),e.appendChild(n("SNAKE","Whiskey Baked Beans and Smoked Pork Ration")),e.appendChild(n("LUIGI","Mushrooms & Asparagus Pesto Linguine")),e.appendChild(n("PALUTENA","Green Goddess Greek Veggie Burger")),e.appendChild(n("PAC-MAN","Fruit and Tapioca Pearl Jello Salad")),e.appendChild(n("PEACH","Regal Rosewater Peach Layercake")),e.appendChild(n("WII FIT TRAINER","Health Nut Protein Bars")),e}())}())}));const o=document.createElement("button");return o.classList.add("btn-nav"),o.textContent="Contact",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(d(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 123 456 789";const n=document.createElement("p");n.textContent="🏠 6 Ordon Village, Southern Hyrule, Hyrule";const a=document.createElement("img");return a.src="img/location.png",a.alt="SSB Ultimate location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}())})),e.appendChild(a),e.appendChild(c),e.appendChild(o),e}()),e}function d(e){document.querySelectorAll(".btn-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("p");e.classList.add("footer");const t=document.createElement("p");t.textContent="All Names and Characters Copyright © Nintendo";const n=document.createElement("a");n.href="http://www.nintendo.com";const a=document.createElement("p");a.textContent="All Dish Names and Images Copyright © Gourmet Smash Bros";const d=document.createElement("a");return d.href="http://https://superpixeltea.wixsite.com/gourmetsmashultimate",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(d),e}()),d(document.querySelector(".btn-nav")),t()}()})();