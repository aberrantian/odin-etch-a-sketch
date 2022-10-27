const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    
    container.appendChild(row);
    
    for (let n = 0; n < gridSize; n++) {
        const column = document.createElement('div');
        column.classList.add('column');
    
        row.appendChild(column);
    };
};
