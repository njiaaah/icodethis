const news = [
	{
		id: 1,
		author: "Jessie Holmes",
		theme: "Containers",
		title: "Recap: Kubernetes",
		publishedAt: "Yesterday",
		publishedIn: "Solution Architecture",
		readingTimeMinutes: 10,
		publishedDate: "25 Jun 2024",
	},
	{
		id: 2,
		author: "Alex Johnson",
		theme: "Artificial Intelligence",
		title: "The Future of AI in Healthcare",
		publishedAt: "Today",
		publishedIn: "Tech Innovators",
		readingTimeMinutes: 15,
		publishedDate: "26 Jun 2024",
	},
	{
		id: 3,
		author: "Maria Garcia",
		theme: "Cybersecurity",
		title: "Understanding Zero Trust Security",
		publishedAt: "Two days ago",
		publishedIn: "Security Weekly",
		readingTimeMinutes: 8,
		publishedDate: "24 Jun 2024",
	},
	{
		id: 4,
		author: "David Brown",
		theme: "Cloud Computing",
		title: "AWS vs Azure: A Comparative Study",
		publishedAt: "Last Week",
		publishedIn: "Cloud Journal",
		readingTimeMinutes: 12,
		publishedDate: "20 Jun 2024",
	},
	{
		id: 5,
		author: "Emma Wilson",
		theme: "Blockchain",
		title: "Blockchain Beyond Cryptocurrency",
		publishedAt: "Three days ago",
		publishedIn: "Distributed Ledger",
		readingTimeMinutes: 5,
		publishedDate: "23 Jun 2024",
	},
	{
		id: 6,
		author: "Sophia Martinez",
		theme: "Quantum Computing",
		title: "Quantum Supremacy: Myth or Reality?",
		publishedAt: "Last Month",
		publishedIn: "Quantum Review",
		readingTimeMinutes: 20,
		publishedDate: "27 May 2024",
	},
];

const articleText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat rem vero? Consectetur architecto, nemo minus autem necessitatibus molestias odio harum corrupti placeat sequi dignissimos.";

// filling news list
const newsContainer = document.getElementById("newsContainer");

function generateNewsList() {
	news.forEach((item, index) => {
		let newLi = document.createElement("li");

		let newArticle = document.createElement("article");
		newArticle.classList.add("news-container__article");

		let newTheme = document.createElement("span");
		newTheme.classList.add("news-container__article__theme");
		newTheme.innerText = item.theme;

		let newTitle = document.createElement("h4");
		newTitle.classList.add("news-container__article__title");
		newTitle.innerText = item.title;

		let newFooter = document.createElement("div");
		newFooter.classList.add("news-container__article__footer");

		let newPlayBtn = document.createElement("div");
		newPlayBtn.classList.add("news-container__article__play-btn");
		newPlayBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7z"/></svg>';

		let newPublishedAt = document.createElement("span");
		newPublishedAt.classList.add("news-container__article__publishedAt");
		newPublishedAt.innerText = item.publishedAt;

		newFooter.appendChild(newPlayBtn);
		newFooter.appendChild(newPublishedAt);

		newArticle.appendChild(newTheme);
		newArticle.appendChild(newTitle);
		newArticle.appendChild(newFooter);

		newLi.setAttribute("data-windowId", item.id);
		newLi.append(newArticle);
		newLi.addEventListener("click", () => {
			createWindow(index);
		});

		newsContainer.appendChild(newLi);
	});
}

generateNewsList();

// window controls

const footerTabContainer = document.getElementById("footerWindows");

let zTop = 100;
let windows = [];
let windowsDragAreas = [];

