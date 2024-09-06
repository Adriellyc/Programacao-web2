function transformarEmJSON() {
    
    const matricula = document.getElementById('mat').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const cpf = document.getElementById('cpf').value.trim();

    if (!matricula || !nome || !idade || !cpf) {
        alert('Todos os campos devem ser preenchidos.');
        return;
    }

    
    const idadeNumero = parseInt(idade, 10);
    if (isNaN(idadeNumero) || idadeNumero <= 0) {
        alert('A idade deve ser um valor inteiro positivo.');
        return;
    }

    
    const aluno = {
        matricula,
        nome,
        idade: idadeNumero,
        cpf
    };

    document.getElementById('jsonOutput').textContent = JSON.stringify(aluno, null, 4);
}