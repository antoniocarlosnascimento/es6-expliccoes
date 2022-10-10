export const videoGames = ['Swith', 'PS4', 'XBox'];
export class ArrayIteracoes {
    constructor(taxaEntrega, pedidos) {
        this.taxaEntrega = taxaEntrega;
        this.pedidos = pedidos;
    }
    ;
    arrayMap() {
        const newGames = videoGames.map((game) => `Game: ${game.toUpperCase()}`);
        newGames.forEach((game) => console.log(game));
    }
    ;
    arrayReduce() {
        const valorTotalPedidos = this.pedidos.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual;
        }, this.taxaEntrega);
        const pedidoMaisCaro = this.pedidos.reduce((anterior, atual) => {
            return anterior < atual ? atual : anterior;
        });
        console.log(`Total Pedido: R$${valorTotalPedidos} o item mais caro do pedido foi de R$${pedidoMaisCaro}`);
    }
    ;
    arraySome() {
        const temMaiorQque30 = this.pedidos.some((valor) => {
            return valor > 30;
        });
        console.log(temMaiorQque30);
    }
    arrayEvery() {
        const todosSaoMaiorQue10 = this.pedidos.every((valor) => {
            return valor > 10;
        });
        console.log(todosSaoMaiorQue10);
    }
    arrayFind() {
        const tprimeiroValorMaiorQue20 = this.pedidos.find((valor) => {
            return valor > 20;
        });
        console.log(tprimeiroValorMaiorQue20);
    }
    arrayFindIndex() {
        const tprimeiroValorMaiorQue20 = this.pedidos.findIndex((valor) => {
            return valor > 20;
        });
        console.log(tprimeiroValorMaiorQue20);
    }
    arrayFilter() {
        const tprimeiroValorMaiorQue20 = this.pedidos.filter((valor) => {
            return valor > 20;
        });
        console.log(tprimeiroValorMaiorQue20);
    }
}
