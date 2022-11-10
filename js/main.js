'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');

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
    } else if (user === pc) {
        result.innerHTML = `Empate de fuerzas`
    } else {
        result.innerHTML = `Gana la sombra`
    }
}

function handleClick(event) {
    event.preventDefault();
    war();
}

button.addEventListener('click', handleClick)