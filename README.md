**Módulo 2: Ejercicio de repaso**

El ejercicio consiste en desarrollar el juego _"Piedra, Papel y Tijera"_.
En el juego ambas jugadoras tienen que hacer una piedra, papel o tijeras. Solo tiene dos resultados posibles: un empate o una victoria para una jugadora y una derrota para la otra jugadora. Diseñaremos el juego usando JavaScript donde una jugadora jugará contra la computadora.

_Descripción_
El programa genera un movimiento al azar entre papel, piedra y tijera (las indicaciones para generar el movimiento al azar están más adelante). Posteriormente la usuaria juega, el programa compara los movimientos y decide si la usuaria ha ganado, perdido o empatado contra el ordenador. También a su vez el programa va contabilizando el número de puntos del jugador y del ordenador. El juego se acaba cuando se realicen 10 movimientos.

_Indicaciones_
En la parte superior, la jugadora selecciona la jugada del desplegable. Las opciones son Piedra, Papel y Tijera y le da clic en el botón _Jugar_.
Debajo, en el próximo apartado aparecen los siguientes textos: - Al arrancar la página: ¡Vamos a Jugar!. - Cuando la jugadora introduzca un movimiento que coincida con al movimiento aleatorio se muestra el mensaje: **Empate**. - Cuando la jugadora introduzca un movimiento que gane al movimiento aleatorio se muestra el mensaje: ¡Has Ganado!. - Cuando la jugadora introduzca un movimiento que falle al movimiento aleatorio se muestra el mensaje: ¡Has perdido!.

_Pasos para realizar el juego_
Para realizar el juego tenemos que realizar las siguientes funcionalidades desde JavaScript:

1. Crear una maquetación mínima con el select, el botón y el espacio para el resultado.
2. Generar un número aleatorio entre 1 y 9 con la ayuda de Math.random y Math.ceil.
3. Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
   - si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es piedra
   - si el número aleatorio generado es mayor o igual que 7 el movimiento es papel y sino, el movimiento generado es tijera
4. Comparar el movimiento que la jugadora ha seleccionado con el movimiento que ha generado la
   computadora y pintar las pistas correspondientes en la pantalla.
   Según vayas trabajando en el ejercicio, haz nuevas versiones del mismo y sube los cambios a GitHub. De esta
   forma podremos ver cómo vas avanzando. También publica el resultado usando GitHub Pages (recuerda
   congurarlo en las preferencias del proyecto) y pon el enlace a GitHub Pages en la descripción del
   repositorio.

**_Bonus_**
Si te queda tiempo y quieres completar las funcionalidades del juego, puedes hacer lo siguiente: 1. Saca tu lado creativo y maqueta y decora tu página con estilo. 2. En la parte inferior debe aparecer los puntos de cada jugadora. Agrega el código necesario para contar los puntos del jugador y del ordenador. 3. El juego naliza cuando llega a 10 movimientos, agrega el código necesario para que se muestre un botón Reiniciar Juego que vuelva a iniciar el juego cuando se cumpla esta condición y desaparezca el botón de Jugar. 4. Cuando le demos click a al botón Reiniciar Juego desaparece este botón, poner todos los contadores a cero y vuelve a aparecer el botón Jugar. 5. Cuando nalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria. 6. Recuerda esto es un bonus, no pasa nada si no lo haces!

_Entrega_
No es una evaluación, es un ejercicio de auto-conocimiento y para que practiquéis la resolución de problemas en una aplicación web completa. Por tanto, no hay que entregar nada (pero es buena idea tenerlo en un repo independiente, hacer commits y push para no perder nuestro trabajo).
