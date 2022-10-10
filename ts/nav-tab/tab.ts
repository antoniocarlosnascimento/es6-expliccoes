import { select, selectAll } from "../configs/selects.js";

interface TabNavType {
  tabMenu: string, 
  tabContent: string

  activeSection: (index: number) => void,
  activeMenu: () => void,
  init: () => void;

};

export default class TabNav implements TabNavType {
  tabMenu: any;
  tabContent: any;
  
  constructor(tabMenu: any, tabContent: any) {
    this.tabMenu = selectAll(tabMenu);
    this.tabContent = selectAll(tabContent);
  }

  activeSection(index: number) {
    this.tabContent.forEach((section: HTMLElement) => section.classList.remove('ativo'));
    this.tabContent[index].classList.add('ativo')
  }

  activeMenu() {
    this.tabMenu.forEach((itemMenu: HTMLElement, index: number) => {
      itemMenu.addEventListener('click', () => this.activeSection(index))
    })
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add('ativo')
      this.activeMenu();
    }
  }
}