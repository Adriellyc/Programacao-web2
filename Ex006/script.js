document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('separateButton');
    const resultContainer = document.getElementById('resultContainer');

    button.addEventListener('click', () => {
        // Limpa o conteúdo anterior
        resultContainer.innerHTML = '';

        // Obtém a palavra digitada
        const input = document.getElementById('inputWord').value;

        // Separa a palavra em letras e exibe cada uma em uma <div>
        for (let letter of input) {
            const letterDiv = document.createElement('div');
            letterDiv.textContent = letter;
            letterDiv.style.fontSize = '2em'; // Tamanho de fonte maior
            letterDiv.style.border = '1px solid black'; // Borda simples
            letterDiv.style.display = 'inline-block'; // Para exibir as letras lado a lado
            letterDiv.style.padding = '5px'; // Espaçamento interno
            letterDiv.style.margin = '2px'; // Espaçamento entre letras
            resultContainer.appendChild(letterDiv);
        }
    });
});



   




