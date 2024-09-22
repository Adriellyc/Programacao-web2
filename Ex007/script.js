const words = ['javascript', 'programacao', 'desenvolvimento', 'html', 'css'];
let selectedWord = '';
let displayWord = [];
let wrongAttempts = 0;

const maxAttempts = 6;
const hangmanParts = [
    'O', // Cabeça
    '|', // Corpo
    '/\\', // Braços
    '/\\', // Pernas
    '  '  // Base
];

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    
    document.getElementById('reset').addEventListener('click', initializeGame);
});

function initializeGame() {
    wrongAttempts = 0;
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord = Array(selectedWord.length).fill('_');
    
    updateWordDisplay();
    updateHangmanDisplay();
    createButtons();
}

function updateWordDisplay() {
    document.getElementById('word').textContent = displayWord.join(' ');
}

function updateHangmanDisplay() {
    const hangman = document.getElementById('hangman');
    hangman.innerHTML = hangmanParts.slice(0, wrongAttempts + 1).join('<br>');
}

function createButtons() {
    const buttonsDiv = document.getElementById('buttons');
    buttonsDiv.innerHTML = '';
    
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => handleGuess(letter.toLowerCase()));
        buttonsDiv.appendChild(button);
    }
}

function handleGuess(letter) {
    const isCorrect = selectedWord.includes(letter);
    
    if (isCorrect) {
        selectedWord.split('').forEach((char, index) => {
            if (char === letter) {
                displayWord[index] = letter;
            }
        });
        
        if (!displayWord.includes('_')) {
            alert('Você venceu!');
            return;
        }
    } else {
        wrongAttempts++;
        if (wrongAttempts >= maxAttempts) {
            alert('Você perdeu! A palavra era ' + selectedWord);
            return;
        }
    }
    
    updateWordDisplay();
    updateHangmanDisplay();
}
