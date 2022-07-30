

let gridSide = parseInt(prompt("Enter a Grid Size", ""), 10);
// gridSide = 20;
const gridSquareQuantity = gridSide * gridSide;
const container = document.querySelector('#grid-container');
container.style.gridTemplateColumns = 'repeat(' + gridSide + ', auto)';
const bwBtn = document.querySelector('.color-mode');
const colorBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');


for (i = 0; i < gridSquareQuantity; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background: white;';
    container.appendChild(square);

    bwMode(square);
    colorMode(square);
    eraser(square);

};


function eraser(square) {
    eraserBtn.addEventListener('click', function () {
        square.addEventListener('mouseover', () => {
            square.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background: white;';
        });
    });
}

function colorMode(square) {
    colorBtn.addEventListener('click', function () {
        square.addEventListener('mouseover', () => {
            square.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background-color: red;';
        });
    });
}

function bwMode(square) {
    bwBtn.addEventListener('click', function () {
        square.addEventListener('mouseover', () => {
            square.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background-color: rgb(50, 50, 50);';
        });
    });
}


