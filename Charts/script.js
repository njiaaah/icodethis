// dropdown

const dropDownChb = document.querySelector('.goals__dropdawn__list-wrapper input[type="checkbox"]')
const dropDownChbLabel = document.querySelector('.goals__dropdawn__list__label')

dropDownChbLabel.addEventListener('click', ()=>{
    let value = dropDownChb.checked
    dropDownChb.checked = !value
    console.log('cock')
})

const ddItems = document.querySelectorAll('.goals__dropdawn__list li') 

ddItems.forEach(item => {
    item.addEventListener('click',()=>{
        dropDownChbLabel.innerText = item.innerText
        dropDownChb.checked = false
    })
});

// button icon spin

const btn = document.querySelector('.footer__button')

btn.addEventListener('click', (event)=>{
    let isAnimPlaying = event.target.classList.contains('button-active')
    if(!isAnimPlaying) {
        event.target.classList.add('button-active')
        setTimeout(()=>{
            event.target.classList.remove('button-active') 
        },500)
    }

    generateChart()
})

// radial chart

const radialItems = document.querySelectorAll('.recycled__radial')
const radialItemsLabel = document.querySelectorAll('.recycled__item__percentage')

function generateChart() {
    // randomize values
    let chartNumbers = []
    let total = 100
    radialItems.forEach((item, index) => {
        let currentPercent
        if(index == radialItems.length - 1) {
            currentPercent = total
        } else {
            currentPercent = Math.round(Math.random() * (total/2) + 5)
            total -= currentPercent
        }
        chartNumbers.push(currentPercent)
        // apply chart lenghts
        let finalLenght = currentPercent - 3
        item.style.setProperty('--_value', `calc(${finalLenght}deg * 3.14)`)

        radialItemsLabel[index].innerText = `${currentPercent}%`
    });

    
    // apply new angles
    let chartAngles = chartNumbers
    chartAngles.pop()
    chartAngles.unshift(2)
    chartAngles.forEach((angle, index) => {
        let newAngle = 0
        for (let i = 0; i < index + 1; i++) {
            newAngle += chartAngles[i] + 3.5
        }
        radialItems[index].style.setProperty('--_rotate',  `calc((${newAngle}deg * 3.14)`)
    });
    
    // progress randomize
    const progressBars = document.querySelectorAll('progress')
    progressBars.forEach(item => {
        let barMax = parseInt(progressBars[0].getAttribute('max'))
        let newValue = Math.round(Math.random() * barMax)
        item.setAttribute('value', newValue)
    })
}

generateChart()

