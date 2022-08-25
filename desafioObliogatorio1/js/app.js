/*
>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu
proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
- Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un
simulador personalizado?
- Armar la estructura HTML del proyecto.
- Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
- Utilizar funciones para realizar esas operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que
incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal
del simulador
>>Ejemplo:
Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.
*/
let carrito = 0;

function Totalcarrito() {
  alert(`El total de su carrito es ${carrito}`);
}






alert("Bienvenido a LionComputer Su tienda de informática");


let opcion = Number(
  prompt(
    "Que producto desea adquirir (0 para terminar la carga): \n 1 - Intel Core i3 = $25000 \n 2 - Intel Core i5 = $37000 \n 3 - Intel Core i7 = $62000"
  )
);

switch (opcion) {
  case 1:
    carrito = carrito + 25000;
    alert("Producto Agregado");
    break;
  case 2:
    carrito = carrito + 37000;
    alert("Producto Agregado");
    break;
  case 3:
    carrito = carrito + 62000;
    alert("Producto Agregado");
    break;

  default:
    alert("Gracias por su visita");
    break;
}

console.log(carrito);

Totalcarrito();
