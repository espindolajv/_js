//novo recurso do ES2015


const  pessoa={
    nome:'joao',
    idade: 19,
    endereco:{
        logradouro:'CSB 10',
        numero:'6/7'
    }

}
console.log(pessoa)
const{nome, idade}= pessoa
console.log(nome,idade)

const{nome:n, idade:i}=pessoa
console.log(n,i)

const{sobrenome, humor=true}=pessoa
console.log(sobrenome, humor)

const{endereco:{logradouro, numero, cep}}=pessoa
console.log(logradouro, numero, cep)