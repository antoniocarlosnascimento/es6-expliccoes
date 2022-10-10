export const apiPokemom = fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(pekemom => {
});
const options = {
    method: 'POST',
    body: '{ "title": "JavaScript" }',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    }
};
export class FetchPosts {
    constructor(url, options) {
        this.url = url;
        this.options = options;
    }
    cadastrar() {
        fetch(this.url, this.options).
            then(response => response.json())
            .then(json => console.log(`"${json.title}" Foi cadastrado com sucesso!`))
            .catch(() => Error('Algo deu errado!'));
    }
}
;
