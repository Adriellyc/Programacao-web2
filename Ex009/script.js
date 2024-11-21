let senha = "";
let tentativas = [];
let jogoGanho = false;

function novoJogo() {
    // Gera uma senha única com 4 dígitos
    do {
        senha = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    } while (new Set(senha).size !== 4);

    tentativas = [];
    jogoGanho = false;
    document.getElementById("lista-tentativas").innerHTML = "";
    alert("Novo jogo iniciado! Adivinhe a senha.");
}

function chutar() {
    if (senha === "") {
        alert("Inicie um novo jogo antes de tentar!");
        return;
    }

    if (jogoGanho) {
        alert("Você já ganhou! Inicie um novo jogo para continuar.");
        return;
    }

    const tentativa = document.getElementById("tentativa").value;

    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || isNaN(Number(tentativa))) {
        alert("Digite um número válido com 4 dígitos únicos!");
        return;
    }

    let bulls = 0, cows = 0;

    for (let i = 0; i < 4; i++) {
        if (tentativa[i] === senha[i]) {
            bulls++;
        } else if (senha.includes(tentativa[i])) {
            cows++;
        }
    }

    if (bulls === 4) {
        jogoGanho = true;
        alert(`Parabéns! Você acertou a senha: ${senha}`);
    }

    tentativas.unshift({ tentativa, resultado: `${bulls}B ${cows}C` });
    atualizarTentativas();
}

function atualizarTentativas() {
    const lista = document.getElementById("lista-tentativas");
    lista.innerHTML = tentativas.map(
        (t, i) => `<p><strong>${i + 1}:</strong> ${t.tentativa} - ${t.resultado}</p>`
    ).join('');
}

function exibirSenha() {
    if (senha) {
        alert(`A senha é: ${senha}`);
    } else {
        alert("Inicie um novo jogo primeiro!");
    }
}
