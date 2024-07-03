const restaraunts = [
	{ name: "Please do drag us", rating: 4, tags: ["italian", "vegetarian"], distance: 3.8 },
	{ name: "Horizontally on the right", rating: 5, tags: ["healthy", "vegan"], distance: 1.5 },
	{ name: "Or vertically on the left", rating: 3, tags: ["mexican", "cheap"], distance: 2.1 },
	{ name: "Anna's Wok Palace", rating: 4, tags: ["chinese", "cheap"], distance: 0.9 },
	{ name: "Jessica's Green Haven", rating: 4, tags: ["vegan", "healthy"], distance: 4.7 },
	{ name: "Christopher's Cafe", rating: 3, tags: ["italian", "cheap"], distance: 1.2 },
	{ name: "Emily's Sunshine Cafe", rating: 5, tags: ["healthy", "vegetarian"], distance: 3.4 },
	{ name: "Daniel's Spicy Dragon", rating: 3, tags: ["mexican", "vegan"], distance: 0.6 },
	{ name: "Andrew's Fiesta Fiesta", rating: 4, tags: ["mexican", "cheap"], distance: 4.2 },
	{ name: "William's Olive Branch", rating: 4, tags: ["italian", "vegetarian"], distance: 2.9 },
];

// generate all items

let list = document.querySelector(".main__list");
let listItem = document.querySelector(".main__list__item");

for (let i = 0; i < restaraunts.length - 1; i++) {
	let newListItem = listItem.cloneNode(true);
	list.appendChild(newListItem);
}

let articleImages = document.querySelectorAll(".article__img");
let artcileTitles = document.querySelectorAll(".artilce__title");
let articleRating = document.querySelectorAll(".article__rating-wrapper");
let articleTagContainer = document.querySelectorAll(".article__tag-wrapper");
let articleDistance = document.querySelectorAll(".article__distance-number");

restaraunts.forEach((restaraunt, index) => {
	// randomize images
	let imgX = Math.floor(Math.random() * 10 + 275);
	let imgY = Math.floor(Math.random() * 10 + 275);
	articleImages[index].setAttribute("src", `https://loremflickr.com/${imgX}/${imgY}`);

	// title
	artcileTitles[index].innerText = restaraunts[index].name;

	// rating
	let ratingStars = articleRating[index].children;
	for (let i = 0; i < ratingStars.length; i++) {
		ratingStars[i].classList.add("star-yellow");
		if (restaraunts[index].rating === i + 1) i = 5;
	}
	// tags
	restaraunts[index].tags.forEach((tag) => {
		let newTag = document.createElement("span");
		newTag.classList.add("article__tag");
		newTag.innerText = tag;
		articleTagContainer[index].appendChild(newTag);
	});
	// distance
	articleDistance[index].innerText = restaraunts[index].distance;
});

// horizontall scroll on articles

const articles = document.querySelectorAll(".article");
const artilcesList = document.querySelector(".main__list");
const horizontalGrabAreas = document.querySelectorAll(".article__main-x-scroll-box");
const verticalGrabAreas = document.querySelectorAll(".article__main-y-scroll-box");
let isMouseDown = false;
let initX;
let initY;
let scrollLeft;
let scrollTop;

function removeScroll(index) {
	articles.forEach((item, i) => {
		if (i == index) return;
		item.scrollTo({
			left: 0,
			behavior: "smooth",
		});
	});
}

articles.forEach((article, index) => {
	// horizontal scroll
	horizontalGrabAreas[index].addEventListener("mousedown", (e) => {
		isMouseDown = true;
		article.classList.add("article-scrolling");
		initX = e.pageX - article.offsetLeft;
		scrollLeft = article.scrollLeft;
	});

	horizontalGrabAreas[index].addEventListener("mouseleave", () => {
		isMouseDown = false;
		article.classList.remove("article-scrolling");
	});

	horizontalGrabAreas[index].addEventListener("mouseup", () => {
		isMouseDown = false;
		article.classList.remove("article-scrolling");
	});

	horizontalGrabAreas[index].addEventListener("mousemove", (e) => {
		if (!isMouseDown) return;
		e.preventDefault();
		const x = e.pageX - article.offsetLeft;
		const scroll = x - initX;
		article.scrollLeft = scrollLeft - scroll;
		removeScroll(index);
	});

	// vertical scroll
	verticalGrabAreas[index].addEventListener("mousedown", (e) => {
		isMouseDown = true;
		initY = e.pageY - artilcesList.offsetTop;
		scrollTop = artilcesList.scrollTop;
	});
	verticalGrabAreas[index].addEventListener("mouseleave", () => {
		isMouseDown = false;
		article.classList.remove("article-scrolling");
	});

	verticalGrabAreas[index].addEventListener("mouseup", () => {
		isMouseDown = false;
		article.classList.remove("article-scrolling");
	});

	verticalGrabAreas[index].addEventListener("mousemove", (e) => {
		if (!isMouseDown) return;
		e.preventDefault();
		const y = e.pageY - artilcesList.offsetTop;
		const scroll = y - initY;
		artilcesList.scrollTop = scrollTop - scroll;
	});

	// close on option click

	let articleOptions = document.querySelectorAll(".article__options");

	articleOptions.forEach((option) => {
		option.addEventListener("click", () => {
			removeScroll(999);
		});
	});
});
