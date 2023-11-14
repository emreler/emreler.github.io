import { colors } from "./colors.js";

const leftColumn = document.querySelector(".left-column");
const rightColumn = document.querySelector(".right-column");
const changeColorsButton = document.querySelector(".change-colors-button");

const getRandomIndexExcluding = (length, exclude) => {
  const randomIndex = Math.floor(Math.random() * (length - 1));

  return randomIndex < exclude ? randomIndex : randomIndex + 1;
};

let currentColorIndex = -1;

const applyColors = (index) => {
  const { leftColumnBackground, rightColumnBackground, leftColumnForeground } =
    colors[index];

  leftColumn.style.backgroundColor = leftColumnBackground;
  rightColumn.style.backgroundColor = rightColumnBackground;
  leftColumn.style.color = leftColumnForeground;
  changeColorsButton.style.color = leftColumnForeground;
};

const changeColor = () => {
  currentColorIndex = getRandomIndexExcluding(colors.length, currentColorIndex);
  applyColors(currentColorIndex);
};

changeColorsButton.addEventListener("click", changeColor);

changeColor();
