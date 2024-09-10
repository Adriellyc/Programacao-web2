const valores = [];

function adicionarValor() {
    const input = document.getElementById('numberInput');
    const valor = parseFloat(input.value);

    if (!isNaN(valor)) {
        valores.push(valor);
        atualizarExibicao();
        input.value = '';  // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um número válido.');
    }
}

function atualizarExibicao() {
    const valoresElement = document.getElementById('valores');
    const mediaElement = document.getElementById('media');

    valoresElement.textContent = valores.join(', ');

    const soma = valores.reduce((acc, curr) => acc + curr, 0);
    const media = valores.length > 0 ? soma / valores.length : 0;
    mediaElement.textContent = media.toFixed(2);
}