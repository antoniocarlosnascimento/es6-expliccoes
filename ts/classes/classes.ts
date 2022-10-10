import { select } from "../configs/selects.js";

interface ButtonType {
  text: string ;
  background: string;

  createButton: () => HTMLButtonElement;
}

export default class Button implements ButtonType{
  text: string ;
  background: string ;

  constructor(text: string, background: string) {
    this.text = text;
    this.background = background;
  }

  createButton() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;

    select('body')?.appendChild(buttonElement)
    

    return buttonElement;
  }
}