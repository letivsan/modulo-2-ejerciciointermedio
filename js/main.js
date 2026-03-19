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
// variables que cambian durante ejecución del juego
let userScore = 0;
let computerScore = 0;
let rounds = 0;

// reglas del juego en objetos 
const rules = {
  piedra: 'tijera',
  papel: 'piedra',
  tijera: 'papel'
};

// año automático
const currentYear = new Date().getFullYear();

/* SECCIÓN DE FUNCIONES */
// número aleatorio entre 1 y max
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// decide la jugada del ordenador
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

// lógica del resultado de cada ronda
function renderMessage (userMove, computerMove, winMessage, loseMessage, drawMessage) {
  if (userMove === computerMove) {
    return drawMessage; //empate
  } else if (rules [userMove] === computerMove) {
    userScore++; //punto para la jugadora
    return winMessage;
  } else {
    computerScore++; //punto para el ordenador
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

// funciones de render
// pintar las puntuaciones y ronda
function renderScores() {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  roundCounterElement.textContent = rounds;
}

//pintar el resultado de una jugada
function renderPlay (userMove, computerMove, message) {
  resultParagraph.textContent = `Jugadora: ${userMove} | Computadora: ${computerMove} → ${message}`;
}

// pintar mensajes simples (el inicio, final)
function renderResultMessage (message) {
  resultParagraph.textContent = message;
}

// mostrar u ocultar la sección de resultados
function renderResultSection (isVisible) {
  if (isVisible) {
    resultSection.classList.remove ('hidden');
  } else {
    resultSection.classList.add ('hidden');
  }
}

// control de los botones
function renderButtons (isPlaying) {
  if (isPlaying) {
    btnPlay.classList.remove ('hidden');
    btnRestart.classList.add ('hidden');
  } else {
    btnPlay.classList.add ('hidden');
    btnRestart.classList.remove ('hidden');
  }
}

// fin del juego
function endGame() {
  const finalMessage = getWinnerMessage(); //obtenemos el mensaje final
  renderResultMessage(finalMessage); //lo pinta
  renderButtons(false); // aparece el botón de reiniciar
}

// Ejecuta la ronda
function playGame() {
  // en la primera ronda muestra la sección
  if (rounds === 0) {
    renderResultSection(true);
  }

// comprobar limite de 10 y salir con return. Si ya terminó llama a endgame
  if (rounds >= 10) {
    endGame();
    return;
  }

// obtener jugadas
  const userMove = selectMove.value;
  const computerMove = getComputerMove();

// obtener el resultado
 const message = renderMessage(
  userMove,
  computerMove,
  '¡Has ganado!',
  '¡Has perdido!',
  'Empate'
 );
 
  rounds++; //aumenta la ronda

  renderPlay (userMove, computerMove, message); //pintamos la jugada
  renderScores(); //ACTUALIZAMOS el marcador

  // si llegamos a la ronda 10, se termina
  if (rounds === 10) {
    endGame();
  }
}

// reinicio estado de la partida
function resetGame() {
  userScore = 0;
  computerScore = 0;
  rounds = 0;

  renderResultMessage ('¡Nueva partida!');
  renderButtons(true);
  renderResultSection(false);
  renderScores();
}

/* SECCIÓN DE FUNCIONES DE EVENTOS */
function handleClickPlay(ev) {
  ev.preventDefault(); //evita la recarga
  playGame();
}

// reinicio con click
function handleClickRestart() {
  resetGame();
}

// escuchadores de eventos
btnPlay.addEventListener('click', handleClickPlay);
btnRestart.addEventListener('click', handleClickRestart);

/* SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA */
renderScores();
yearElement.textContent = currentYear;
