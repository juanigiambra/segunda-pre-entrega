//salida de datos console.log(); el arma secreta del programador
console.log("Inicio");
console.log(compraDeEquipos());

while (opcion != 0) {
  opcion = equipo(prompt("Ingrese Producto " + "Equipos"));

  switch (opcion) {
    case "Equipos Reno":
      cantidad = parseInt(prompt("Cuantos Equipos Reno desea Comprar?"));
      if (resultado <= cantidad) {
        total += cantidad = EquiposReno.precio;
        alert("El valor de su equipo es de $" + total);
      }
      break;

    case "Equipos Indeme":
      cantidad = parseInt(prompt("Cuantos Equipos Indeme desea Comprar?"));
      if (resultado <= cantidad) {
        total += cantidad = EquiposIndeme.precio;
        alert("El valor de su implante es de $" + total);
      }
      break;

    case "Equipos Mac":
      cantidad = parseInt(prompt("Cuantos Equipos Mac desea Comprar?"));
      if (resultado <= cantidad) {
        total += cantidad = EquiposMac.precio;
        alert("El valor de su equipo es de $" + total);
      }
      break;

    default:
      prompt("Opcion no Valida presione boton Salir");
      break;
  }

  console.log("Gracias Por Su Visita");
}

//array
function compraDeEquipos(array, opcion) {
  array.push(opcion);
}

//array suma
function sumar() {
  let Totalcompra = total;
  alert("Total de la Compra es de: $" + Totalcompra);
}
//objetos

function Producto(nombre, conexion, precio, stock) {
  this.nombre = nombre;
  this.conexion = conexion;
  this.precio = parseFloat(precio);
  this.stock = parseInt(stock);
}

const EquiposReno = new Producto("Equipos Reno", "Conexion", 8000, 30);
const EquiposIndeme = new Producto("Equipos Indeme", "Conexion", 7000, 50);
const EquiposMac = new Producto("Equipos Mac", "Conexion", 4500, 40);

console.log("Gracias Por Su Visita");
