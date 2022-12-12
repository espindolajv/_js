const valores=[7.3,8.9,3.4,5.6]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10]=10
console.log(valores)
console.log(valores.length)

valores.push({id:3},false, null,'teste')
console.log(valores)