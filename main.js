function generateGrid(gridSize = 16) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.querySelector('body').appendChild(container);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        container.appendChild(row);
        
        for (let n = 0; n < gridSize; n++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', () => {
                column.classList.toggle('hover');
            });
        
            row.appendChild(column);
        };
    };
};

generateGrid();

const resolutionButton = document.querySelector('.set-resolution');
resolutionButton.addEventListener('click', setResolution);

function setResolution(size = 16) {
    let userInput = prompt('Enter desired resolution <=100');
    if (userInput > 100) {
        userInput = 100;
    } else if (userInput < 2) {
        userInput = 2;
    };

    const container = document.querySelector('.container');
    container.remove();
    generateGrid(userInput);
}
