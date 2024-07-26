const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    render()
})

const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('mousemove', (event) =>{
    mouse.x = event.x
    mouse.y = event.y
    render()
})

function render() {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 15
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI* 2)
    ctx.fill();
    ctx.stroke();
}

render()
