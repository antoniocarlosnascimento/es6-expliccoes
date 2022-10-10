import { carro, frutas } from "./destructuring/destructuring.js";
import TabNav from "./nav-tab/tab.js";
const { marca, motor, motor: { arranque } } = carro;
console.log(motor.cavalos, marca, arranque.zeroAcem);
const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1);
document.addEventListener('keyup', ({ key, keyCode }) => console.log(key + ':' + keyCode));
new TabNav('.js-tabmenu li', '.js-tabcontent section').init();
