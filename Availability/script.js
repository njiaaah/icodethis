const modal = document.querySelector('#modal')
const modalOpenBtn = document.querySelector('#modalOpen')
const modalCloseBtns = document.querySelectorAll('#modal footer button')

// modal.showModal()

modalOpenBtn.addEventListener('click', ()=>{
    if(modal.hasAttribute('open') == false) {
        modal.showModal()
    }
})

modalCloseBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        modal.setAttribute('closing', '')
        setTimeout(()=>{
            modal.removeAttribute('closing')
            modal.close()
        },400)

    })
})

