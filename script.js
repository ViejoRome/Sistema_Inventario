const formulario = document.getElementById("formulario-producto");
const nombreProducto = document.getElementById("nombre-producto");
const cantidadProducto = document.getElementById("cantidad-producto");
const listaProductos = document.getElementById("lista-productos");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const fila = document.createElement("tr");
  const celdaNombre = document.createElement("td");
  const celdaCantidad = document.createElement("td");

  celdaNombre.textContent = nombreProducto.value.trim();
  celdaCantidad.textContent = cantidadProducto.value;
  fila.append(celdaNombre, celdaCantidad);
  listaProductos.append(fila);

  formulario.reset();
  nombreProducto.focus();
});
