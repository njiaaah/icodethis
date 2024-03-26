
let rangeInput = document.querySelector('.the-input')
let progressBars = document.querySelectorAll('.inner-bar')
let progressValues = document.querySelectorAll('.val')
let intervalId
let val = 0
let innerItems = document.querySelectorAll('.progress-bar__inner-wrapper .inner-item')

rangeInput.addEventListener('input', (evt) => {
    update(evt.target.value)
    val = evt.target.value
})

function update(a) {
    let progress = a - 100

    progressBars.forEach(bar => {
        bar.style.transform = `translateX(${progress}%)`
    });

    progressValues.forEach(value => {
        value.innerText = progress + 100
    })

    innerItems.forEach(item => {
        let pos = parseInt(item.getAttribute('data-val'));

        console.log('pos is ' + pos);
        console.log('val is ' + val);

        item.classList.remove('inner-item_done');
        item.classList.remove('inner-item_in-progress');



        if (pos < val) {
            item.classList.add('inner-item_done')
            item.classList.remove('inner-item_in-progress')
        } else if (pos >= val && pos - 30 < val) {
            item.classList.remove('inner-item_done')
            item.classList.add('inner-item_in-progress')
        }

        if (val >= 99) {
            item.classList.add('inner-item_done')
            item.classList.remove('inner-item_in-progress')
        }

    })

}

function play() {
    intervalId = setInterval(() => {
        val++
        update(val)
        rangeInput.value = val
        if (val >= 100) {
            clearInterval(intervalId)
        }
    }, 25)
}

play()