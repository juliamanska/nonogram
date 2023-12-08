const tableBody = document.querySelector("tbody");

for (let r = 1; r <= 10; r++) {
  const row = document.createElement("tr");
  if (r === 5) {
    row.classList.add("fifth-row");
  }

  for (let c = 1; c <= 11; c++) {
    const cell = document.createElement("td");
    if (c === 1) {
      cell.classList.add("numbers");
    }
    if (c <= 11 && c > 1) {
      cell.classList.add("cell");
    }
    if (c === 6) {
      cell.classList.add("fifth-column");
    }
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
}

const cellsToColor = document.querySelectorAll(".cell");

cellsToColor.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (e.target.style.backgroundColor === "black") {
      e.target.style.backgroundColor = "#fce9ec";
    } else if (e.target.innerHTML === "X") {
      e.target.innerHTML = "";
      e.target.style.backgroundColor = "black";
    } else {
      e.target.style.backgroundColor = "black";
    }
  });
});

cellsToColor.forEach((cell) => {
  cell.addEventListener("contextmenu", (e) => {
    if (e.target.innerHTML === "X") {
      e.preventDefault();
      e.target.innerHTML = "";
    } else {
      e.target.style.backgroundColor = "#fce9ec";
      e.target.innerHTML = "X";
    }
  });
});
