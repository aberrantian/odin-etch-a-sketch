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
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)})`;
            });
        
            row.appendChild(square);
        };
    };
};

generateGrid();

const resolutionButton = document.querySelector('.set-resolution');
resolutionButton.addEventListener('click', setResolution);

let userInput = 0;

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