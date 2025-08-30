// Oppgave 1
// define a function to get and remove content upon a click
const handleTextRemove = () => {
    const el = document.getElementById("remove");
    el?.remove();
};

// add event listent listener, and listen for a click
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", handleTextRemove);

// Oppgave 2
let counter = 1;
const handleChangeText = () => {
    const textToChange = document.getElementById("change");
    textToChange.textContent = counter.toString();
    counter++;
};

const changeBtn = document
    .getElementById("change-btn")
    .addEventListener("click", handleChangeText);

// Oppgave 3
const pinputField = document.getElementById("input-text");
const inputField = document
    .getElementById("input")
    .addEventListener("input", (e) => {
        pinputField.textContent = e.target.value;
    });

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const handleListChange = () => {
    const listContainerForItems = document.getElementById("ul");

    // clean list first
    ul.textContent = "";

    for (let item of myList) {
        const liElement = document.createElement("li");
        liElement.textContent = item;
        listContainerForItems.appendChild(liElement);
    }
};

document
    .getElementById("write-list")
    .addEventListener("click", handleListChange);

// Oppgave 5
const elementContainer = document.getElementById("placeholder");
const createElementBtn = document
    .getElementById("create")
    .addEventListener("click", () => {
        const elementType = document.getElementById("select").value;

        const newElement = document.createElement(`${elementType}`);
        newElement.textContent = document.getElementById("text").value;

        elementContainer.append(newElement);
    });

// Oppgave 6
const listWithManyLi = document.getElementById("list");
const buttonWhichRemovesLi = document
    .getElementById("remove-li")
    .addEventListener("click", () => {
        // check if there are any children at all
        if (listWithManyLi.firstElementChild) {
            listWithManyLi.removeChild(listWithManyLi.firstElementChild);
        }
    });

// Oppgave 7
const inputName = document.getElementById("name");
const redButton = document.getElementById("order");

inputName.addEventListener("input", () => {
    if (inputName.value.length > 4) {
        redButton.setAttribute("disabled", true);
        redButton.style = "border: red solid 2px;";
    } else {
        redButton.removeAttribute("disabled");
        redButton.style.border = "";
    }
});

// Oppgave 8
const childrenList = document.getElementsByClassName("children")[0];

document.getElementById("color").addEventListener("click", () => {
    const kids = childrenList.children;

    for (let i = 0; i < kids.length; i++) {
        // quick helpr
        const isOddPosition = i % 2 === 0;

        kids[i].style.border = isOddPosition
            ? "2px solid green"
            : "2px solid pink";
    }
});
