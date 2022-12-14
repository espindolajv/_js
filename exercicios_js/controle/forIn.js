const notas=[1,4,6,3,1,7,8,4]
for (let i in notas){
    console.log(i,notas[i])
}

const pessoa={
    nome:  'Joao',
    sobrenome: 'Espindola',
    idade: 19,
    peso: 72,
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}