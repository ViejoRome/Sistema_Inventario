<<<<<<< HEAD
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
=======
const form = document.getElementById("customer-form");
const customerList = document.getElementById("customer-list");
const emptyMessage = document.getElementById("empty-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const customer = {
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    phone: formData.get("phone").trim()
  };

  emptyMessage.remove();

  const row = document.createElement("tr");
  for (const value of Object.values(customer)) {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  }
  customerList.appendChild(row);
  form.reset();
  document.getElementById("customer-name").focus();
>>>>>>> origin/rome
});
