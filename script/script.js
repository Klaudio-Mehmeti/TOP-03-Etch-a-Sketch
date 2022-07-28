

let gridSide = parseInt(prompt("Enter a Grid Size", ""), 10);
const gridSquareQuantity = gridSide * gridSide;
const container = document.querySelector('#grid-container');
container.style.gridTemplateColumns = 'repeat(' + gridSide + ', auto)';



for (i = 0; i < gridSquareQuantity; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background: white;';
    // square.style.width = 600 / gridSide + 'px';
    // square.style.height = 600 / gridSide + 'px';
    // square.style.gridTemplateColumns = 'repeat(' + gridSide + ', auto)';
    // square.style.gridTemplateRows = 'repeat(' + gridSide + ', auto)';
    // square.style.setProperty('grid-template-columns', 'repeat(' + gridSide + ', 1fr)');
    container.appendChild(square);
    newFunction(square);
};




console.log(gridSquareQuantity);




function newFunction(square) {
    square.addEventListener('click', () => {
        square.style.cssText = 'background-color: rgb(50, 50, 50); color:white;';
    });
    square.addEventListener('mouseover', () => {
        square.style.cssText = 'background-color: rgb(50, 50, 50); color:white;';
    });
}
// const btn = document.querySelectorAll('.btn');

// btn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.style.cssText = 'background-color: rgb(50, 50, 50); color:white';
//     });

// });

// const square = document.querySelectorAll('square');
// square.forEach(btn => {
//     square.addEventListener('click', () => {
//         square.style.cssText = 'background-color: rgb(50, 50, 50); color:white;';
//     });



