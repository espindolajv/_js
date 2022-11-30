const peso1=1.0
const peso2=Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const prova1 =9.234
const prova2 =7.504

const total=prova1*peso1+prova2*peso2
const media=total/(peso1+peso2)

console.log(media.toFixed(2))//determinado o numero de numeros dps do ponto
console.log(media.toString(2))//colando em numero binario
console.log(typeof media)
console.log(typeof Number)//Number com n maisculo é uma função 

console.log(7/0)
console.log('10'/2)
console.log(0.7+0.1)