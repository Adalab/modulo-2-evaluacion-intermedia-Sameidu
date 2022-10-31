'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');

function randomNumber(max) {
    return Math.ceil(Math.random() * max);
   };

function shadowRace(randomNumber) {
    let mordor = 1;
    if (randomNumber(5) === 1 || randomNumber(5) === 2 || randomNumber(5) === 3){
        mordor = 2;
    }
    else if ( randomNumber(5) === 4) {
        mordor = 3;
    }
    else if (randomNumber(5) === 5) {
        mordor = 5;
    }
    return mordor;
}

function player() {
    const playerRace = parseInt(select.value);
    return playerRace;
}


function war(playerRace, shadowRaces) {
    if (playerRace > shadowRace) {
        result.innerHTML = `Gana la alianza`
    } else if (playerRace === shadowRaces) {
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