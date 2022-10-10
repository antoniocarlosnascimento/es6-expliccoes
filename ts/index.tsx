// tsc --init
import { apiPokemom, FetchPosts } from "./api-http/api.js";
import { videoGames, ArrayIteracoes } from "./arrays-loops/array.js";
import { puxarDados } from "./async-await/async-await.js";
import Button from "./classes/classes.js";
import { select, selectAll } from "./configs/selects.js";
import { carro, frutas } from "./destructuring/destructuring.js";
import { selectItensList } from "./dom/transversing.js";
import { fetchArquiveTxt, fetchJson, fetchBlobImage } from "./fetch-api/fetch.js";
import TabNav  from "./nav-tab/tab.js";
import { functionCalx, pessoa, calc } from "./objetos.js";
import { promessaExemploSimples, esperaCarregarTudo, esperaCarregarUma } from "./promisse/promisse.js";

// ================
// console.log(calc.areaCubica(10));
// console.log(calc.area());
// console.log(calc.hasOwnProperty('ladoA'));
// ================


// *******ARRAYS*********
// videoGames.pop();
// videoGames.push('3DS');
// console.log(videoGames, `Contem: ${videoGames.length} Games`);
// videoGames.forEach(video => console.log(video));

// new ArrayIteracoes(10, [10, 25, 30, 15]).arrayMap();
// new ArrayIteracoes(5, [10, 25, 30, 10]).arrayReduce();
// new ArrayIteracoes(5, [10, 25, 30, 40]).arraySome();
// new ArrayIteracoes(5, [12, 25, 30, 40]).arrayEvery();
// new ArrayIteracoes(5, [12, 13, 30, 40]).arrayFind();
// new ArrayIteracoes(5, [12, 13, 30, 40]).arrayFindIndex();
// new ArrayIteracoes(5, [12, 25, 30, 40]).arrayFilter();
// ***********************

// ========TRANSVERSING========
// selectItensList({element: "elemet-abaixo"})
// selectItensList({element: "elemet-filhos"})
// selectItensList({element: "elemet-pai-pai"})
// ================

// *******PROMISSE*********
// promessaExemploSimples.then(resolucao =>  console.log(resolucao));
// const retorno = promessaExemploSimples
//     .then((resolucao: any) =>  {
//         resolucao.profissao = 'Designer';
//         return resolucao;
//     })
//     .then(returnDoUltimoThem => console.log(returnDoUltimoThem))
//     .catch((rejeitado: string) => console.log(rejeitado))
//     .finally(() => console.log('Fim da promisse'));
// console.log(retorno);

// esperaCarregarTudo.then((resolucao: any[]) => console.log(resolucao));
// esperaCarregarUma.then((resolucao: any) => console.log(resolucao))
// **********************

// ============FETCH===========
// fetchArquiveTxt
//     .then(resp => resp.text())
//     .then(body => console.log(body));

// fetchJson
//     .then(resp => resp.json())
//     .then(body => console.log(body));

// fetchBlobImage
//     .then(responde => responde.blob())
//     .then(body => {
//         const blobUrl = URL.createObjectURL(body);
//         console.log(blobUrl);
        
//         const imgDom = select('.teste > img');
//         imgDom?.setAttribute('src', blobUrl);
//     })

// ============================


// ***********API**********
// const urlPost = "https://jsonplaceholder.typicode.com/posts";
// const urlPUT = "https://jsonplaceholder.typicode.com/posts/1";

// new FetchPosts(urlPUT, {
//     method: 'PUT',
//     body: '{ "title": "JavaScript" }',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     }
// }).cadastrar();

// ************************

// ============ASYNC-AWAIT===========
// puxarDados();
// ==================================

// **********CLASSES**********
// new Button('Botão', '#ddd').createButton();
// ***************************

// ==========DESTRUCTURING=========
const { marca, motor, motor: { arranque } } = carro;
console.log(motor.cavalos, marca, arranque.zeroAcem);

const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1)

document.addEventListener('keyup', ({key, keyCode}) => console.log(key + ':' +  keyCode))
// ================================

new TabNav('.js-tabmenu li', '.js-tabcontent section').init();
