const descEl = document.getElementById("desc");
const guessEl = document.getElementById("guess");
const numbersEl = document.getElementById("numbers");
const buttonEl = document.querySelector("button");

const numbers = [7, 2, 9, 1, 5, 3]; // just hardcoding for now, but can we anything really

function renderNumbers() {
    let html = "";
    for (const number of numbers) {
        html += `<li>${number}</li>`;
    }
    numbersEl.innerHTML = html;
}

function renderInputs() {
    let html = "";
    for (let i = 0; i < numbers.length; i++) {
        html += `<li><input type="number" inputmode="numeric" /></li>`;
    }
    guessEl.innerHTML = html;
}

function getUserGuess() {
    const inputs = guessEl.querySelectorAll("input");
    const values = [];

    for (const input of inputs) {
        const value = parseInt(input.value, 10);
        values.push(Number.isNaN(value) ? null : value);
    }
    return values;
}

function isCorrect(guess) {
    if (guess.includes(null)) {
        return false;
    }

    const expected = [...numbers].sort((a, b) => a - b);

    if (guess.length !== expected.length) {
        return false;
    }

    for (let i = 0; i < expected.length; i++) {
        if (guess[i] !== expected[i]) return false;
    }

    return true;
}

function makeUI() {
    renderNumbers();
    renderInputs();
    descEl.textContent = "Sort the numbers with ascending order";
}

buttonEl.addEventListener("click", () => {
    const guess = getUserGuess();
    if (isCorrect(guess)) {
        descEl.textContent = "Nicely done!";
    } else {
        descEl.textContent = "Nope, you suck!";
    }
});

makeUI();
