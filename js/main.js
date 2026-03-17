'use strict'

/*SECCIÓN DE QUERY-SELECTOR*/
const selectMove = document.querySelector('.js-selectMove');
const btnPlay = document.querySelector('.js-btnPlay');
const form = document.querySelector('.js-form');
const resultParagraph = document.querySelector('.js-resultParagraph');
const userScoreElement = document.querySelector('.js-userScore');
const computerScoreElement = document.querySelector('.js-computerScore');
const roundCounterElement = document.querySelector('.js-roundCounter');


/*SECCIÓN DE DATOS*/
let userScore = 0;
let computerScore = 0;
let rounds = 0;

const rules = {
  piedra: 'tijera',
  papel: 'piedra',
  tijera: 'papel'
};


// SECCIÓN DE FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getComputerMove() {
  const randomNumber = getRandomNumber(9);

  if (randomNumber <= 3) {
    return 'piedra';
  } else if (randomNumber >= 7) {
    return 'papel';
  } else {
    return 'tijera';
  }
}

function renderScores() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  roundCounterElement.textContent = rounds;
}

function playGame() {
  if (rounds >= 10) {
    resultParagraph.textContent = 'Fin del juego';
    return;
  }

  const userMove = selectMove.value;
  const computerMove = getComputerMove();

  let message = '';

  if (userMove === computerMove) {
    message = 'Empate';
  } else if (rules[userMove] === computerMove) {
    message = '¡Has Ganado!';
    userScore++;
  } else {
    message = '¡Has perdido!';
    computerScore++;
  }

  rounds++;

  resultParagraph.textContent = `Jugadora: ${userMove}. Computadora: ${computerMove}. ${message}`;

  renderScores();
}


// SECCIÓN DE FUNCIONES DE EVENTOS

function handleClickPlay(ev) {
  ev.preventDefault();
  playGame();
}


/*SECCIÓN DE EVENTOS*/
btnPlay.addEventListener('click', handleClickPlay);


/*SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA*/
renderScores();

/*console.log('Página y JS cargados!');*/