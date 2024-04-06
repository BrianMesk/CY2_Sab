// COMO ALTERAR OS ELEMENTOS DA TELA
const divs = document.getElementsByTagName('div')
const div = document.getElementById('area')
const div_class = document.getElementsByClassName('area')
let contador_click = 0 

console.log(divs) // MOSTRAR LISTA
console.log(div) // MOSTRAR ELEMENTO
console.log(div_class) // MOSTRAR LISTA



// ALTERANDO AS PROPIEDADES DOS ELEMENTOS
div.style.backgroundColor = 'green'


for (var i = 0; i < divs.length; i++)
{
    div_class[i].style.backgroundColor = 'green'
    divs[i].innerText = 'robsó'
    divs[i].addEventListener('click', clicar2)
}



// EVENTOS
div.addEventListener('click', clicar)
div.addEventListener('mouseenter',entrar)
div.addEventListener('mouseout', sair)
div.addEventListener('mouseup', clicado)
div.addEventListener('mousedown', desclicado)

function desclicado()
{
    div.style.backgroundColor = 'blue'
}

function clicado()
{
    div.style.backgroundColor = 'red'
    contador_click++
    if(contador_click == 5)
    {
        div.remove()
    }
}

function sair()
{
    div.innerText = 'fui saido'
}

function entrar()
{
    div.innerText = 'Fui Entrado'
}

function clicar()
{
    div.innerText = 'fui clicado!'

}

function clicar2()
{
    for (var i = 0; i < divs.length; i++)
{
    div_class[i].style.backgroundColor = 'green'
    divs[i].innerText = 'ta okay    '
}
}