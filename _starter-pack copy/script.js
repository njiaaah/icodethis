const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");

// get
const fetchMessages = async () => {
	const response = await fetch("https://njiah.ru/chat/chat.php");
	const messages = await response.json();

	let oldMessages = Array.from(chatBox.querySelectorAll(".message")).map((message) => message.innerHTML);

	chatBox.innerHTML = messages
		.map(
			(msg) =>
				`<div class="message">
            <img class="profile-pic">
            <div class="message-content">
                <p class="msg-name">${msg.name} :</p>
                <p class="msg-text">${msg.message}</p>
            </div>
        </div>`
		)
		.join("");

	let newMessages = Array.from(chatBox.querySelectorAll(".message")).map((message) => message.innerHTML);

	newMessages.forEach((message, index) => {
		if (!oldMessages.includes(message)) {
			chatBox.querySelectorAll(".message")[index].classList.add("new-message");
		}
	});

	if (newMessages.length > oldMessages.length) {
		setTimeout(() => {
			chatBox.scrollTo({
				top: chatBox.scrollHeight * 2,
				behavior: "smooth",
			});
		}, 100);
	}

	setTimeout(() => {
		document.querySelectorAll(".new-message").forEach((message) => {
			message.classList.remove("new-message");
		});
	}, 1000);
};

// send
const sendMessage = async (name, message) => {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("message", message);

	const response = await fetch("https://njiah.ru/chat/chat.php", {
		method: "POST",
		body: formData,
	});

	const result = await response.json();
	if (result.status === "success") {
		fetchMessages();
	} else {
		alert("error sadface");
	}
};

// submit
chatForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value;
	const message = document.getElementById("message").value;
	sendMessage(name, message);
});

fetchMessages();
setInterval(fetchMessages, 5000);
