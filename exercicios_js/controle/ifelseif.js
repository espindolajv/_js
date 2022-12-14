Number.prototype.entre=function(inicio,fim){
    return this>=inicio &&this<= fim
}

const imprimirResultado=function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4,6.99)){
        console.log('Recupereçao')
    }else if(nota.entre(0,3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)

function teste1(nota){
    if(nota>7 && nota<10){
        console.log('teste')
    }else{
        console.log('erro')
    }
}

teste1(8)
teste1(2)