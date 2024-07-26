// star rating

const starLabel = document.querySelector('.start__overlay')
const starRadios = document.querySelectorAll('input[name="rate__stars__radio"]')
let overlayOffset = 0

starLabel.addEventListener('mousemove', (event) => {
    const offsetX = event.offsetX || (event.clientX - event.target.getBoundingClientRect().left)
    let percentage = (offsetX / event.target.offsetWidth) * 100
    starLabel.style.setProperty('--_center-line-width', percentage + '%');
})

starLabel.addEventListener('click', (event) => {
    const offsetX = event.offsetX || (event.clientX - event.target.getBoundingClientRect().left)
    const percentage = (offsetX / event.target.offsetWidth) * 100
    let starRating = 0
    if (percentage >= 0 && percentage < 20) {
        starRating = 1
    } else if (percentage >= 20 && percentage < 40) {
        starRating = 2
    } else if (percentage >= 40 && percentage < 60) {
        starRating = 3
    } else if (percentage >= 60 && percentage < 80) {
        starRating = 4
    } else if (percentage >= 80 && percentage <= 100) {
        starRating = 5
    }
    starRadios[starRating - 1].checked = true
})

starLabel.addEventListener('mouseout', () => {
    starLabel.style.setProperty('--_center-line-width', '00%');
})

// rating calculation

const ratingCharts = document.querySelectorAll('.reviews__chart input[name="chart__range-input"]')
const radtionLabel = document.querySelector('.rate__overall-rating')
const reviewAmount = document.querySelector('.reviews__amount')
console.log(radtionLabel)

function updateReviews() {
    const reviews = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ]
    const total = reviews.reduce((sum, value) => sum + value, 0)

    let amount = 0
    reviews.forEach(item => {
        amount+=item
    });

    const reviewsCharts = document.querySelectorAll('.reviews__chart .chart__row')
    reviewsCharts.forEach((reviewChart, index) => {
        const reviewsPercentage = (reviews[index] / total) * 100
        reviewChart.querySelector('.chart__row__progress-bar').style.width = `${reviewsPercentage}%`
        reviewChart.querySelector('.chart__row__percentage').innerText = `${reviewsPercentage.toFixed(0)}%`
    })
    reviewAmount.innerText = amount

    let overallRating = (reviews.reduce((sum, value) => sum + value, 0) / reviews.length) / 20
    radtionLabel.innerHTML = overallRating.toFixed(1)
}
updateReviews()

const randomizeBtn = document.querySelector('#randomizeScore')

randomizeBtn.addEventListener('click', () => {
    updateReviews()
})
