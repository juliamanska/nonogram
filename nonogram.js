const tableBody = document.querySelector("tbody");
const checkButton = document.getElementById("check-btn");
const result = document.querySelector(".result");
const displayTime = document.querySelector(".timer");
const winMessage = "You win!";
const notWinMessage = "Keep trying!";
let firstClick = false;
let minutes = 0;
let seconds = 0;
let interval;

const numbersInRows = [
  "2",
  "4",
  "3 2",
  "6",
  "7",
  "2 3",
  "1 4",
  "7",
  "1 1",
  "1 1",
];
const winCells = [
  18, 26, 27, 28, 29, 35, 36, 38, 44, 45, 48, 53, 54, 55, 57, 58, 510, 62, 63,
  64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78, 710, 81, 82, 84, 85,
  86, 87, 92, 93, 94, 95, 103,
];

for (let r = 1; r <= 10; r++) {
  const row = document.createElement("tr");
  if (r === 5) {
    row.classList.add("fifth-row");
  }

  for (let c = 1; c <= 11; c++) {
    const cell = document.createElement("td");
    const cellId = `${c - 1}${r}`;

    cell.id = cellId;
    if (c === 1) {
      cell.classList.add("numbers");
      cell.textContent = numbersInRows[r - 1];
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

const handleClick = (e) => {
  if (!firstClick) {
    firstClick = true;
    interval = setInterval(setTime, 1000);
  }

  if (e.button === 0) {
    if (e.target.style.backgroundColor === "black") {
      e.target.style.backgroundColor = "#fce9ec";
    } else if (e.target.innerHTML === "X") {
      e.target.innerHTML = "";
      e.target.style.backgroundColor = "black";
    } else {
      e.target.style.backgroundColor = "black";
    }
  }
};

const handleRightClick = (e) => {
  e.preventDefault();
  if (!firstClick) {
    firstClick = true;
    interval = setInterval(setTime, 1000);
  }
  if (e.target.innerHTML === "X") {
    e.target.innerHTML = "";
  } else {
    e.target.style.backgroundColor = "#fce9ec";
    e.target.innerHTML = "X";
  }
};

cellsToColor.forEach((cell) => {
  cell.addEventListener("click", handleClick);
  cell.addEventListener("contextmenu", handleRightClick);
});

const areOnlyWinCellsColored = () => {
  const coloredWinCells = winCells.filter((cellId) => {
    const winCell = document.getElementById(cellId.toString());
    return winCell && winCell.style.backgroundColor === "black";
  });

  if (coloredWinCells.length !== winCells.length) {
    return false;
  }

  const allColoredCells = document.querySelectorAll(
    '.cell[style*="background-color: black"]'
  );
  if (allColoredCells.length > winCells.length) {
    return false;
  }

  return true;
};

checkButton.addEventListener("click", () => {
  if (areOnlyWinCellsColored()) {
    result.innerHTML = winMessage;
    clearInterval(interval);
    cellsToColor.forEach((cell) => {
      cell.removeEventListener("click", handleClick);
      cell.removeEventListener("contextmenu", handleRightClick);
    });
  } else {
    result.innerHTML = notWinMessage;
  }
});

const setTime = () => {
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  seconds += 1;
  displayTime.innerHTML = `${formattedMinutes}.${formattedSeconds}`;
};
