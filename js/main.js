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
// variables que cambian durante ejecución
let userScore = 0;
let computerScore = 0;
let rounds = 0;

// reglas 
const rules = {
  piedra: 'tijera',
  papel: 'piedra',
  tijera: 'papel'
};

// año automático
const currentYear = new Date().getFullYear();

/* SECCIÓN DE FUNCIONES */
// número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// jugada ordenador
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

// actualizar html y pintar las puntuaciones
function renderScores() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  roundCounterElement.textContent = rounds;
}

//pintar la jugada
function renderPlay (userMove, computerMove, message) {
  resultParagraph.textContent = `Jugadora: ${userMove} | Computadora: ${computerMove} → ${message}`;
}

// lógica del resultado
function renderMessage (userMove, computerMove, winMessage, loseMessage, drawMessage) {
  if (userMove === computerMove) {
    return drawMessage;
  } else if (rules [userMove] === computerMove) {
    userScore++;
    return winMessage;
  } else {
    computerScore++;
    return loseMessage;
  }
}

// decide ganador final
function getWinnerMessage() {
  if (userScore > computerScore) {
    return ' 🏆¡Has ganado la partida!';
  } else if (computerScore > userScore) {
    return '💻 Ha ganado la computadora';
  } else {
    return '🤝 Empate final';
  }
}

//mostrar la sección de resultados
function showResultSection () {
  resultSection.classList.remove ('hidden');
}

// fin del juego
function endGame() {
  resultParagraph.textContent = getWinnerMessage();

  // ocultar jugar y muestra reiniciar
  btnPlay.classList.add('hidden');
  btnRestart.classList.remove('hidden');
}

// mostrar resultados con sección oculta inicio
function playGame() {
  if (rounds === 0) {
    // resultSection.classList.remove ('hidden');
    showResultSection ();
  }

  // comprobar limite y salir con return. Si ya terminó llama a endgame
  if (rounds >= 10) {
    endGame();
    return;
  }

  // obtener jugadas
  const userMove = selectMove.value;
  const computerMove = getComputerMove();

 
  // let message = '';
  // // lógica del juego
  // if (userMove === computerMove) {
  //   message = 'Empate';
  // } else if (rules[userMove] === computerMove) {
  //   message = '¡Has ganado!';
  //   userScore++;
  // } else {
  //   message = '¡Has perdido!';
  //   computerScore++;
  // }

 const message = renderMessage(
  userMove,
  computerMove,
  '¡Has ganado!',
  '¡Has perdido!',
  'Empate'
 );
 
  rounds++;

  renderPlay (userMove, computerMove, message);

  // muestra resultado en texto
  // resultParagraph.textContent = `Jugadora: ${userMove} | Computadora: ${computerMove} → ${message}`;

  renderScores();

  if (rounds === 10) {
    endGame();
  }
}

// reinicio estado
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

// reinicio
function handleClickRestart() {
  resetGame();
}

// conexión botón con función
btnPlay.addEventListener('click', handleClickPlay);
btnRestart.addEventListener('click', handleClickRestart);

/* SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA */
renderScores();
yearElement.textContent = currentYear;
