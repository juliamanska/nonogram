const tableBody = document.querySelector("tbody");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= 11; j++) {
    const cell = document.createElement("td");

    if (j <= 11 && j > 1) {
      cell.classList.add("cell");
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
