import { keplista } from "./keplista.js";

export default class Kepek {
    #lista = {};
    constructor (szuloElem) {
        this.szuloElem = szuloElem;
        for (let index = 0; index < keplista.length; index++) {
            this.#lista.push(keplista[i]);
        }
        this.megjelenit();
    }

    megjelenit() {
        for (let index = 0; index < this.getLista().length; index++) {
           new Kep(this.getLista()[index],szuloElem);
        }
    }
    getLista() {
        return this.#lista;
    }
}