'use strict'

/*EJERCICIO 03*/

/*Hacer un programa que muestre  todos los número que hay entre dos
números introducidos por el usuario
Entonces el programa nos pedirá un número y después otro número y
nos mostrará todos los número que hay dentro de eses números; ejemplo:
Primer número 7, segundo número 10
Los número entre esos números serían 8 y 9*/

var number1 = parseInt(prompt('Introduce el primer número', 0));
var number2 = parseInt(prompt('Introduce el segundo número', 0));

document.write("<h1>Del número " + number1 + " al número " + number2 + " hay los siguientes números</h1>");
for(var i=number1; i<=number2; i++){
    document.write(i + "<br>");
}