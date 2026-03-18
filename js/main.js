'use strict';

/* SECCIÓN DE QUERY SELECTORS */
const selectMove = document.querySelector('.js-selectMove');
const btnPlay = document.querySelector('.js-btnPlay');
const btnRestart = document.querySelector('.js-btnRestart');
const resultParagraph = document.querySelector('.js-resultParagraph');
const userScoreElement = document.querySelector('.js-userScore');
const computerScoreElement = document.querySelector('.js-computerScore');
const roundCounterElement = document.querySelector('.js-roundCounter');
const yearElement = document.querySelector ('.js-year');
const resultSection = document.querySelector ('.js-result');

/* SECCIÓN DE DATOS */
let userScore = 0;
let computerScore = 0;
let rounds = 0;

const rules = {
  piedra: 'tijera',
  papel: 'piedra',
  tijera: 'papel'
};

const currentYear = new Date().getFullYear();

/* SECCIÓN DE FUNCIONES */
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

function getWinnerMessage() {
  if (userScore > computerScore) {
    return ' 🏆¡Has ganado la partida!';
  } else if (computerScore > userScore) {
    return '💻 Ha ganado la computadora';
  } else {
    return '🤝 Empate final';
  }
}

function endGame() {
  resultParagraph.textContent = getWinnerMessage();

  btnPlay.classList.add('hidden');
  btnRestart.classList.remove('hidden');
}

function playGame() {
  if (rounds === 0) {
    resultSection.classList.remove ('hidden');
  }

  if (rounds >= 10) {
    endGame();
    return;
  }

  const userMove = selectMove.value;
  const computerMove = getComputerMove();

  let message = '';

  if (userMove === computerMove) {
    message = 'Empate';
  } else if (rules[userMove] === computerMove) {
    message = '¡Has ganado!';
    userScore++;
  } else {
    message = '¡Has perdido!';
    computerScore++;
  }

  rounds++;

  resultParagraph.textContent = `Jugadora: ${userMove} | Computadora: ${computerMove} → ${message}`;

  renderScores();

  if (rounds === 10) {
    endGame();
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  resultParagraph.textContent = '¡Nueva partida!';

  btnRestart.classList.add('hidden');
  btnPlay.classList.remove('hidden');

  resultSection.classList.add ('hidden');

  renderScores();
}

/* SECCIÓN DE FUNCIONES DE EVENTOS */
function handleClickPlay(ev) {
  ev.preventDefault();
  playGame();
}

function handleClickRestart() {
  resetGame();
}

btnPlay.addEventListener('click', handleClickPlay);
btnRestart.addEventListener('click', handleClickRestart);

/* SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA */
renderScores();
yearElement.textContent = currentYear;
