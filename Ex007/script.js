const palavras = [
    "amora", "calor", "Onibus", "Noite", "escova",
    "feliz", "gato", "homem", "ilha", "joia",
    "luz", "mato", "navio", "olho", "paz",
    "quadro", "roxo", "sol", "vento", "urso",
    "vaca", "agua", "bola", "casa", "dado",
    "elefante", "fogo", "bebida", "horta","inseto",
    "jogo", "nuvem", "mundo", "nuvem", "ocúlos",
    "pato", "quente", "rua", "sapo", "tigre",
    "uva", "vila", "abacaxi", "bola", "cachorro",
    "dente", "estrela", "feira", "girafa", "homem",
    "ilha", "jacare", "Barata", "livro", "mesa",
    "navio", "olho", "pao", "quadro", "rosa",
    "sabao", "taco", "urso", "vaca", "zebra",
    "abajur", "banco", "caderno", "dente", "escola",
    "festa", "gato", "higiene", "iguana", "janela",
    "ketchup", "lago", "Moto", "navio", "oculos",
    "pasta", "quadrado", "pedra", "sol", "tigre",
    "urso", "vassoura", "vela", "mala", "yoga",
    "zebra"
]

const alfabetoBrasileiro = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
]

let palavraJogo = ''
let tentativas = 0
let letrasCertas = 0
let erros = 0
let listLetrasChutadas = []

function iniciarNovoJogo(){
    let indexPalavra = Math.floor(Math.random() * palavras.length)
    const divLetras = document.getElementById('ltr')
    divLetras.innerHTML = ''
    const divLetrasTentList = document.getElementById('ltr-ch-lst')
    divLetrasTentList.innerHTML = ''
    const divTentativas = document.getElementById('tnt-ch')
    divTentativas.innerHTML = ''
    divTentativas.classList.add('trv')
    const divLetrasTentativa = document.getElementById('tcl-ltr')
    divLetrasTentativa.innerHTML = ''
    divLetrasTentativa.classList.add('trv')
    const imgForca = document.getElementById('img-f')
    imgForca.innerHTML = ''

    let pLenPalavra = document.createElement('p')
    pLenPalavra.id = 'ltr-tnt'
    pLenPalavra.textContent = `Palavra com ${palavras[indexPalavra].length} letras`
    
    palavraJogo = palavras[indexPalavra]
    
    for (let letra in palavraJogo){
        let divLetra = document.createElement('div')
        divLetra.classList.add('div-let-sp')
        
        divLetras.appendChild(divLetra)
    }

    for (let letraAlfabeto of alfabetoBrasileiro){
        let buttonLetra = document.createElement('button')
        buttonLetra.textContent = letraAlfabeto
        buttonLetra.classList.add('btn-ltr-ch')

        buttonLetra.onclick = ()=>{
            if (erros >= 6){
                alert(`Você perdeu, reinicie o jogo\nA palavra era ${palavraJogo}`)
                return;
            }
        
            const pTentativasCh = document.getElementById('txt-tnt')
            const letrasOcultasDiv = document.querySelectorAll('.div-let-sp')
            
            if (!pTentativasCh){
                alert('Inicie o jogo antes de tentar um chute.')
                return;
            }
            
            if(palavraJogo.length == letrasCertas){
                alert('Você já acertou a palavra! Reinicie o Jogo!')
                return;
            }
        
            if (!buttonLetra.textContent){
                alert('Informe uma letra!')
                return;
            }
        
            let letraInList = listLetrasChutadas.find((letra)=>{
                return letra.toLowerCase() == buttonLetra.textContent.toLowerCase()
            })
            
            if (letraInList != undefined){
                alert('A letra já foi chutada, informe outra.')
                return
            }
        
            let countIndex = 0
            let chuteErrado = true
            for (let letra of palavraJogo){
                if (letra.toLowerCase() == buttonLetra.textContent.toLowerCase()){
                    let pLetraChute = document.createElement('p')
                    pLetraChute.classList.add('ltr-ch-crt')
                    pLetraChute.textContent = buttonLetra.textContent
        
                    letrasOcultasDiv[countIndex].appendChild(pLetraChute)
                    letrasCertas++
                    chuteErrado = false
                }
                countIndex++
            }

            const divLetrasTent = document.getElementById('ltr-ch-lst')
            divLetrasTent.classList.add('trv')
            if (tentativas == 0){
                let divTextLetraTen = document.createElement('div')
                let pTextLetraTent = document.createElement('p')
                pTextLetraTent.id = 'txt-ltr-ch'
                pTextLetraTent.textContent = 'Letras chutadas: '
                divTextLetraTen.appendChild(pTextLetraTent)
                divLetrasTent.appendChild(divTextLetraTen)
            }

            tentativas++
            const pTentativas = document.getElementById('txt-tnt')
            pTentativas.textContent = `Tentativas: ${tentativas}`
            
            
            if (chuteErrado){
                erros++
                let imgErroForca = document.getElementById(`img-forca`)
                imgErroForca.src = `./img/img${erros+1}.png`
                if (erros>=6) {
                    alert(`Você perdeu, reinicie o jogo\nA palavra era ${palavraJogo}`)
                    return
                }
            }
            
        
            if(palavraJogo.length == letrasCertas){
                alert('Você acertou a palavra! Bom trabalho')
            }
        
            
            let divLetraTent = document.createElement('div')
            divLetraTent.classList.add('ltr-ch-div')
            
            let pLetraTent = document.createElement('p')
            pLetraTent.classList.add('ltr-ch-p')
            pLetraTent.textContent = buttonLetra.textContent
        
            divLetraTent.appendChild(pLetraTent)
            divLetrasTent.appendChild(divLetraTent)
        
            listLetrasChutadas.push(buttonLetra.textContent)
        }
        divLetrasTentativa.appendChild(buttonLetra)
    }
    
    listLetrasChutadas = []
    tentativas = 0
    letrasCertas = 0
    erros = 0
    
    let img = document.createElement('img')
    img.src = `./img/img1.png`
    img.alt = `forca`
    img.id = `img-forca`
    imgForca.appendChild(img)

    let pTentativas = document.createElement('p')
    pTentativas.id = 'txt-tnt'
    pTentativas.textContent = `Tentativas: ${tentativas}`
    divTentativas.appendChild(pTentativas)

    // let teclado = document.getElementById('len-tcl')
    // teclado.classList.add('trv')


}