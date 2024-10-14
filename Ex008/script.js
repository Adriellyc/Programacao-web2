const olDespesas = document.getElementById("olDespesas");
const inputDescricao = document.getElementById("inputDescricao");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");

const baseURL = "https://parseapi.back4app.com/classes/Despesas";
const headers = {
    "X-Parse-Application-Id: tRi2St3cQCnb3QqhkfKqU6I3iXX1bhqYgU6WhMix",
   "X-Parse-REST-API-Key: 6hILecvz59cOVX9w5HFEYJmVv7KThwW9oIM8PkzK"
};
const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

const createList = (data) => {
    olDespesas.innerHTML = "";
    const despesas = data.results;
    let total = 0;

    despesas.forEach((despesa) => {
        const li = document.createElement("li");
        li.textContent = `${despesa.descricao}: R$ ${despesa.valor.toFixed(2)}`;

        const btnAtualizar = document.createElement("button");
        btnAtualizar.innerHTML = "Atualizar";
        btnAtualizar.onclick = () => handleBtAtualizarClick(despesa);
        li.appendChild(btnAtualizar);

        const btnDeletar = document.createElement("button");
        btnDeletar.innerHTML = "Deletar";
        btnDeletar.onclick = () => handleBtRemoverClick(btnDeletar, despesa);
        li.appendChild(btnDeletar);

        olDespesas.appendChild(li);
        total += despesa.valor;
    });

    document.getElementById("totalDespesas").textContent = total.toFixed(2);
};

const handleBtRemoverClick = async (bt, despesa) => {
    try {
        bt.disabled = true;
        const response = await fetch(`${baseURL}/${despesa.objectId}`, {
            method: "DELETE",
            headers: headers,
        });
        bt.disabled = false;
        if (!response.ok) {
            alert("Erro ao acessar o servidor: " + response.status);
            throw new Error("Erro encontrado: " + response.status);
        }
        getDespesas();
    } catch (error) {
        console.log(error);
    }
};

const getDespesas = async () => {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            headers: headers,
        });
        if (!response.ok) {
            alert("Erro ao acessar o servidor: " + response.status);
            throw new Error("Erro encontrado: " + response.status);
        }
        const data = await response.json();
        createList(data);
    } catch (error) {
        console.log(error);
    }
};

const handleBtAdicionarClick = async () => {
    const descricao = inputDescricao.value.trim();
    const valor = parseFloat(inputValor.value);

    if (!descricao || isNaN(valor)) {
        alert("Necessário adicionar uma descrição e um valor para criar a despesa!");
        inputDescricao.focus();
        return;
    }

    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: headersJson,
            body: JSON.stringify({ descricao, valor }),
        });
        if (!response.ok) {
            alert("Erro ao acessar o servidor: " + response.status);
            throw new Error("Erro encontrado: " + response.status);
        }
        inputDescricao.value = "";
        inputValor.value = "";
        inputDescricao.focus();
        getDespesas();
    } catch (error) {
        console.log(error);
    }
};

const handleBtAtualizarClick = async (despesa) => {
    const novoValor = prompt("Informe o novo valor:", despesa.valor);

    if (novoValor !== null) {
        try {
            const response = await fetch(`${baseURL}/${despesa.objectId}`, {
                method: "PUT",
                headers: headersJson,
                body: JSON.stringify({ valor: parseFloat(novoValor) }),
            });
            if (!response.ok) {
                alert("Erro ao acessar o servidor: " + response.status);
                throw new Error("Erro encontrado: " + response.status);
            }
            getDespesas();
        } catch (error) {
            console.log(error);
        }
    }
};

// Carregar despesas ao iniciar
window.onload = getDespesas;
btAdicionar.onclick = handleBtAdicionarClick;
