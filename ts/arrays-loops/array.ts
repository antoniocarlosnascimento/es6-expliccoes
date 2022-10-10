type Games = string[];

export const videoGames: Games = ['Swith', 'PS4', 'XBox'];

interface TyperrayIteracoes {
  taxaEntrega: number,
  pedidos: number[],

  arrayMap: () => void,
  arrayReduce: () => void,
  arraySome: () => void,
  arrayEvery: () => void,
  arrayFind: () => void,
  arrayFindIndex: () => void,
  arrayFilter: () => void,
}


export class ArrayIteracoes implements TyperrayIteracoes {
  taxaEntrega: number;
  pedidos: number[];

  constructor(taxaEntrega: number, pedidos: number[]) {
    this.taxaEntrega = taxaEntrega;
    this.pedidos = pedidos;
  };

  arrayMap() {
    // map() = Retorna uma nova array modifica com valores atualizados de acordo com o return de cada iteraçao
    const newGames = videoGames.map((game: string) => `Game: ${game.toUpperCase()}`);
    newGames.forEach((game: string) => console.log(game))
  };

  arrayReduce() {
    // O acumulador é valor da iteração anterior (0 = um valor inicial(opcional))
    const valorTotalPedidos: number = this.pedidos.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    }, this.taxaEntrega);

    // Calculando maior valor
    const pedidoMaisCaro = this.pedidos.reduce((anterior, atual) => {
      return anterior < atual ? atual : anterior; //Se for maior atribui o valor do atual para o acumulador
    })

    console.log(`Total Pedido: R$${valorTotalPedidos} o item mais caro do pedido foi de R$${pedidoMaisCaro}`)
  };

  arraySome() {
    // Se pelo menos um return da iteração for true, ele retorna true
    const temMaiorQque30 = this.pedidos.some((valor) => {
      return valor > 30;
    });

    console.log(temMaiorQque30);
  }

  arrayEvery() {
    // So retorna true se o retorno de todas as iteracoes retornarem true
    const todosSaoMaiorQue10 = this.pedidos.every((valor) => {
      return valor > 10;
    })

    console.log(todosSaoMaiorQue10)
  }

  arrayFind() {
    // Retorna o valor atual da primeira iteraçao que retornar true
    const tprimeiroValorMaiorQue20 = this.pedidos.find((valor) => {
      return valor > 20;
    })

    console.log(tprimeiroValorMaiorQue20)
  }

  arrayFindIndex() {
    // Retorna o posição atual da primeira iteraçao que retornar true
    const tprimeiroValorMaiorQue20 = this.pedidos.findIndex((valor) => {
      return valor > 20;
    })

    console.log(tprimeiroValorMaiorQue20)
  }

  arrayFilter() {
    // Retorna uma array com todos os valores que retornaram true na iteração
    const tprimeiroValorMaiorQue20 = this.pedidos.filter((valor) => {
      return valor > 20;
    })

    console.log(tprimeiroValorMaiorQue20)
  }

}