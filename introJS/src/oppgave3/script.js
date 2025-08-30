// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
let mistakeCount = 0;
let currPosition = 0;
let wordToWriteCount = 5; // lets say our game maeks u write 5 random words ASAP
let currentWord = getRandomWord();

// TODO: Lag en liste med ulike ord
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

// TODO: Hent ut HTML #ider og knappen
const wordElement = document.getElementById("word");
const lastWrittenLetterElement = document.getElementsByName("letter");
const mistakesCounterElement = document.getElementById("wrongs");
const startGameBtn = document.getElementById("start-btn");

// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const displayWord = () => {
    wordElement.textContent = currentWord;
};

// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
