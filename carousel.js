let index = 0;
import { keplista } from "./keplista.js";

export function init(szuloElem) {
    szuloElem.innerHTML += `
        <div id="carousel">
            <button id="left">bal</button>
            <button id="right">jobb</button>
            <img id="kep">
        </div>
    `;

    const balElem = document.getElementById("left");
    const jobbElem = document.getElementById("right");
    const kepElem = document.getElementById("kep");

    // kezdőkép
    kepElem.src = keplista[index].src;

    addCustomClick(balElem, "balKattintas", () => {
        index--;

        // ha 0 alá megy → utolsó elem
        if (index < 0) {
            index = keplista.length - 1;
        }

        kepElem.src = keplista[index].src;
    });

    addCustomClick(jobbElem, "jobbKattintas", () => {
        index++;

        // ha túllép → vissza 0-ra
        if (index >= keplista.length) {
            index = 0;
        }

        kepElem.src = keplista[index].src;
    });
}

function addCustomClick(elem, eventName, callback) {

    // custom event listener → IDE kerül a logika
    elem.addEventListener(eventName, callback);

    // click → kiváltja a custom eventet
    elem.addEventListener("click", e => {
        elem.dispatchEvent(new CustomEvent(eventName, {
            detail: { originalEvent: e }
        }));
    });
}
