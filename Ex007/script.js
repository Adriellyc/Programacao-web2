function createAlphabetButtons() {
    const container = document.getElementById('letters-container');
    container.innerHTML = ''; // Limpa o contêiner

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); // Gera letras de A a Z
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => alert(`Você clicou na letra: ${letter}`));
        container.appendChild(button);
    }
}
createAlphabetButtons(); 