const graphsWraps = document.querySelectorAll(".graph");
const values = [];
const graphs = document.querySelectorAll(".graph span");
const randomizeBtn = document.getElementById("randomizeBtn");
const transitionTime = 350;
const maxValueInput = document.getElementById("maxValueInput");
const seftSideBar = document.getElementById("leftSideBar");
const graphLinesContainer = document.getElementById("graphLinesContainer");

let maxValue = 500;
let isAnimating = false;

function graphInit() {
	graphsWraps.forEach((wrap) => {
		wrap.style.gridTemplateRows = "1fr";
	});

	graphs.forEach((graph) => {
		let value = generateRandomValues();
		graph.style.height = value + "%";
		let dataVal = (value / 100) * maxValue;
		graph.setAttribute("data-value", Math.round(dataVal));
	});
}

function renderGraph() {
	graphsWraps.forEach((wrap) => {
		wrap.style.gridTemplateRows = "0fr";
	});
	setTimeout(() => {
		graphsWraps.forEach((wrap) => {
			setInterval(() => {});
			wrap.style.gridTemplateRows = "1fr";
		});

		graphs.forEach((graph) => {
			let value = generateRandomValues();
			graph.style.height = value + "%";
			let dataVal = (value / 100) * maxValue;
			graph.setAttribute("data-value", Math.round(dataVal));
		});

		setTimeout(() => {
			isAnimating = !isAnimating;
		}, transitionTime);
	}, transitionTime);
}

function generateRandomValues() {
	let randomVal = Math.round(Math.random() * 100);
	return randomVal;
}

function leftBarReDraw() {
	let spans = document.querySelectorAll("#leftSideBar span");
	let spanAmount = 0;
	let spanValue = 100;
	// remove old valuse on sidebar
	spans.forEach((span) => {
		span.classList.add("fading");
		setTimeout(() => {
			span.remove();
		}, transitionTime);
	});
	if (maxValue <= 125) spanValue = 25;
	if (maxValue > 125 && maxValue <= 300) spanValue = 50;
	if (maxValue > 300 && maxValue <= 700) spanValue = 100;
	if (maxValue > 700) spanValue = 200;

	// need to apply y scale so graphs height is apropriate to max value of table
	spanAmount = Math.ceil(maxValue / spanValue) + 1;
	let largestVale = Math.ceil(maxValue / spanValue) * spanValue;
	let newRatio = maxValue / largestVale;
	graphs.forEach((graph) => {
		graph.style.scale = `1 ${newRatio}`;
	});
	let lines = document.querySelectorAll("#graphLinesContainer div");
	lines.forEach((line) => {
		line.classList.add("fading");
		setTimeout(() => {
			line.remove();
		}, transitionTime);
	});

	// insert new values on left bar
	for (let i = 0; i < spanAmount; i++) {
		// new value
		setTimeout(() => {
			let newSpan = document.createElement("span");
			newSpan.innerText = i * spanValue;
			seftSideBar.appendChild(newSpan);
		}, transitionTime);
		// new lines
		setTimeout(() => {
			let newDiv = document.createElement("div");
			let newHr = document.createElement("hr");
			newDiv.appendChild(newHr);
			graphLinesContainer.appendChild(newDiv);
		}, transitionTime);
	}
}

randomizeBtn.addEventListener("click", () => {
	if (!isAnimating) {
		isAnimating = !isAnimating;
		renderGraph();
		leftBarReDraw();
	}
});

maxValueInput.addEventListener("change", () => {
	maxValue = maxValueInput.value;
	document.getElementById("details__max-value-label").innerText = maxValue;
});

generateRandomValues();
graphInit();
leftBarReDraw();
