let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let special = "~!@#$%^&*"

// options
let length = 10
let useNumber = true
let useSpecial = false

let lengthInput = document.querySelector('.length__input')
let numbersInput = document.querySelector('#numbers-chb')
let specialInput = document.querySelector('#symbols-chb')
let passwordOutput = document.querySelector('.password-output')
let generateButton = document.querySelector('.generate-btn')

lengthInput.addEventListener('change', (event) => {
    length = event.target.value
    document.querySelector('.length__val').innerText = length
})

numbersInput.addEventListener('change', (event) => {
    useNumber = event.target.checked
})

specialInput.addEventListener('change', (event) => {
    useSpecial = event.target.checked
})

function generatePassword() {
    let charset = letters
    if (useNumber) {
        charset += numbers
    }
    if (useSpecial) {
        charset += special
    }
    let password = ''
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    passwordOutput.textContent = password
}


generatePassword()

generateButton.addEventListener('click', () => {
    generatePassword()
})



// copy


function copyPasswordToClipboard() {
    let passwordOutput = document.querySelector('.password-output')
    let textarea = document.createElement('textarea')
    textarea.value = passwordOutput.textContent
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    let alert = document.querySelector('.alert')
    alert.classList.add('copied')
    setTimeout(() => {
        alert.classList.remove('copied')
    }, 1000)
}

document.querySelector('.password-output').addEventListener('click', copyPasswordToClipboard)