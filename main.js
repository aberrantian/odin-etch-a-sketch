function generateGrid(gridSize = 16) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.querySelector('body').appendChild(container);

    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        grid.appendChild(row);
        
        for (let n = 0; n < gridSize; n++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('data-passCount', 0);
            square.addEventListener('mouseover', function () {
                let passCount = Number(this.getAttribute('data-passCount'));
                if (passCount < 10) {
                    this.setAttribute('data-passCount', (passCount + 1));
                };
                draw(this);
            });
        
            row.appendChild(square);
        };
    };
};

function draw(currentSquare) {
    let passCount = Number(currentSquare.getAttribute('data-passCount'));
    let max = 255 - (255 * (0.1 * passCount));

    currentSquare.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * max)},
        ${Math.floor(Math.random() * max)},
        ${Math.floor(Math.random() * max)}
    )`;
    console.log(passCount);
};

const resolutionButton = document.querySelector('.set-resolution');
resolutionButton.addEventListener('click', setResolution);

function setResolution(size = 16) {
    userInput = prompt('Enter desired resolution');
    if (userInput > 100) {
        userInput = 100;
    } else if (userInput < 2) {
        userInput = 2;
    };

    const container = document.querySelector('.container');
    container.remove();
    generateGrid(userInput);
};

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    const length = document.querySelectorAll('.row').length;
    const container = document.querySelector('.container');
    container.remove();
    generateGrid(length);
});

generateGrid();