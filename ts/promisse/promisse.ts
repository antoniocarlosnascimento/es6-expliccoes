export const promessaExemploSimples = new Promise((resolve: any, reject: any) => {
  let condicao = true;
  if(condicao)
    setTimeout(() => {
      resolve({ nome: 'Antonio', idade: 25 }); 
    }, 1000);
  else
    reject(Error('Ocorreu um erro'))
})

const login = new Promise((resolve: any) => setTimeout(() => resolve('Usuário logado'), 1000));
const dados = new Promise((resolve: any) => setTimeout(() => resolve('Dados carregados'), 1500));

// Espera resolver todas as promisse da array que estão dentro do parametro (o resolve da promisse all é um array com todas as promisses da array)
export const esperaCarregarTudo = Promise.all([login, dados]);

// Espera resolver pelo menos uma promisse da array (o resolve da promisse race é a promisse da array que carregar primeiro)
export const esperaCarregarUma = Promise.race([login, dados]);