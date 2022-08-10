




const container = document.querySelector('#grid-container');
const bwBtn = document.querySelector('.color-mode');
const colorBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');
const gridNr = document.querySelector('.grid-number');
const pencilMode = document.querySelector('.pencil-mode');

// const btn = document.querySelector('.btn');

// function btnActive() {
//     btn.style.backgroundColor = "rgb(50, 50, 50)";
//     btn.style.color = "white";
// };

gridNr.addEventListener('click', changeGrid);

let colorTrigger = false;
container.addEventListener('mousedown', () => colorTrigger = true);
container.addEventListener('mouseup', () => colorTrigger = false);



// ------ DEFAULT GRID FUNCTION-----//

function sketchPad(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.style.gridTemplateColumns = 'repeat(' + gridSize + ', auto)';
        pixel.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background: white;';
        container.appendChild(pixel);
        // bwMode(pixel);
        // colorMode(pixel);
        // eraser(pixel);
        // pencil(pixel);
    };
};

sketchPad(20);


// ------ GRID SIZE BY USER-FUNCTION-----//

function changeGrid() {
    let gridNum = Number(prompt(' Enter the desired number of GRID!'));
    while (gridNum > 100 || gridNum == '') {
        gridNum = Number(prompt('must input a number less than 100'))

    } if (gridNum <= 100) {
        clearGrid();
        sketchPad(gridNum);
    }
};


function clearGrid() {
    container.innerHTML = '';
};



// ------ BLACK & WHITE FUNCTION-----//

// function bwMode(pixel) {
//     bwBtn.addEventListener('click', function () {
//         pixel.addEventListener('mouseover', () => {
//             pixel.style.backgroundColor = "rgb(50, 50, 50)"
//         });
//     });
// };


bwBtn.addEventListener('click', blackColor);

function blackColor() {
    const allCells = document.querySelectorAll('.pixel');
    for (let grid of allCells) {
        grid.addEventListener('mousemove', function () {
            if (colorTrigger)
                grid.style.backgroundColor = 'rgb(50, 50, 50)';
        })
    }
};



// ------ RANDOM COLOR -FUNCTION-----//

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
};

// ------ RAINBOW MODE FUNCTION-----//

// function colorMode(pixel) {
//     colorBtn.addEventListener('click', function () {
//         pixel.addEventListener('mouseover', () => {
//             pixel.style.backgroundColor = randomColor();
//         });
//     });
// };

colorBtn.addEventListener('click', rainbowMode);
function rainbowMode() {
    const allCells = document.querySelectorAll('.pixel');
    for (let grid of allCells) {
        grid.addEventListener('mousemove', function () {
            if (colorTrigger)
                grid.style.backgroundColor = randomColor();
        })
    }
};


// ------ PENCIL MODE FUNCTION-----//

// function pencil(pixel) {
//     pencilMode.addEventListener('click', function () {
//         pixel.addEventListener('mouseover', () => {
//             pixel.style.backgroundColor = randomColor();
//         });
//     });
// };

// ------ ERASER -FUNCTION-----//

// function eraser(pixel) {
//     eraserBtn.addEventListener('click', function () {
//         pixel.addEventListener('mouseover', () => {
//             pixel.style.backgroundColor = "white"
//         });
//     });
// };


eraserBtn.addEventListener('click', eraserMode);
function eraserMode() {
    const allCells = document.querySelectorAll('.pixel');
    for (let grid of allCells) {
        grid.addEventListener('mousemove', function () {
            if (colorTrigger)
                grid.style.backgroundColor = "white";
        })
    }
};


