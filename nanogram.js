const tableBody = document.querySelector("tbody");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= 11; j++) {
    const cell = document.createElement("td");
    row.appendChild(cell);
  }
  tableBody.appendChild(row);
}
