'use strict'
/*SECCIÓN DE QUERY-SELECTOR*/
const selectMove = document.querySelector ('.js-selectMove');
const btnPlay = document.querySelector ('.js-btnPlay');
const resultParagraph = document.querySelector ('.js-resultParagraph');
const userScoreElement = document.querySelector ('.js-userScore');
const computerScoreElement = document.querySelector ('.js-computerScore');
const roundCounterElement = document.querySelector ('.js-roundCounter');


/*SECCIÓN DE DATOS*/
// Variables globales que almacenan la información principal de la aplicación
// y se usan por todo el fichero.





// SECCIÓN DE FUNCIONES
// Éstas son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.


// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos


/*SECCIÓN DE EVENTOS*/
// Éstos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)
btnPlay.addEventListener ('click', playGame);


// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

console.log('Página y JS cargados!');

