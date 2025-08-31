let mistakeCount = 0;
let currPosition = 0;
let wordToWriteCount = 5; // lets say our game maeks u write 5 random words ASAP
const words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "car",
    "house",
    "river",
    "cloud",
    "computer",
    "music",
    "guitar",
    "forest",
    "mountain",
    "ocean",
    "cat",
    "dog",
    "bird",
    "sun",
    "moon",
    "coffee",
    "book",
    "phone",
    "light",
    "flower",
];

const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};

let currentWord = getRandomWord();

const wordElement = document.getElementById("word");
const lastWrittenLetterElement = document.getElementsByName("letter");
const mistakesCounterElement = document.getElementById("wrongs");
const startGameBtn = document.getElementById("start-btn");

const displayWord = () => {
    if (wordToWriteCount > 0) {
        const left = currentWord.slice(0, currPosition);
        const current = currentWord[currPosition] || "";
        const right = currentWord.slice(currPosition + 1);
        wordElement.textContent = `${left}[${current}]${right}`;
    } else {
        wordElement.textContent = "No more words. Press F5 to play again.";
    }
};

const updateUI = () => {
    mistakesCounterElement.textContent = `Mistakes: ${mistakeCount}`;
    lastWrittenLetterElement.textContent =
        lastWrittenLetterElement.textContent ||
        "The letter you typed will appear here";
    displayWord();
};

const switchWord = () => {
    wordToWriteCount -= 1;
    if (wordToWriteCount <= 0) {
        displayWord();
        window.removeEventListener("keyup", onKeyUp);
        startGameBtn.disabled = false;
        return;
    }
    currPosition = 0;
    currentWord = getRandomWord();
    updateUI();
};

const checkLetter = (letter) => {
    const expectedIndex = currentWord.indexOf(letter, currPosition);
    const isCorrect = expectedIndex === currPosition;

    if (isCorrect) {
        currPosition += 1;
        lastWrittenLetterElement.textContent = `You typed: ${letter} `;
    } else {
        mistakeCount += 1;
        lastWrittenLetterElement.textContent = `You typed: ${letter} `;
    }

    updateUI();
};

const isWordFinished = () => currPosition === currentWord.length;

const onKeyUp = (e) => {
    if (!e.key || e.key.length !== 1) return;
    const letter = e.key.toLowerCase();
    checkLetter(letter);
    if (isWordFinished()) {
        switchWord();
    }
};

startGameBtn.addEventListener("click", () => {
    mistakeCount = 0;
    currPosition = 0;
    wordToWriteCount = 5;
    currentWord = getRandomWord();
    startGameBtn.disabled = true;
    lastWrittenLetterElement.textContent =
        "The letter you typed will appear here";
    updateUI();
    window.addEventListener("keyup", onKeyUp);
});

updateUI();
