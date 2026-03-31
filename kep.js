export default class Kep {
    #obj = {};
    constructor(obj = {src,cim,leiras,index},szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit();
        const kepElem = document.querySelector("img")
        kepElem.addEventListener("click", function(event) {
            console.log(event.target);
        }) 
    }
    megjelenit() {
        this.szuloElem.innerHTML += `<div class="kep">
        <img src="${this.#obj.src}" class="${this.#obj.index}">
        <p>${this.#obj.cim}<p>
        <p>${this.#obj.leiras}</p>
        </div>`
    }
    getObj() {
        return this.#obj;
    }
}