let carrito = 0;
let validacion = 0;

function cargaCarrito() {
  do {
    let opcion = Number(
      prompt(
        "Que producto desea adquirir (0 para terminar la carga): \n 1 - Intel Core i3 = $25000 \n 2 - Intel Core i5 = $37000 \n 3 - Intel Core i7 = $62000"
      )
    );

    validacion = opcion;

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
  } while (validacion != 0);
}

function Totalcarrito() {
  alert(`El total de su carrito es $${carrito}`);
}

alert("Bienvenido a LionComputer Su tienda de informática");

cargaCarrito();

Totalcarrito();
