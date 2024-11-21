const btnadd = document.getElementById('add')
const sum = document.getElementById('sum')
const number = document.getElementById('number')
const preMedia = document.getElementById('media')
const preNumDig = document.getElementById('numdig')
const btnClear = document.getElementById('clear')

const listNumDigitados = []
btnadd.onclick = ()=>{
    if (isNaN(parseInt(number.value))){
        alert("Valor inválido!")
        return;
    }

    if (parseInt(number.value)<0){
        alert('informe apenas valores positivos')
        return;
    }

    listNumDigitados.push(number.value) 
    let soma = parseInt(sum.value) + parseInt(number.value)
    let media = soma/listNumDigitados.length

    preNumDig.innerHTML = `Números digitados: ${listNumDigitados}`
    preMedia.innerHTML = `Média: ${media}`
    sum.value = soma
    number.value = null
    number.focus();
}

btnClear.onclick = ()=>{
    sum.value = 0
    preMedia.innerHTML = 'Média: '
    preNumDig.innerHTML = 'Números digitados: '
}