export const promessaExemploSimples = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao)
        setTimeout(() => {
            resolve({ nome: 'Antonio', idade: 25 });
        }, 1000);
    else
        reject(Error('Ocorreu um erro'));
});
const login = new Promise((resolve) => setTimeout(() => resolve('Usuário logado'), 1000));
const dados = new Promise((resolve) => setTimeout(() => resolve('Dados carregados'), 1500));
export const esperaCarregarTudo = Promise.all([login, dados]);
export const esperaCarregarUma = Promise.race([login, dados]);
