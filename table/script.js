const mockData = [
	{
		firstName: "Manuel",
		lastName: "Sutton",
		email: "usike@udka.net",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Daisy",
		lastName: "Kelly",
		email: "ho@kepuf.edu",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Shane",
		lastName: "Underwood",
		email: "afawi@ajsenod.edu",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Ray",
		lastName: "Wise",
		email: "vebgelmo@ven.co.uk",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Sue",
		lastName: "Hammond",
		email: "zosub@bakus.edu",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Banks",
		lastName: "Roxie",
		email: "mekruj@orewera.co.uk",
		createdAt: "09-06-2020",
	},
	{
		firstName: "Alfred",
		lastName: "Reese",
		email: "upigohi@sop.edu",
		createdAt: "05-29-2020",
	},
	{
		firstName: "Maurice",
		lastName: "Lowe",
		email: "hib@oksuod.gov",
		createdAt: "05-29-2020",
	},
	{
		firstName: "Ella",
		lastName: "Blake",
		email: "ella@blake.co",
		createdAt: "10-12-2020",
	},
	{
		firstName: "James",
		lastName: "Rodriguez",
		email: "jamesr@protonmail.com",
		createdAt: "11-25-2020",
	},
	{
		firstName: "Sophia",
		lastName: "Carter",
		email: "sophia@carter.com",
		createdAt: "06-30-2021",
	},
	{
		firstName: "Liam",
		lastName: "Evans",
		email: "liam.evans@mail.org",
		createdAt: "08-14-2021",
	},
	{
		firstName: "Emma",
		lastName: "Martinez",
		email: "emma.m@gmail.com",
		createdAt: "01-04-2022",
	},
	{
		firstName: "Oliver",
		lastName: "King",
		email: "oliverking@hotmail.com",
		createdAt: "03-15-2022",
	},
	{
		firstName: "Ava",
		lastName: "Moore",
		email: "ava@moore.org",
		createdAt: "09-10-2022",
	},
	{
		firstName: "Ethan",
		lastName: "Lee",
		email: "ethan.lee@outlook.com",
		createdAt: "12-01-2022",
	},
	{
		firstName: "Isabella",
		lastName: "Harris",
		email: "isa.harris@edu.org",
		createdAt: "02-19-2023",
	},
	{
		firstName: "Mason",
		lastName: "Clark",
		email: "mason.clark@mail.com",
		createdAt: "05-21-2023",
	},
	{
		firstName: "Mia",
		lastName: "Lewis",
		email: "mia@lewis.net",
		createdAt: "07-07-2023",
	},
	{
		firstName: "Noah",
		lastName: "Walker",
		email: "noah.walker@gmail.com",
		createdAt: "09-09-2023",
	},
	{
		firstName: "Charlotte",
		lastName: "Hall",
		email: "charlotte@hall.edu",
		createdAt: "10-10-2023",
	},
	{
		firstName: "Lucas",
		lastName: "Allen",
		email: "lucas.allen@live.com",
		createdAt: "11-18-2023",
	},
	{
		firstName: "Amelia",
		lastName: "Young",
		email: "amelia.young@ymail.com",
		createdAt: "12-25-2023",
	},
	{
		firstName: "Benjamin",
		lastName: "Scott",
		email: "benjamin@scott.org",
		createdAt: "01-15-2024",
	},
	{
		firstName: "Harper",
		lastName: "Green",
		email: "harper.green@gmail.com",
		createdAt: "02-20-2024",
	},
	{
		firstName: "Henry",
		lastName: "Adams",
		email: "henry.adams@aol.com",
		createdAt: "03-22-2024",
	},
	{
		firstName: "Evelyn",
		lastName: "Nelson",
		email: "evelyn@nelson.co",
		createdAt: "04-10-2024",
	},
	{
		firstName: "Alexander",
		lastName: "Carter",
		email: "alex.carter@yahoo.com",
		createdAt: "05-05-2024",
	},
	{
		firstName: "Abigail",
		lastName: "Baker",
		email: "abigail.baker@mail.org",
		createdAt: "06-08-2024",
	},
	{
		firstName: "Sebastian",
		lastName: "Perez",
		email: "sebastian@perez.net",
		createdAt: "07-17-2024",
	},
	{
		firstName: "Emily",
		lastName: "Rogers",
		email: "emily.rogers@mail.org",
		createdAt: "08-25-2024",
	},
	{
		firstName: "William",
		lastName: "Cox",
		email: "william.cox@protonmail.com",
		createdAt: "09-13-2024",
	},
	{
		firstName: "Lily",
		lastName: "Peterson",
		email: "lily.peterson@edu.org",
		createdAt: "10-11-2024",
	},
	{
		firstName: "Matthew",
		lastName: "Diaz",
		email: "matt.diaz@yahoo.com",
		createdAt: "11-20-2024",
	},
	{
		firstName: "Grace",
		lastName: "Simmons",
		email: "grace.simmons@ymail.com",
		createdAt: "12-02-2024",
	},
	{
		firstName: "Jack",
		lastName: "Bell",
		email: "jack.bell@mail.co",
		createdAt: "01-10-2025",
	},
	{
		firstName: "Avery",
		lastName: "Murphy",
		email: "avery.murphy@gmail.com",
		createdAt: "02-14-2025",
	},
];

// init

let entries = 16;
let waitBeforeAppear = 0;

function buildTable(entries, data) {
	const table = document.getElementById("table");
	clearTable();
	let counter = 0;
	data.forEach((user) => {
		counter++;
		if (counter > entries) return;
		const tr = document.createElement("tr");
		Object.values(user).forEach((value) => {
			const td = document.createElement("td");
			td.innerText = value;

			tr.appendChild(td);
		});
		tr.classList.add("hidden");
		table.appendChild(tr);
	});

	const tableRows = document.querySelectorAll("#table tr");
	tableRows.forEach((row, index) => {
		setInterval(() => {
			row.classList.remove("hidden");
			row.classList.add("slide-up");
		}, waitBeforeAppear + index * 25);
	});
}

function clearTable() {
	const userRows = document.querySelectorAll("#table > tr");
	userRows.forEach((row) => row.remove());
}

buildTable(entries, mockData);

// functions

// entries

const entriesSelect = document.getElementById("entriesSelect");

entriesSelect.addEventListener("change", () => {
	entries = entriesSelect.value;
	buildTable(entries, mockData);
});

// sort by

const radios = document.querySelectorAll("input[name='radio']");

radios.forEach((radio) => {
	radio.addEventListener("change", () => {
		let data = mockData;
		const selectedRadio = document.querySelector(
			'input[name="radio"]:checked'
		);

		if (selectedRadio.id === "firstName") {
			data.sort((a, b) => a.firstName.localeCompare(b.firstName));
		}

		if (selectedRadio.id === "lastName") {
			data.sort((a, b) => a.lastName.localeCompare(b.lastName));
		}

		if (selectedRadio.id === "email") {
			data.sort((a, b) => a.email.localeCompare(b.email));
		}
		if (selectedRadio.id === "createdAt") {
			data.sort(
				(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
			);
		}
		buildTable(entries, data);
	});
});
