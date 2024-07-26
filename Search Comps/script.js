// fill cities

const cities = ["Atlanta", "Dubai", "Dallas", "Chicago", "Denver", "Los Angeles", "Guangzhou", "Paris", "London", "Amsterdam"];

const placesDropdownOptions = document.querySelectorAll(".places-dropdown-options");
const placesDropdownLabels = document.querySelectorAll(".places-dropdown-label");
const placesDropdownInput = document.querySelectorAll(".header-dropdown-chb");
const placesDropdownSelectedValues = document.querySelectorAll(".dropdown-selected-value");
const allHeaderChb = document.querySelectorAll('header input[type="checkbox"]');

const headerDropdownOptions = document.querySelectorAll(".header-dropdown-options");

placesDropdownOptions.forEach((dropdown, index) => {
	cities.forEach((city) => {
		let newLi = document.createElement("li");
		newLi.innerText = city;
		dropdown.appendChild(newLi);
	});
	placesDropdownLabels[index].innerText = cities[Math.floor(Math.random() * cities.length)];
});

headerDropdownOptions.forEach((list, index) => {
	list.childNodes.forEach((child, i) => {
		child.addEventListener("click", () => {
			placesDropdownSelectedValues[index].innerText = child.innerText;
			placesDropdownInput[index].checked = false;
		});
	});
});

// dates

const date = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateLabels = document.querySelectorAll(".dates__text");
const dateInputs = document.querySelectorAll(".dates__input");

dateLabels.forEach((label, index) => {
	label.setAttribute("data-is-picker-shown", false);
	label.addEventListener("click", () => {
		if (label.getAttribute("data-is-picker-shown") === "false") {
			dateInputs[index].showPicker();
			label.setAttribute("data-is-picker-shown", true);
		} else {
			dateInputs[index].blur();
			label.setAttribute("data-is-picker-shown", false);
		}
	});
});

dateInputs.forEach((input, index) => {
	let newDateString = "";
	newDateString = daysOfWeek[date.getUTCDay()];
	newDateString += ", " + date.getDate();
	newDateString += " " + months[date.getMonth()];
	dateLabels[index].innerText = newDateString;

	input.addEventListener("change", () => {
		newDateString = daysOfWeek[input.valueAsDate.getUTCDay()];
		newDateString += ", " + input.valueAsDate.getDate();
		newDateString += " " + months[input.valueAsDate.getMonth()];
		dateLabels[index].innerText = newDateString;
	});
});

// swap places

const placesDropdowns = document.querySelectorAll(".places-dropdown");
const placesSwapBtn = document.getElementById("placesSwapBtn");

placesSwapBtn.addEventListener("click", () => {
	placesDropdowns.forEach((item) => {
		if (item.getAttribute("data-side") === "right") item.setAttribute("data-side", "left");
		else item.setAttribute("data-side", "right");
	});
	allHeaderChb.forEach((chb) => {
		chb.checked = false;
	});
	placesSwapBtn.classList.add("rotating");
	setTimeout(() => {
		placesSwapBtn.classList.remove("rotating");
	}, 500);
});
