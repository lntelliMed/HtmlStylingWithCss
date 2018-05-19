const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
// const deleteButtonElements = document.querySelectorAll(".delete");

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const deleteButton = document.createElement("button");
	const deleteText = document.createTextNode("Delete");
	deleteButton.classList.add("delete");
	deleteButton.appendChild(deleteText);
	li.appendChild(document.createTextNode(input.value));
	span.appendChild(li);
	span.appendChild(deleteButton);
	ul.appendChild(span);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (let i = 0; i < liElements.length; i++) {
	liElements[i].addEventListener('click', () => {
		liElements[i].classList.toggle("done");
	});
}

// for (let i = 0; i < deleteButtonElements.length; i++) {
// 	deleteButtonElements[i].addEventListener('click', () => {
// 		deleteButtonElements[i].parentElement.remove();
// 	});
// }

document.querySelector('body').addEventListener('click', (event) => {
	if (event.target.className.toLowerCase() === 'delete') {
		event.target.parentElement.remove()
	}
});
