// Oppgave 1
const staticSentence =
    "Coders sip coffee, debug nightmares, and pray their fragile, spaghetti-infused masterpiece deploys successfully.";
let longestWord = "";

staticSentence.split(" ").forEach((word) => {
    if (word.length > longestWord.length) longestWord = word;
});

console.log(longestWord);
// its worth noting that we include commas, we could have cleaned up the array first before doing the iterations and comparisons

// Oppgave 2
let users = [
    { id: 0, name: "Hello", age: 42 },
    { id: 1, name: "World", age: 29 },
    { id: 2, name: "Java", age: 30 },
    { id: 3, name: "Python", age: 45 },
    { id: 4, name: "TypeScript", age: 35 },
    { id: 5, name: "JavaScript", age: 25 },
];

// get the element we going to put our users in
const userElement = document.getElementById("change");

// remove the imposter from the users list
users = users.filter((user) => user.name !== "Java");

// let everyone know the best programming language ever exists is inside the list
let importantInfo = "";
const tsUser = users.find((user) => user.name === "TypeScript");
if (tsUser) {
    importantInfo += `Best language ever to exists is among our users! Bow down to ${tsUser.name}`;
}

// display function
const displayUserList = (usersList) => {
    let newText = "";

    if (importantInfo) {
        newText += importantInfo + "\n\n";
    }

    for (let user of usersList) {
        if (user.age <= 40) {
            newText += `Name: ${user.name}\nAge: ${user.age}\n\n`;
        }
    }

    userElement.textContent = newText;
};

displayUserList(users);

// extra utility functions
const findUserByName = (name) => {
    const match = users.find(
        (u) => u.name.toLowerCase() === name.toLowerCase()
    );
    return match
        ? `Found: ${match.name} (${match.age})`
        : `No user named "${name}"`;
};

const filterByMaxAge = (maxAge) => {
    let text = "";

    if (importantInfo) {
        text += importantInfo + "\n\n";
    }

    text += `Users age <= ${maxAge}\n`;

    for (const u of users) {
        if (u.age <= maxAge) {
            text += `- ${u.name} (${u.age})\n`;
        }
    }

    userElement.textContent = text;
};

// Oppgave 3

// Oppgave 4
const myList = ["item one", "item two", "item three"];
// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
