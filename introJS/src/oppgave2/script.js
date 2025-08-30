const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 },
];

// TODO: Hent HTML #id med getElementById
const container = document.getElementById("users");
const inputField = document.getElementById("name");

const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const renderUsers = (userList) => {
    container.innerHTML = "";
    userList.forEach((user) => {
        const liElement = document.createElement("li");
        const liContent = `${user.name} (${user.age})`;
        liElement.textContent = liContent;
        container.appendChild(liElement);
    });

    if (container.childNodes.length === 0) {
        const infoElement = document.createElement("span");
        infoElement.textContent = "No results";
        container.appendChild(infoElement);
    }
};
renderUsers(users);

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const updateListBasedOnName = (name) => {
    // here we could have searched or users which have just some letters from the params
    // instead of trying to get a perfect match
    const foundUser = users.find((user) => user.name === name);
    renderUsers(foundUser ? [foundUser] : []);
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const updateListBasedOnAge = (minAge) => {
    const updatedUserList = users.filter((user) => user.age >= minAge);
    renderUsers(updatedUserList);
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const value = inputField.value;
        if (!value) {
            renderUsers(users);
        } else {
            updateListBasedOnName(value);
        }
    }
});

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener("click", () => {
    if (ageInput.value) {
        updateListBasedOnAge(Number(ageInput.value));
    } else {
        renderUsers(users);
    }
});
