export const pessoa = {
    nome: 'Antonio',
    idade: 28,
    profissao: 'Analista',
    possuiFaculdade: true
};
export const functionCalx = () => {
    console.log('X, U, Z');
};
export const calc = {
    ladoA: 10,
    ladoB: 2,
    areaCubica: function (profundidade) {
        console.log(`${this.ladoA} * ${this.ladoB} * ${profundidade}`);
        return this.ladoA * this.ladoB * profundidade;
    },
    area: function () {
        console.log(`${this.ladoA} * ${this.ladoB}`);
        return this.ladoA * this.ladoB;
    }
};
