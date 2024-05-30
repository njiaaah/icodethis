//  double slider aka slider 1
const firstSliderValue = document.querySelector('#slider_01_a')
const secondSliderValue = document.querySelector('#slider_01_b')

const graphicOverlay = document.querySelector('.slider_01_overlay')
const doubleSliderConnect = document.querySelector('.double-slider-connect')

let val

// update slider on input change
firstSliderValue.addEventListener('input', (event) => {
    setTimeout(() => {
        // ??? for some reason everything becomes too fucked up when val of slider is 100%
        if (firstSliderValue.value >= 99) {
            firstSliderValue.value = 98
        }
        updateDoubleSlider()
    }, 0)

})
secondSliderValue.addEventListener('input', (event) => {
    setTimeout(() => {
        // ???
        if (secondSliderValue.value >= 99) {
            secondSliderValue.value = 98
        }
        updateDoubleSlider()
    }, 0)
})

function updateDoubleSlider() {
    if (Number(firstSliderValue.value) > Number(secondSliderValue.value)) {
        graphicOverlay.style.left = secondSliderValue.value + '%'
        graphicOverlay.style.width = firstSliderValue.value - secondSliderValue.value + '%'
        doubleSliderConnect.style.left = secondSliderValue.value + '%'
        doubleSliderConnect.style.width = firstSliderValue.value - secondSliderValue.value + '%'
    } else {
        graphicOverlay.style.left = firstSliderValue.value + '%'
        graphicOverlay.style.width = secondSliderValue.value - firstSliderValue.value + '%'
        doubleSliderConnect.style.left = firstSliderValue.value + '%'
        doubleSliderConnect.style.width = secondSliderValue.value - firstSliderValue.value + '%'
    }
}


// add spans

const spanContainer = document.querySelector('.slider_01_graphic')

for (let i = 0; i < 33; i++) {
    let newSpan = document.createElement('span')
    newSpan.classList.add('sliderGraphicColumn')
    spanContainer.appendChild(newSpan)
}

let spans = document.querySelectorAll('.sliderGraphicColumn')

for (let i = 0; i < spans.length; i++) {

    setTimeout(() => {
        spans[i].style.height = Math.floor(Math.random() * 50 + 20) + 'px'
    }, i * 1)

}


// SLIDER 2

const slider2 = document.querySelector('#easySlider01Input')
const slider2Label = document.querySelector('#easySlider01__val')

slider2.addEventListener('input', (event) => {
    updateSlider2(event.target.value)
})

function updateSlider2() {
    let leftOffset = 50 - slider2Label.offsetWidth / 2 + 10
    let sliderWidth = document.querySelector('#easySlider01').offsetWidth - leftOffset * 2 - 64
    slider2Label.style.left = 'calc(' + leftOffset + 'px + ' + sliderWidth / 100 * slider2.value + 'px)'
    slider2Label.innerText = '$' + document.querySelector('#easySlider01__max').innerHTML.substring(1) / 100 * slider2.value
}

// SLIDER 3

const slider3 = document.querySelector('#easySlider02Input')
const slider3Fill = document.querySelector('#easySlider02LowerFill')
const slider3Text = document.querySelector('#easySlider02ThumbText')

slider3.addEventListener('input', (event) => {
    updateSlider3(event.target.value)
})

function updateSlider3(val) {
    let minWidth = 100 / val * 2
    if (val <= 30) {
        minWidth = 30
    } else minWidth = 100 / val * 6
    slider3Fill.style.width = 'calc(' + minWidth + 'px + ' + val + '%)'

    let leftOffset = 30 - 60 * val / 100
    slider3Text.style.left = 'calc(' + leftOffset + 'px + ' + val + '%)'
    slider3Text.innerText = val + '%'

}


// 4&5 

const downloadSliders = document.querySelectorAll('.downloadSlider')
const downloadSlidersFill = document.querySelectorAll('.easySlider04Fill')


function updateDownloadSliders(val) {

    downloadSlidersFill.forEach(bar => {
        let scale = val / 100
        bar.style.transform = 'scaleX(' + scale + ')'
    });
}

// init

function updateAll(val) {
    slider2.value = val
    slider3.value = val
    updateSlider2(val)
    updateSlider3(val)
    updateDownloadSliders(val)
}


updateAll(50)






// one input to rule dam all

const theInput = document.querySelector('#inputToRule')

theInput.addEventListener('input', (event) => {
    val = event.target.value
    globalChange(val)
})

function globalChange(val) {
    slider2.value = val
    slider3.value = val
    updateSlider2(val)
    updateSlider3(val)
    updateDownloadSliders(val)
    firstSliderValue.value = 0
    secondSliderValue.value = val
    updateDoubleSlider()
}
