const imprimirnota=function(nota){
    if (nota>=7){
        console.log('Aprovado, Nota =',nota)
    }else{
        console.log('Reprovado, Nota =',nota)
    }
}

imprimirnota(10)
imprimirnota(5)
imprimirnota('Epa') //cuidado com aa linguagem fracamente tipada