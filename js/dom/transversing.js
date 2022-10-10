const lista = document.querySelector('ul');
export const selectItensList = (props) => {
    var _a;
    if (props.element === 'elemet-pai')
        console.log(lista === null || lista === void 0 ? void 0 : lista.parentElement);
    if (props.element === 'elemet-pai-pai')
        console.log((_a = lista === null || lista === void 0 ? void 0 : lista.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement);
    if (props.element === 'elemet-acima')
        console.log(lista === null || lista === void 0 ? void 0 : lista.previousElementSibling);
    if (props.element === 'elemet-abaixo')
        console.log(lista === null || lista === void 0 ? void 0 : lista.nextElementSibling);
    if (props.element === 'elemet-filhos')
        console.log(lista === null || lista === void 0 ? void 0 : lista.children);
    if (props.element === 'elemet-primeiro-filho')
        console.log(lista === null || lista === void 0 ? void 0 : lista.children[0]);
};
