//exercicios de interpretação//
//1//
//a//
//será impresso no console o resultado da multiplicação das variaveis por 5//
//b//
//nao imprimirá nada pois não está sendo pedido pra ser impresso. Está ali, mas nao visivel//

//2//
//a//
//a função está formatando a resposta do usuario para que fique tudo minusculo e para comparar a resposta do usuario com a palavra "cenoura", e da false porque o usuario não sabe que tem que escrever cenoura.
//b//
//I// Retorna true pois tem a palavra cenoura na resposta do usuario//
//II//retorna false porque o o CENOURA não está escrito como o que pede//
//III//retorna true pois ele encontrou o elemento igual que é cenoura//

//EXERCICIOS DE ESCRITA//
//1//
//a//
// let infos = function(textinho){
//    textinho = ("Sou a Lakshmi, tenho 24 anos e sou gaucha")
//    return textinho 
// }
// console.log (infos())

//b//
// let funcao = function(nome, num , cidade , profissao){
//     nome = ("Lakshmi")
//     num = (24)
//     cidade = ("Florianopólis")
//     profissao = ("desempregada")
//     const unificacao = `Eu sou a ${nome} tenho ${num} anos, moro em ${cidade} e no momento estou ${profissao}` 
//     return unificacao
// }
// console.log (funcao())

//2//
//a//
// let soma = function(num1, num2){
//     num1 = 15
//     num2 = 25
//     let somado = (num1 + num2)
//     return somado
// }
// console.log (soma())

//b//
// let saoiguaisounao = function (num3, num4){
//     num3 = 30
//     num4 = 60
//     let boleanus = (num3 >= num4)
//     return boleanus
// }
// console.log (saoiguaisounao())

//c//
// let parOuImpar = function(num5){
//     num5 = 9
//     div = (9 % 2)
//     const condicao = (div === 0)
//     return condicao
// }
// console.log (parOuImpar())

//d//
// let frase = function(mensagem){
//     console.log (mensagem.toUpperCase())
//     console.log (mensagem.length)
// } 
// frase ("eu sou viciada em buffy")

//3//
let perguntaUsuario = Number((prompt ("escreva um numero")))
let pergunta2Usuario = Number((prompt ("escreva mais um numero")))

function somada (perguntaUsuario, pergunta2Usuario){
    const result1 = perguntaUsuario + pergunta2Usuario
    return result1
}

function diminuindo (perguntaUsuario, pergunta2Usuario){
    const result2 = perguntaUsuario - pergunta2Usuario
    return result2
}

function multiplicando (perguntaUsuario, pergunta2Usuario){
    const result3 = perguntaUsuario * pergunta2Usuario
    return result3
}

function dividindo  (perguntaUsuario, pergunta2Usuario){
    const result4 = perguntaUsuario / pergunta2Usuario
    return result4
}
console.log (somada(perguntaUsuario, pergunta2Usuario))
console.log (diminuindo(perguntaUsuario, pergunta2Usuario))
console.log (multiplicando(perguntaUsuario, pergunta2Usuario))
console.log (dividindo(perguntaUsuario, pergunta2Usuario))


