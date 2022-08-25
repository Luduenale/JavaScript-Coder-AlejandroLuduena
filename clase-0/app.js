//Aqui voy a mencionar las variables
/*
let nombreAlumno = 'Juan Pablo' // string
console.log(nombreAlumno)
let edad  = 32  // number
console.log(edad)
let estudiante = true //boolean
console.log(estudiante)

const apellido = 'Rodriguez'
console.log(apellido)
*/

//Diferencias entre LET y CONST

//Pueden incializarse vacias
//Pueden ser Redeclaradas
/*
let nombre
nombre = 'Coder' 
nombre = 'House'
nombre = 37
console.log(nombre)


// deben ser declaradas con valor
// no pueden ser re-declaradas
const NOMBRE = 'Coder'


console.log(NOMBRE)

let nombre = 'Juan Pablo'
let apellido = 'Rodriguez'

let nombreCompleto = nombre + ' ' + apellido

console.log(nombre + ' ' + apellido)
console.log(nombreCompleto)

// -
let numero1 = 25
let numero2 = 35

let resultado = numero1 - numero2

console.log(resultado)
// +
let numero1 = 25
let numero2 = 35

let resultado = numero1 + numero2

console.log(resultado)
// *

let numero1 = 25
let numero2 = 35

let resultado = numero1 * numero2

console.log(resultado)

// /

let numero1 = 25
let numero2 = 35

let resultado = numero1 / numero2

console.log(resultado)

//PROMPT
let nombre = prompt('Ingrese su nombre')

alert('Hola' + ' ' + nombre)

let numero1 = prompt('Ingresa el primer numero')
let numero2 = prompt('Ingresa el segundo numero')

let resultado = Number(numero1)  + parseInt(numero2)

alert(resultado)
*/


//Ejercicio en clase

let num1 = prompt('Ingrese primer numero')
let num2 = prompt('Ingrese segundo numero')

let resultadoSuma = Number(num1) + Number(num2)
let resultadoResta = Number(num1) - Number(num2)
let resultadoProducto = Number(num1) * Number(num2)
let resultadoDivision = Number(num1) / Number(num2)



alert('La suma de los numeros es:  ' + resultadoSuma + '\n' + 'La resta de los numeros es:  ' + resultadoResta + '\n' + 'La multiplicacion de los numeros es:  ' + resultadoProducto + '\n' + 'La division de los numeros es:  ' + resultadoDivision)

