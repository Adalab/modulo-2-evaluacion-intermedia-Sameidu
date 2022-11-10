'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const reset = document.querySelector('.js-reset');
const result = document.querySelector('.js-result');
const points = document.querySelector('.js-points');

let count = 0;
let lightPoints = 0;
let shadowPoints= 0;


function counter() {
    count++;
    console.log(`Numero de partidas: ${count}`);
    if (count === 10){
        button.classList.add('hidden');
        reset.classList.remove('hidden')
        button.innerHTML = `Volver a jugar`
    }
}

function randomNumber(max) {
    return Math.ceil(Math.random() * max);
   };

function shadowRace() {
    let random = randomNumber(5)
    console.log(random)
    let mordor = 0;
    if (random === 1 || random === 2 || random === 3){
        mordor = 2;
    }
    else if ( random === 4) {
        mordor = 3;
    }
    else if (random === 5) {
        mordor = 5;
    }
    return mordor;
}

function player() {
    const playerRace = parseInt(select.value);
    return playerRace;
}

function war() {
    const user = player();
    const pc = shadowRace()
    if (user > pc) {
        result.innerHTML = `Gana la alianza`
        lightPoints++;
    } else if (user === pc) {
        result.innerHTML = `Empate de fuerzas`
    } else {
        result.innerHTML = `Gana la sombra`
        shadowPoints++;
    }
    points.innerHTML = `Luz: ${lightPoints}  ||  Sombra: ${shadowPoints}`
}

function handleClick(event) {
    event.preventDefault();
    war();
    counter()
}

button.addEventListener('click', handleClick)