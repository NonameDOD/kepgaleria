import { keplista } from "./keplista.js";
import Kepek from "./kepek.js";
import { init } from "./carousel.js";

const szuloElem = document.querySelector("article");
init(szuloElem);

const kep1 = new Kepek(keplista,szuloElem);
