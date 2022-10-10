type Pessoa = {
    nome: string,
    idade: number,
    profissao: string,
    possuiFaculdade: boolean
}

export const pessoa: Pessoa = {
    nome: 'Antonio',
    idade: 28,
    profissao: 'Analista',
    possuiFaculdade: true
    }



export const functionCalx = () => {
    console.log('X, U, Z')
}

interface Calc {
    ladoA: number,
    ladoB: number,
    areaCubica: (profundidade: number) => number,
    area: () => number,
}

export const calc: Calc = {
    ladoA: 10,
    ladoB: 2,

    areaCubica: function(this: Calc, profundidade) {
        console.log(`${this.ladoA} * ${this.ladoB} * ${profundidade}`)
        return this.ladoA * this.ladoB * profundidade;
    },
    area: function(this: Calc) {
        console.log(`${this.ladoA} * ${this.ladoB}`)
        return this.ladoA * this.ladoB;
    }
}