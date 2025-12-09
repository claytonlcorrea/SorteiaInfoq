function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)
    let resultado = document.getElementById('resultado')
    let reiniciarBtn = document.getElementById('btn-reiniciar')
    let sortearBtn = document.getElementById('btn-sortear')
    let intervalo = ate - de

    let listaNumeros = []

    if(sortearBtn.classList.contains ('container__botao')){
        if(ate < de){
            alert('Este campo aceita apenas números!\nNúmero inicial não pode ser maior que o número final! ')
        }else if(intervalo < quantidade){
            alert('Qnt de números não pode ser maior que o intervalo entre Número inicial e número final!')
        }else{
            for(let i=0; i < quantidade; i++){
                let numeroAleatorio = obterNumerosAleatorios(de, ate)
                
                while(listaNumeros.includes(numeroAleatorio)){
                    numeroAleatorio = obterNumerosAleatorios(de, ate)
                }
                listaNumeros.push(numeroAleatorio)
                
            }
            listaNumeros.sort()
            listaNumeros.sort((a, b) => a - b);
            const bolasHTML = listaNumeros.map(num => `<span class="bolinha">${num}</span>`).join('');
            resultado.innerHTML = `
                <div class="texto__paragrafo">Números sorteados:</div>
                <div class="bolinhas-container">${bolasHTML}</div>
            `;
    
            if(reiniciarBtn.classList.contains('container__botao-desabilitado')){
                reiniciarBtn.classList.remove('container__botao-desabilitado')
                reiniciarBtn.classList.add('container__botao')
        
            }else{
                reiniciarBtn.classList.remove('container__botao')
                reiniciarBtn.classList.add('container__botao-desabilitado')
            }
        }  
    }
}

function obterNumerosAleatorios(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    let reiniciarBtn = document.getElementById('btn-reiniciar')
    let resultado = document.getElementById('resultado')
    let sortearBtn = document.getElementById('btn-sortear')

    if(reiniciarBtn.classList.contains ('container__botao')){
        document.getElementById('quantidade').value=''
        document.getElementById('de').value=''
        document.getElementById('ate').value=''
        
        if(reiniciarBtn.classList.contains('container__botao-desabilitado')){
            reiniciarBtn.classList.remove('container__botao-desabilitado')
            reiniciarBtn.classList.add('container__botao')
            
        }else{
            reiniciarBtn.classList.remove('container__botao')
            reiniciarBtn.classList.add('container__botao-desabilitado')
        }

        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    }
}
