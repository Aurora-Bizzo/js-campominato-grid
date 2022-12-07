function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value);
    
    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
    }

    generateGameGrid(cellsNumber, cellsPerRow);

}


function generateGameGrid(cellsNumber, cellsPerRow)
{
    document.querySelector('.container').innerHTML = '';

    const grid = document.createElement('div');

    grid.classList.add('grid');

    const grid_side = cellsPerRow * 100;

    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;

    for(let i = 0; i < cellsNumber; i++){
        const cell = createSingleCell(i+1, cellsPerRow);
        cell.addEventListener ('click', function(){
            this.classList.toggle('clicked');
        })

        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid);
    
}


    document.getElementById('play-game').addEventListener('click', function(){
    createNewGame();
})


function createSingleCell(num, cells_per_row)
{
    const cell = document.createElement('div');

    cell.classList.add('square');

    let sideLenght = '100px';

    cell.style.width = sideLenght;
    cell.style.height = sideLenght;

    cell.innerText = num;

    return cell;
}





