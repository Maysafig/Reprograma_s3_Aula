//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

const cor = 'amarelo'

if (cor == 'vermelho'){
    console.log('pare')
}else if (cor == 'amarelo'){
    console.log('atenção')
}else if (cor == 'verde') {
    console.log('siga')
}else {
    console.log('não tem essa cor')
}

//outro exemplo

function fluxoDeTransito(farol){
    if(farol == 'verde'){
        return 'Siga'
    }else if (farol == 'amarelo'){
        return 'Atenção'
    }else if (farol == 'vermelho'){
        return 'Pare'
    }
}

console.log(fluxoDeTransito('vermelho'))

//outro exemplo 

function semaforoCores(semaforo){
    switch(semaforo){
        case 'verde':
            return 'Siga'
            break    
        case 'amarelo':
            return 'atenção'
            break
        case 'vermelho':
            return 'pare'
            break
        default:
            return 'cor inexistente'
    }
}

console.log(semaforoCores('verde'))