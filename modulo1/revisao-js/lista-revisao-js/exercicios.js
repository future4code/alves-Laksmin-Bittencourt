// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
<<<<<<< HEAD
   return array.length
=======
   return array.length()
>>>>>>> master
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
<<<<<<< HEAD
   return array.sort((a, b) => a - b)
} 


// EXERCÍCIO 04
function retornaNumerosPares(array) {
//     let novaArray = []
//    for (let i = 0 ; i < array.length ; i++) {
//     if (array[i] % 2 === 0){
//         novaArray.push(array[i])
//     }
//    }   
//    return novaArray
    return array.filter(item => item % 2 === 0)

} 


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = retornaNumerosPares(array)
  let elevados = numerosPares.map(item => item ** 2)
   return elevados
} 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math. max. apply(null, array)
} 


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let Juntos = num1 + num2
    let Maior = Math. max. apply(null, Juntos)
    let Menor = Math. min(...Juntos)
    let Dividir = Maior % Menor === 0
    let Diminuir = Maior - Menor
    let objeto = {
        maiorNumero: Maior,
        maiorDivisivelPorMenor: Dividir,
        diferenca: Diminuir
    } 
    return objeto
}   console.log(`maiorNumero: ${maiorNumero} , maiorDivisivelPorMenor: ${maiorDivisivelPorMenor}, diferenca: ${diferenca}`)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    novaArrayN = []
    for (let i = 0 ; i < 2 ; i++) {
    if (n[i] % 2 === 0){
        novaArrayN.push(n[i])
    }
   }   
   return novaArrayN
}   
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA !== ladoB !== ladoC !== ladoA){
        console.log("Escaleno")
    } else if {
        ladoA === ladoC
        console.log("Isóceles")
    }
    //
    
=======
    return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let soPares = []
  for(let i = 0; i < array.length ; i++){
      if( array[i] % 2 === 0) {
        } soPares.push(array[i])
    }
} console.log(soPares)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

>>>>>>> master
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}