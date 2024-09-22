const words = [
    "amora", "calor", "onibus", "noite", "escova",
    "feliz", "gato", "homem", "ilha", "joia",
    "luz", "mato", "navio", "olho", "paz",
    "quadro", "roxo", "sol", "vento", "urso",
    "vaca", "agua", "bola", "casa", "dado",
    "elefante", "fogo", "bebida", "horta", "inseto",
    "jogo", "nuvem", "mundo", "oculos", "pato",
    "quente", "rua", "sapo", "tigre", "uva",
    "vila", "abacaxi", "cachorro", "dente", "estrela",
    "feira", "girafa", "jacare", "barata", "livro",
    "mesa", "pao", "rosa", "sabao", "taco",
    "vassoura", "vela", "mala", "yoga", "zebra",
    "abajur", "banco", "caderno", "escola", "festa",
    "higiene", "iguana", "janela", "ketchup", "lago",
    "moto", "pasta", "quadrado", "pedra", "sol",
    "tigre", "urso", "zebra"
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

let currentWord = '';
let attempts = 0;
let correctLettersCount = 0;
let errors = 0;
let guessedLetters = [];

function startNewGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].toLowerCase();
    resetGame();
    renderGame();
}

function resetGame() {
    attempts = 0;
    correctLettersCount = 0;
    errors = 0;
    guessedLetters = [];
}

function renderGame() {
    const wordDisplay = document.getElementById('word-display');
    const hangmanImage = document.getElementById('hangman-image');
    const letterButtons = document.getElementById('letter-buttons');
    const letterList = document.getElementById('letter-list');
    const attemptCount = document.getElementById('attempt-count');

    wordDisplay.innerHTML = '';
    hangmanImage.innerHTML = '<img src="./img/img1.png" alt="forca" id="img-forca">';
    letterButtons.innerHTML = '';
    letterList.innerHTML = '';
    attemptCount.textContent = `Tentativas: ${attempts}`;

    currentWord.split('').forEach(() => {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter-placeholder');
        wordDisplay.appendChild(letterDiv);
    });

    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('letter-button');
        button.onclick = () => handleGuess(letter);
        letterButtons.appendChild(button);
    });
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter.toLowerCase())) {
        alert('A letra já foi chutada, informe outra.');
        return;
    }

    guessedLetters.push(letter.toLowerCase());
    attempts++;

    const letterList = document.getElementById('letter-list');
    const attemptCount = document.getElementById('attempt-count');
    attemptCount.textContent = `Tentativas: ${attempts}`;

    const wordDisplay = document.getElementById('word-display');
    let isWrongGuess = true;

    currentWord.split('').forEach((wordLetter, index) => {
        if (wordLetter === letter.toLowerCase()) {
            const letterDiv = wordDisplay.children[index];
            letterDiv.textContent = letter;
            correctLettersCount++;
            isWrongGuess = false;
        }
    });

    if (isWrongGuess) {
        errors++;
        document.getElementById('img-forca').src = `./img/img${errors + 1}.png`;
        if (errors >= 6) {
            alert(`Você perdeu, reinicie o jogo\nA palavra era ${currentWord}`);
            return;
        }
    }

    const letterListDiv = document.createElement('div');
    letterListDiv.textContent = letter;
    letterList.appendChild(letterListDiv);

    if (correctLettersCount === currentWord.length) {
        alert('Você acertou a palavra! Bom trabalho');
    }
}
