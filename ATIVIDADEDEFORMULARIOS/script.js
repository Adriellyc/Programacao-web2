function gravar(){
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let email= document.getElementById("email").value;
    let telefone= document.getElementById("telefone").value;

    localStorage.setItem("nome", nome");
    localStorage.setItem("endereco", endereco");
    localStorage.setItem("email", email");
    localStorage.setItem("telefone", telefone"); 

    alert("Dados enviados com sucesso!");   


    

}

    