let modal = document.getElementById("modal");
let modalCloseBtn = document.getElementById("modalClose");
let modalOpenBtn = document.getElementById("showModal");
let formSubmitBtn = document.getElementById("formSubmitBtn");
let isModalOpening = false;
let radioButtonsWrapper = document.getElementById("radio-wrapper");
let radioButtons = document.querySelectorAll("input[name='radio']");
let deleteButtons = document.querySelectorAll("td button");

let textInput = document.getElementById("modalText");

let table = document.getElementById("table");

modalCloseBtn.addEventListener("click", () => {
	closeModal();
});

function closeModal() {
	if (!isModalOpening) {
		isModalOpening = true;
		modal.classList.add("slidedown");
		setTimeout(() => {
			modal.close();
			modal.classList.remove("slidedown");
			isModalOpening = false;
		}, 400);
	}
}

function openModal() {
	if (!isModalOpening) {
		isModalOpening = true;
		modal.showModal();
		modal.classList.add("slideup");
		setTimeout(() => {
			modal.classList.remove("slideup");
			isModalOpening = false;
		}, 400);
	}
}

modalOpenBtn.addEventListener("click", () => {
	openModal();
});

openModal();

formSubmitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	let newRowText = textInput.value;
	let newRowType;

	// check if all input r filled
	if (newRowText.trim() === "") {
		textInput.classList.add("alert-text");
		setTimeout(() => {
			textInput.classList.remove("alert-text");
		}, 300);
		return;
	}

	// get radio value
	radioButtons.forEach((btn, index) => {
		if (btn.checked) {
			newRowType = btn.getAttribute("data-type");
			btn.checked = false;
		}
	});

	if (newRowType == undefined) {
		radioButtonsWrapper.classList.add("alert-radio");
		setTimeout(() => {
			radioButtonsWrapper.classList.remove("alert-radio");
		}, 300);
		return;
	}
	textInput.value = "";
	let hours = new Date().getHours();
	if (hours.toString().length == 1) {
		hours = "0" + hours.toString();
	}
	let minutes = new Date().getMinutes();
	if (minutes.toString().length == 1) {
		minutes = "0" + minutes.toString();
	}
	let newRowDate = hours + ":" + minutes;

	let submit = [newRowType, newRowText, newRowDate];

	addRow(submit);
	closeModal();
});

function addRow(submit) {
	let newTr = document.createElement("tr");

	submit.forEach((value) => {
		let newTd = document.createElement("td");
		newTd.innerText = value;
		newTr.appendChild(newTd);
	});

	let newTd = document.createElement("td");
	let newButton = document.createElement("button");
	newButton.innerText = "delete";
	newButton.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.remove();
	});
	newTd.appendChild(newButton);
	newTr.appendChild(newTd);

	table.appendChild(newTr);
}

deleteButtons = document.querySelectorAll("td button");

deleteButtons.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {
		e.target.parentNode.parentNode.remove();
	});
});
