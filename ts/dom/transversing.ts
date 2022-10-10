const lista = document.querySelector('ul');

// Elements => Tags HTMl
// Node => Textos, Comentarios, Tags HTMl

type Opcoes = {
  element: 
    'elemet-pai' |
    'elemet-pai-pai' |
    'elemet-acima' |
    'elemet-abaixo' |
    'elemet-filhos' |
    'elemet-primeiro-filho'
}

export const selectItensList = (props: Opcoes) => {
    if(props.element === 'elemet-pai')
      console.log(lista?.parentElement); // element pai

    if(props.element === 'elemet-pai-pai')
      console.log(lista?.parentElement?.parentElement); // element pai do pai
    
    if(props.element === 'elemet-acima')
      console.log(lista?.previousElementSibling); // Elemento acima
    
    if(props.element === 'elemet-abaixo')
      console.log(lista?.nextElementSibling); // elemento abaixo
    
    if(props.element === 'elemet-filhos')
      console.log(lista?.children); // HTMLCollection com os filhos
    
    if(props.element === 'elemet-primeiro-filho')
      console.log(lista?.children[0]); // Primeiro filho
}