// Define HTML elements
const board = document.getElementById("game-board");

// Define game variables
let snake = [{ x: 10, y: 10 }];

// Draw game map, snake, food
const draw = () => {
  board.innerHTML = "";
  drawSnake();
};

// Draw snake
const drawSnake = () => {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
};

// Create a snake or food cube/div
const createGameElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

// Set the position of snake or food
const setPosition = (element, position) => {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Testing draw function
draw();