function getWindows() {
	// moving window
	const windows = document.querySelectorAll(".window");
	const windowsDragAreas = document.querySelectorAll(".window__draggable-area");

	windowsDragAreas.forEach((area, index) => {
		area.addEventListener("mousedown", (mousedownEvent) => {
			if (windows[index].classList.contains("window-fullscreen") == false) {
				const initialX = mousedownEvent.clientX - windows[index].offsetLeft;
				const initialY = mousedownEvent.clientY - windows[index].offsetTop;
				// alway put shit on top
				zTop++;
				windows[index].style.zIndex = zTop;

				const onMouseMove = (mousemoveEvent) => {
					const newX = mousemoveEvent.clientX - initialX;
					const newY = mousemoveEvent.clientY - initialY;
					windows[index].style.left = `${newX}px`;
					windows[index].style.top = `${newY}px`;
				};

				const onMouseUp = () => {
					window.removeEventListener("mousemove", onMouseMove);
					window.removeEventListener("mouseup", onMouseUp);
				};

				window.addEventListener("mousemove", onMouseMove);
				window.addEventListener("mouseup", onMouseUp);
			}
		});
	});

	// header controls
	let controlsCollapse = document.querySelectorAll(".cotrols__collapse");
	let controlsFullscreen = document.querySelectorAll(".cotrols__fullscreen");
	let controlsClose = document.querySelectorAll(".cotrols__close");
	let footerTabs = document.querySelectorAll("#footerWindows div");

	function toggleCollapse(item, index) {
		const isCollapsed = item.getAttribute("data-is-collapsed") === "true";

		if (isCollapsed) {
			item.classList.remove("window-collapsing");
			footerTabs[index].classList.remove("footer-bar-collapsed");
			zTop++;
			item.style.zIndex = zTop;
			item.setAttribute("data-is-collapsed", "false");
		} else {
			item.classList.add("window-collapsing");
			footerTabs[index].classList.add("footer-bar-collapsed");
			item.setAttribute("data-is-collapsed", "true");
		}
	}

	windows.forEach((item, index) => {
		// CLOSE
		if (item.getAttribute("data-listen-close") == null) {
			item.setAttribute("data-listen-close", true);
			controlsClose[index].addEventListener("click", () => {
				item.classList.add("window-closing");
				footerTabs[index].remove();
				setTimeout(() => {
					item.remove();
					footerTabs[index].remove();
				}, 200);
			});
		}

		// FULLSCREEN
		let controlsFullscreen = document.querySelectorAll(".cotrols__fullscreen");
		controlsFullscreen.forEach((control) => {
			if (!control.hasAttribute("data-listen-fullscreen")) {
				control.setAttribute("data-listen-fullscreen", true);
				control.addEventListener("click", () => {
					let item = control.closest(".window");
					if (item.hasAttribute("data-fullscreen")) {
						let storedLeft = item.getAttribute("data-stored-left");
						let storedTop = item.getAttribute("data-stored-top");

						if (storedLeft !== null && storedTop !== null) {
							item.style.left = storedLeft + "px";
							item.style.top = storedTop + "px";
							item.style.width = "500px";
						}
						item.style.height = "fit-content";

						item.removeAttribute("data-stored-left");
						item.removeAttribute("data-stored-top");
						item.classList.remove("window-fullscreen");
						item.removeAttribute("data-fullscreen");
					} else {
						let currentLeft = item.offsetLeft;
						let currentTop = item.offsetTop;
						let currentWidth = item.offsetWidth;

						item.setAttribute("data-stored-left", currentLeft);
						item.setAttribute("data-stored-top", currentTop);
						item.setAttribute("data-stored-width", currentWidth);

						item.style.left = "0";
						item.style.top = "0";
						item.style.width = "100%";
						item.style.height = "calc(100% - 50px)";
						item.classList.add("window-fullscreen");
						item.setAttribute("data-fullscreen", true);

						zTop++;
						item.style.zIndex = zTop;
					}
				});
			}
		});

		// COLLAPSE
		if (!item.hasAttribute("data-listen-collapse")) {
			item.setAttribute("data-listen-collapse", true);
			controlsCollapse[index].addEventListener("click", () => {
				toggleCollapse(item, index);
			});

			footerTabs[index].addEventListener("click", () => {
				toggleCollapse(item, index);
			});
		}
	});
}
const loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aperiam harum. Voluptas aperiam voluptates perferendis libero quam? Distinctio modi libero hic natus sequi, quidem doloribus obcaecati dignissimos consectetur harum quisquam?";
const windowArticleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#fe8839"
                                d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                        </svg>`;
const windowContainer = document.getElementById("windowsContainer");
const windowHeaderHTML = `
                    <div class="window__draggable-area"></div>
                    <div class="windows__header__constrols">
                        <span class="controls__item cotrols__collapse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 12.5v-1h14v1z" />
                            </svg>
                        </span>
                        <span class="controls__item cotrols__fullscreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M5 19h2.923q.213 0 .356.144t.144.357t-.144.356t-.356.143H4.808q-.343 0-.576-.232T4 19.192v-3.115q0-.213.144-.356t.357-.144t.356.144t.143.356zm14.02 0v-2.923q0-.213.143-.356q.144-.144.357-.144t.356.144t.143.356v3.115q0 .344-.232.576t-.575.232h-3.116q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143zM5 5v2.923q0 .213-.144.356t-.357.144t-.356-.144T4 7.923V4.808q0-.343.232-.576T4.808 4h3.115q.213 0 .356.144t.144.357t-.144.356T7.923 5zm14.02 0h-2.924q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.116q.343 0 .575.232t.232.576v3.115q0 .213-.144.356t-.356.144t-.356-.144t-.144-.356z" />
                            </svg>
                        </span>
                        <span class="controls__item cotrols__close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" />
                            </svg>
                        </span>
                    </div>
                `;

function createWindow(i) {
	let newWindow = document.createElement("div");
	newWindow.classList.add("window");

	let header = document.createElement("header");
	header.innerHTML = windowHeaderHTML;

	let newArticle = document.createElement("article");

	// window header
	let newArticleHeader = document.createElement("header");

	newArticleHeader.innerHTML = windowArticleSvg;
	let newArticleHeaderTitle = document.createElement("h4");
	newArticleHeaderTitle.innerText = news[i].author;
	let newArticleHeaderSpan = document.createElement("span");
	newArticleHeaderSpan.innerText = news[i].publishedDate;
	let newArticleHeaderA = document.createElement("a");
	newArticleHeaderA.innerText = news[i].publishedIn;

	newArticleHeader.appendChild(newArticleHeaderTitle);
	newArticleHeader.appendChild(newArticleHeaderSpan);
	newArticleHeader.appendChild(newArticleHeaderA);

	// window content

	let newWindowContent = document.createElement("div");
	newWindowContent.classList.add("window__article__content");

	let newWindowTitle = document.createElement("h3");
	newWindowTitle.innerText = news[i].title;

	newWindowContent.innerHTML = generateArticleText(news[i].readingTimeMinutes);
	newWindowContent.prepend(newWindowTitle);

	newArticle.appendChild(newArticleHeader);
	newArticle.appendChild(newWindowContent);

	newWindow.appendChild(header);
	newWindow.appendChild(newArticle);
	zTop++;
	newWindow.style.zIndex = zTop;
	// fuck this bitch
	// newWindow.setAttribute("data-fullscreen", false);
	windowContainer.appendChild(newWindow);

	// windows on bottom bar
	let newFooterTab = document.createElement("div");
	let newFooterTabText = document.createElement("span");
	newFooterTabText.innerText = news[i].title;
	newFooterTab.appendChild(newFooterTabText);
	footerTabContainer.appendChild(newFooterTab);

	getWindows();
}

function generateArticleText(minutes) {
	let text = "";
	for (let i = 0; i < minutes / 2; i++) {
		let newP = `<p>${loremText}</p>`;
		text += newP;
	}
	return text;
}

getWindows();

createWindow(0);
