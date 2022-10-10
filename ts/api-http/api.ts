export const apiPokemom = fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(response => response.json())
.then(pekemom => {
  // console.log(pekemom)
})

type OptionsType = {
  method: 'POST' | 'GET' | 'PUT',
  body: '{ "title": "JavaScript" }',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}

const options: OptionsType = {
  method: 'POST',
  body: '{ "title": "JavaScript" }',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}

export class FetchPosts {
  url: string;
  options: OptionsType;

  constructor (url: string, options: OptionsType) {
    this.url = url;
    this.options = options;
  }

  cadastrar() {
    fetch(this.url, this.options).
    then(response => response.json())
    .then(json => console.log(`"${json.title}" Foi cadastrado com sucesso!`)) 
    .catch(() => Error('Algo deu errado!'))
  }

};
