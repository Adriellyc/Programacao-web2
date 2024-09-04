function transformarEmJSON() {
    const matricula = document.getElementById("matricula").Value;
    const nome = document.getElementById("nome").Value;
    const idade = document.getElementById("idade").Value;
    const cpf = document.getElementById("cpf").Value;

 if (!matricula || !nome || !idade || !cpf) {
alert("todos os campos devem ser preenchidos.");
return;

  }

if (!Number.isInteger(Number(idade))){
 alert("A idade deve ser um número inteiro.");
 return;
 }
const aluno = {
    matricula: matricula,
    nome: nome,
    idade: parseInt(idade),
    cpf : cpf 
};

document.getElementById("resultado").textContent = JSON.stringify(aluno,null,4);

}

    