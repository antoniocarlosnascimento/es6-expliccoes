import { selectAll } from "../configs/selects.js";
;
export default class TabNav {
    constructor(tabMenu, tabContent) {
        this.tabMenu = selectAll(tabMenu);
        this.tabContent = selectAll(tabContent);
    }
    activeSection(index) {
        this.tabContent.forEach((section) => section.classList.remove('ativo'));
        this.tabContent[index].classList.add('ativo');
    }
    activeMenu() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeSection(index));
        });
    }
    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.tabContent[0].classList.add('ativo');
            this.activeMenu();
        }
    }
}
