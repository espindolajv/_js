function compras(trab1, trab2){
    const comprarsorv=trab1 || trab2 //  operador ou
    const comprartv50=trab1 && trab2 // operador e
    const comprartv32=trab1!=trab2
    const mantersaudavel= !comprarsorv //operador unario
    
    return{comprarsorv, comprartv50, comprartv32, mantersaudavel} 
}

console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false,false))