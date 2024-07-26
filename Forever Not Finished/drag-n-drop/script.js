const container = document.querySelector('.game-field')
let jewels = []

const game = {
    rows: 5,
    cols: 5,
    size: 50, 
    gap: 10
}

const colors = [
    0, 66, 122, 200, 300
]


function adjustField() {
    // caculate size
    let field = {
        x: game.rows * game.size,
        y: game.cols * game.size
    }
    // set size
    // container.style.width = field.x + 'px'
    // container.style.height = field.y + 'px'
    container.style.gridTemplateColumns = `repeat(${game.cols}, 1fr)`
    container.style.gap = game.gap + 'px'

}

function spawnJewels() {

    let jewelsAmount = game.rows * game.cols

    let currentCol = 0
    let currentRow = 0

    for (let i = 0; i < jewelsAmount; i++) {

        let newJewel = document.createElement('span')
        newJewel.classList.add('jewel')
        newJewel.setAttribute('data-col', currentCol)
        newJewel.setAttribute('data-row', currentRow)
        newJewel.style.width = game.size + 'px'
        newJewel.style.height = game.size + 'px'
        newJewel.setAttribute('draggable', 'true')

        colorIndex = Math.round(Math.random() * 4)
        console.log(colorIndex)
        newJewel.style.backgroundColor = `hsla(${colors[colorIndex]}, 100%, 50%, 1)`

        currentCol++
        if(currentCol > game.cols) {
            currentCol = 0
            currentRow++
        }

        container.appendChild(newJewel)
        
    }

    jewels = document.querySelectorAll('.jewel')
    addDragFunc()
}

// swap around


function addDragFunc() {
    jewels.forEach((jewel, index) => {
        jewel.addEventListener('mousedown', ()=>{
            jewel.style.opacity = '0.25'
        })  

    });
}



adjustField()
spawnJewels()