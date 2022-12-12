let isAtivo=false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)//"!" = negação "!!" = negação da negação 
console.log(!isAtivo)

console.log('verdadeiros')
console.log(!!3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('falsos')
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!undefined)
console.log(!!(isAtivo=false))


let nome = `joao`
console.log(nome||`desconhecido`)