import { select } from "../configs/selects.js";
export default class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    createButton() {
        var _a;
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        (_a = select('body')) === null || _a === void 0 ? void 0 : _a.appendChild(buttonElement);
        return buttonElement;
    }
}
