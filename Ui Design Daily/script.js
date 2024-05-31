const dropdownItems = document.querySelectorAll('.hero__dropdown__item')
const dropdownSelected = document.querySelector('.hero__dropdown__label-selected__text')
const dropdownChb = document.querySelector('#hero__dropdown__checkbox')

dropdownItems.forEach(item => {
    item.addEventListener('click', (event)=> {
        dropdownSelected.innerText = event.target.innerText
        setTimeout(()=>{
            dropdownChb.checked = false
        },50)
    })
});
