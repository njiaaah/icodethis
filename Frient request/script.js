let requests = document.querySelectorAll('.request-list__item')
let addBtns = document.querySelectorAll('.confirm')
let removeBtns = document.querySelectorAll('.delete')
let requestsIndex = 5
const viewAllLabel = document.querySelector('.view-all-label')
let requestsCounter = document.querySelector('.total-request-counter')

addBtns.forEach((btn, e)=>{
    btn.addEventListener('click', ()=>{
        removeRequest(e)
    })
})

removeBtns.forEach((btn, e)=>{
    btn.addEventListener('click', ()=>{
        removeRequest(e)
    })
})

function removeRequest(e) {
    requests[e].remove()
    requestsIndex--
    requestsCounter.innerText = requestsIndex
    if(requestsIndex <= 3) {
        viewAllLabel.style.display = 'none'
    } else {
        viewAllLabel.style.display = 'block'
    }
    if(requestsIndex == 0) {
        document.querySelector('#friend-requests__open-chb').checked = false
        document.querySelector('.friend-requests__open-label').style.display = 'none'
    }
}