// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//assign button when guestFull is fulfilled
const assignButton = document.querySelector(".assign ");
//assign items to guests when guestFull fullfilled
const assignedItems = document.querySelector(".assign");

//challenge 1 lesson 9 in seperate fork but is first 1/2 of this script

//challenge 2 lesson 9
////Select Assigned Items & Build an Array
////Select Elements & Loop Through the Array
////Add an Event Listener & Update PotluckItems Array
addGuestButton.addEventListener("click", function () {
	const guest = guestInput.value;
	// console.log(guest);
	if (guest !== "") {
		addToList(guest);
		updateGuestCount();
		clearInput();
	}
});

const clearInput = function () {
	guestInput.value = "";
};
const addToList = function (guest) {
	const listItem = document.createElement("li");
	listItem.innerText = guest;
	guestList.append(listItem);
};

const updateGuestCount = function () {
	const guests = document.querySelectorAll(".guest-list  li");
	guestCount.innerText = guests.length;

	if (guests.length === 8) {
		addGuestButton.classList.add("hide");
		guestInput.classList.add("hide");
		guestInputLabel.classList.add("hide");
		guestFull.classList.remove("hide");
	}
};

const assignItems = function () {
	const potluckItems = [
		"fruit salad",
		"mashed potatoes",
		"steak",
		"corn salad",
		"macaroni",
		"dog liver",
		"ragu",
		"lasagna",
		"grilled veggies",
		"grilled cheese",
		"cupcakes",
		"pancakes"
	];

	const allGuests = document.querySelectorAll(".guest-list li");

	for (let guest of allGuests) {
		let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
		let randomPotluckItem = potluckItems[randomPotluckIndex];

		let listItem = document.createElement("li");
		listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
		assignedItems.append(listItem);

		potluckItems.splice(randomPotluckIndex, 1);
	}
};

assignButton.addEventListener("click", function () {
	assignItems();
	assignButton.disable = true;
});
