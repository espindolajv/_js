function  tratarerro(){
    throw new Error ('...')
    throw 10
}
function  imprimirnome(obj){
    try{
        console.log(obj.nome.toUpperCase()+'!!!')
    }catch(e){
        tratarerro(e)
    }finally{
        console.log('Final')
    }
    
}

const obj ={nome: 'Roberto'}
imprimirnome(obj)