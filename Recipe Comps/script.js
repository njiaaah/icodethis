const baconDishes = [
  {
      name: "Carbonara",
      description: "A classic Italian pasta dish made with spaghetti, bacon or pancetta, eggs, and Parmesan cheese.",
      time: 20,
      servings: 4,
      cals: 450,
      dimensions: [197, 205],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "BLT Sandwich",
      description: "A popular sandwich consisting of crispy bacon, fresh lettuce, juicy tomato, mayonnaise, and toasted bread.",
      time: 10,
      servings: 1,
      cals: 350,
      dimensions: [196, 208],
      rating: Math.floor(Math.random) * (0 - 0),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon Cheeseburger",
      description: "A classic cheeseburger topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and condiments on a toasted bun.",
      time: 25,
      servings: 4,
      cals: 600,
      dimensions: [204, 216],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Carbonated Pork Chops",
      description: "Thick-cut pork chops coated in a mixture of flour, eggs, and breadcrumbs, then fried until crispy and served with a sweet and tangy sauce.",
      time: 30,
      servings: 4,
      cals: 700,
      dimensions: [195, 203],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Wrapped Jalapeno Poppers",
      description: "Stuffed jalapeños filled with cream cheese, wrapped in strips of bacon, and baked until golden brown.",
      time: 20,
      servings: 8,
      cals: 250,
      dimensions: [200, 206],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Topped Mac 'n Cheese",
      description: "A comforting casserole made with macaroni, melted cheddar cheese, crispy bacon, and a crispy breadcrumb topping.",
      time: 35,
      servings: 6,
      cals: 550,
      dimensions: [199, 208],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Irish Sausage Rolls",
      description: "Flaky pastry rolls filled with spiced sausage and crumbled bacon, perfect for breakfast or as a snack.",
      time: 25,
      servings: 8,
      cals: 400,
      dimensions: [196, 204],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Wrapped Asparagus",
      description: "Fresh asparagus spears wrapped in strips of crispy bacon and baked until tender and caramelized.",
      time: 15,
      servings: 4,
      cals: 150,
      dimensions: [201, 207],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  }, {
      name: "Carbonara",
      description: "A classic Italian pasta dish made with spaghetti, bacon or pancetta, eggs, and Parmesan cheese.",
      time: 20,
      servings: 4,
      cals: 450,
      dimensions: [197, 205],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "BLT Sandwich",
      description: "A popular sandwich consisting of crispy bacon, fresh lettuce, juicy tomato, mayonnaise, and toasted bread.",
      time: 10,
      servings: 1,
      cals: 350,
      dimensions: [196, 208],
      rating: Math.floor(Math.random) * (0 - 0),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon Cheeseburger",
      description: "A classic cheeseburger topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and condiments on a toasted bun.",
      time: 25,
      servings: 4,
      cals: 600,
      dimensions: [204, 216],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Carbonated Pork Chops",
      description: "Thick-cut pork chops coated in a mixture of flour, eggs, and breadcrumbs, then fried until crispy and served with a sweet and tangy sauce.",
      time: 30,
      servings: 4,
      cals: 700,
      dimensions: [195, 203],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Wrapped Jalapeno Poppers",
      description: "Stuffed jalapeños filled with cream cheese, wrapped in strips of bacon, and baked until golden brown.",
      time: 20,
      servings: 8,
      cals: 250,
      dimensions: [200, 206],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Topped Mac 'n Cheese",
      description: "A comforting casserole made with macaroni, melted cheddar cheese, crispy bacon, and a crispy breadcrumb topping.",
      time: 35,
      servings: 6,
      cals: 550,
      dimensions: [199, 208],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Irish Sausage Rolls",
      description: "Flaky pastry rolls filled with spiced sausage and crumbled bacon, perfect for breakfast or as a snack.",
      time: 25,
      servings: 8,
      cals: 400,
      dimensions: [196, 204],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  },
  {
      name: "Bacon-Wrapped Asparagus",
      description: "Fresh asparagus spears wrapped in strips of crispy bacon and baked until tender and caramelized.",
      time: 15,
      servings: 4,
      cals: 150,
      dimensions: [201, 207],
      rating: Math.floor(Math.random() * 4 + 1),
      reviews: Math.floor(Math.random() * (20000 - 1) + 1000),
      difficulty: Math.floor(Math.random() * 3)
  }
];

