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
});
