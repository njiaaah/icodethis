
let gLength
let gWidth
let gSize
let isGameOver = false
let snakeCells = []
let snakeDirection = 'right'
let currentHeadPos
let cells

let directionIndicator = document.querySelector('#direction')

const gField = document.getElementById('game-field')


function fillboard(width, legth) {
    gWidth = width
    gLength = legth
    gSize = width * legth
    for (let i = 0; i < gSize; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add('empty')
    gField.appendChild(cell)
    cells = document.querySelectorAll('.cell')
    }
}

function spawnSnake(x) {
    let snakeSpawnPos = gLength / 2 * gWidth + x
    currentHeadPos = snakeSpawnPos
    snakeCells.push(snakeSpawnPos)
    cells[snakeSpawnPos].classList.add('snake')
    cells[snakeSpawnPos].classList.add('head')
    cells[snakeSpawnPos].classList.remove('empty')
}

function spawnFood() {
    let emptyCells = document.querySelectorAll('.empty')
    let randomCell = Math.floor(Math.random() * emptyCells.length) 
    emptyCells[randomCell].classList.add('food')
    emptyCells[randomCell].classList.remove('empty')
}

function gameLoop() {
    setInterval(()=>{
        if (snakeDirection === 'right')  {
            currentHeadPos++
        } else if (snakeDirection === 'up') {
            currentHeadPos -= gWidth
        } else if (snakeDirection === 'down') {
            currentHeadPos += gWidth
        } else if (snakeDirection === 'left') {
            currentHeadPos--
        }
        snakeMove(currentHeadPos)
    },1000)
}

function snakeMove(currentHeadPos) {
    cells[snakeCells[snakeCells.length - 1]].classList.remove('snake')
    cells[snakeCells[snakeCells.length - 1]].classList.remove('head')
    snakeCells.pop(snakeCells.length - 1)
    snakeCells.push(currentHeadPos)
    cells[snakeCells[snakeCells.length - 1]].classList.add('snake')
    cells[snakeCells[snakeCells.length - 1]].classList.add('head')
    
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            snakeDirection = 'up';
            directionIndicator.innerText = snakeDirection
            break;
        case 'ArrowDown': 
            snakeDirection = 'down';
            directionIndicator.innerHTML = snakeDirection
            break;
        case 'ArrowLeft':
            snakeDirection = 'left';
            directionIndicator.innerHTML = snakeDirection
            break;
        case 'ArrowRight': 
            snakeDirection = 'right';
            directionIndicator.innerHTML = snakeDirection
            break;
            
    }
})

fillboard(20,20)
spawnFood()
spawnSnake(3)
gameLoop()