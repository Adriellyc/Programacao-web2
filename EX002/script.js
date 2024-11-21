const menorvalor = document.getElementById('menorvalor')
const maiorvalor = document.getElementById('maiorvalor')
const btnsorteio = document.getElementById('sorteio')
const numSorteado = document.getElementById('numSorteado')

btnsorteio.onclick = ()=>{

    if (parseInt(maiorvalor.value) < parseInt(menorvalor.value)){
        alert('O segundo valor não pode ser menor que o primeiro')
        return;
    }   
    let sorteadoNum = Math.trunc((Math.random() * (parseInt(maiorvalor.value) - parseInt(menorvalor.value) +1) + parseInt(menorvalor.value)))
    
    numSorteado.value = sorteadoNum
}