//   populate swiper

const swiper = document.querySelector('.swiper__list')

baconDishes.forEach((dish, index) => {
  let item = document.createElement('li')
  item.classList.add('swiper__item')

  let newImg = document.createElement('img')
  let x = dish.dimensions[0]
  let y = dish.dimensions[1]
  newImg.setAttribute("src", `https://baconmockup.com/${x}/${y}`)
  newImg.classList.add('swiper__item__img')

  let newText = document.createElement('p')
  newText.classList.add('swiper__item__text')
  newText.innerText = dish.name

  item.appendChild(newImg)
  item.appendChild(newText)
  item.addEventListener('click', (event) => {
      loadDishInfo(index)
  })

  swiper.appendChild(item)
});



const swiperItems = document.querySelectorAll('.swiper__item')

function loadDishInfo(index) {
  let oldItem = document.querySelector('.selected-item')
  if (oldItem) {
      oldItem.classList.remove('selected-item')
  }

  swiperItems[index].classList.add('selected-item')
  // params
  document.querySelector('.param__item__time').innerHTML = `${baconDishes[index].time} minutes`
  document.querySelector('.param__item__servings').innerHTML = `${baconDishes[index].servings} servings`
  document.querySelector('.param__item__cals').innerHTML = `${baconDishes[index].cals} cals`
  // difficulty
  let diffItems = document.querySelectorAll('.diff__item')
  diffItems.forEach((item, i) => {
      item.classList.remove('diff__selected')
      if (i == baconDishes[index].difficulty) {
          item.classList.add('diff__selected')
      }
  });
  // article
  let x = baconDishes[index].dimensions[0]
  let y = baconDishes[index].dimensions[1]
  document.querySelector('.dish__photo').setAttribute('src', `https://baconmockup.com/${x}/${y}`)
  document.querySelector('.article__title').innerHTML = baconDishes[index].name
  document.querySelector('.article__text').innerHTML = baconDishes[index].description
  document.querySelector('.article__title').innerHTML = baconDishes[index].name
  // stars
  let stars = document.querySelectorAll('.article__star')

  stars.forEach(star => {
      star.classList.remove('star-selected')
  });

  for (let i = 0; i < baconDishes[index].rating; i++) {
      stars[i].classList.add('star-selected')

  }
  // reviews
  let reviews = baconDishes[index].reviews.toString()
  reviews = reviews.substring(0, reviews.length - 3)
  document.querySelector('.article__reviews').innerHTML = `${reviews}K`
}

// slider controls

const sliderPrev = document.querySelector('.swiper__controls__left')
const sliderNext = document.querySelector('.swiper__controls__right')
const swiperWrapper = document.querySelector('.swiper__list')

let swiperItemWidth = 100 / Math.round(swiperWrapper.clientWidth / document.querySelector('.swiper__item').clientWidth)

let offset
let counter = 0
let counterMax = baconDishes.length

sliderPrev.addEventListener('click', () => {

  if (counter > 0) {
      counter--
      offset = counter * swiperItemWidth * -1
      swiperWrapper.style.transform = `translateX(${offset}%)`
  } else {
      counter = counterMax - Math.round(swiperWrapper.clientWidth / document.querySelector('.swiper__item').clientWidth)
      offset = counter * swiperItemWidth * -1
      swiperWrapper.style.transform = `translateX(${offset}%)`
  }
})

sliderNext.addEventListener('click', () => {
  console.log(counter)
  console.log(counterMax - Math.round(swiperWrapper.clientWidth / document.querySelector('.swiper__item').clientWidth))
  if (counter < counterMax - Math.round(swiperWrapper.clientWidth / document.querySelector('.swiper__item').clientWidth)) {
      counter++
  } else {
      counter = 0
  }
  offset = counter * swiperItemWidth * -1
  swiperWrapper.style.transform = `translateX(${offset}%)`
})

// reset on resize

window.addEventListener('resize', () => {
  counter = 0
  offset = counter * swiperItemWidth * -1
  swiperWrapper.style.transform = `translateX(${offset}%)`
  swiperItemWidth = 100 / Math.round(swiperWrapper.clientWidth / document.querySelector('.swiper__item').clientWidth)
})


// select first item on load
loadDishInfo(0)

