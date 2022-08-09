




const container = document.querySelector('#grid-container');
const bwBtn = document.querySelector('.color-mode');
const colorBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');
const gridNr = document.querySelector('.grid-number');
const pencilMode = document.querySelector('.pencil-mode');


gridNr.addEventListener('click', changeGrid);


// ------ DEFAULT GRID FUNCTION-----//

function sketchPad(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.style.gridTemplateColumns = 'repeat(' + gridSize + ', auto)';
        pixel.style.cssText = 'border-top: 1px solid rgb(160, 160, 160); border-left: 1px solid rgb(160, 160, 160);background: white;';
        container.appendChild(pixel);
        bwMode(pixel);
        colorMode(pixel);
        eraser(pixel);
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

// ------ RANDOM COLOR -FUNCTION-----//

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
};

// ------ BLACK & WHITE FUNCTION-----//

function bwMode(pixel) {
    bwBtn.addEventListener('click', function () {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "rgb(50, 50, 50)"
        });
    });
};



// ------ RAINBOW MODE FUNCTION-----//

function colorMode(pixel) {
    colorBtn.addEventListener('click', function () {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = randomColor();
        });
    });
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

function eraser(pixel) {
    eraserBtn.addEventListener('click', function () {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "white"
        });
    });
};


