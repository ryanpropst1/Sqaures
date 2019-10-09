// const button = document.getElementById("btn1");
let numberOfSquares = 0;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    numberOfSquares++;
    const square = document.createElement("div");
    square.className = "box";
    square.id = numberOfSquares;
    console.log(square);

    const squareNumber = document.createElement("p");
    squareNumber.className = "square-number";
    squareNumber.innerText = numberOfSquares;
    square.appendChild(squareNumber);
    squareNumber.style.display = "none";

    square.addEventListener("mouseover", () => {
      squareNumber.style.display = "initial";
    });

    square.addEventListener("mouseout", () => {
      squareNumber.style.display = "none";
    });

    square.addEventListener("click", e => {
      const currentBgColor = e.target.style.backgroundColor;
      let currentRgb = currentBgColor.replace(/[^\d,]/g, "").split(",");
      // console.log(currentRgb);
      square.style.backgroundColor = getNextColor(currentRgb);

      // console.log(currentBgColor);
    });
    //
    square.addEventListener("dblclick", e => {
      const currentSquare = square.id;
      if (currentSquare % 2 === 0 && square.nextElementSibling === null) {
        alert(
          `I'm sorry, but there isn't a square after square #${currentSquare} to remove. Try again?`
        );
        // If currentSquare is EVEN and there IS a currentSquare AFTER it, remove()
      } else if (
        currentSquare % 2 === 0 &&
        square.nextElementSibling !== null
      ) {
        const nextSquare = square.nextElementSibling;
        container.removeChild(nextSquare);
      }
    });

    square.addEventListener("dblclick", e => {
      const currentSquare = square.id;
      if (currentSquare % 2 !== 0 && square.previousElementSibling === null) {
        alert(
          `I'm sorry, but there isn't a square before square #${currentSquare} to remove. Try again?`
        );
        // If currentSquare is Odd and there IS a currentSquare AFTER it, remove()
      } else if (
        currentSquare % 2 !== 0 &&
        square.previousElementSibling !== null
      ) {
        const previousSquare = square.previousElementSibling;
        container.removeChild(previousSquare);
      }
    });
    container.appendChild(square);
    square.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getNextColor(currentRgb) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  // console.log(`rgb(${red}, ${green}, ${blue})`);
  const nextColor = `rgb(${red}, ${green}, ${blue})`;
  const nextCompare = `rgb(${red}, ${green}, ${blue})`
    .replace(/[^\d,]/g, "")
    .split(",");
  // console.log(nextColor);
  if ((currentRgb != nextCompare) | [255, 255, 255]) {
    return nextColor;
  } else {
    getNextColor(currentRgb);
  }
}

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }
// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// square.addEventListener("dblclick", e => {
// console.log(
//   e.target.getElementsByClassName("square-number")[0].innerHTML
// );
