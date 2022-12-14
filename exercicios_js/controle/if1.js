function boanoticia(nota){
    if(nota>=7){
        console.log('Aprovado com ',nota)
    }
}

boanoticia(8.1)
boanoticia(6)

function seforverdade(valor){
    if(valor){
        console.log('É verdade...', valor)

    }
}

seforverdade()
seforverdade(null)
seforverdade(undefined)
seforverdade(NaN)
seforverdade('')
seforverdade(0)
seforverdade(-1)
seforverdade(1)
seforverdade([])
seforverdade([1,2])
seforverdade({})