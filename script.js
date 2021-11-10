function newGrid(num, pixels) {
  const grid = document.getElementById("grid");

  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }

  let dimension = num * pixels;

  grid.style.width = `${dimension}px`;
  grid.style.height = `${dimension}px`;

  console.log(`number: ${num}`);
  console.log(`pixels: ${pixels}`);
  console.log(`dimension: ${dimension}`);

  for (let i = 0; i < num * num; i++) {
    const gridElement = document.createElement("div");
    gridElement.id = "div" + i;
    gridElement.className = "cell";
    gridElement.style.backgroundColor = "white";
    gridElement.style.width = `${pixels}px`;
    gridElement.style.height = `${pixels}px`;
    grid.appendChild(gridElement);
  }

  //Event listeners
  const cells = document.querySelectorAll(".cell");
  const clearButton = document.querySelector("#clear");

  cells.forEach((cell) => cell.addEventListener("mouseenter", changeColour));
  clearButton.addEventListener("click", clearGrid);
}

// Function for changing cell colours. Used by eventListener
function changeColour() {
  this.style.background = "black";
}

//Function for removing current grid and creating a new white grid.
function clearGrid() {
  let size = prompt("Please select the size of the grid (min 8, max 100", "16");
  if (size > 100) {
    size = 100;
  } else if (size < 8) {
    size = 8;
  }
  //Determine cell size
  let cellSize = Math.floor(480 / size);
  if (cellSize > 30) {
    cellSize = 30;
  }
  newGrid(size, cellSize);
}

//Create grid on page load
newGrid(16, 30);
