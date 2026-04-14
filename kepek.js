import Kep from "./kep.js";

export default class Kepek {
    #lista = {};
    constructor (keplista, szuloElem) {
        this.szuloElem = szuloElem;
        this.#lista = keplista;
        this.megjelenit(szuloElem);
    }

    megjelenit(szuloElem) {
        for (let index = 0; index < this.getLista().length; index++) {
           new Kep(this.getLista()[index],szuloElem);
        }
    }
    getLista() {
        return this.#lista;
    }
}