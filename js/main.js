'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   };

function player() {
    const playerRace = parseInt(result.value);
    return playerRace;
}

function war() {
    if (playerRace > random) {
        console.log (`Gana la alianza`);
    } else if (playerRace === random) {
        console.log (`Empate de fuerzas`);
    } else {
        console.log (`Gana la sombra`)
    }
}
