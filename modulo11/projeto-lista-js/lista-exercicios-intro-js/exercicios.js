// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let perguntaAlt = prompt ("qual a altura de um retangulo?")
let perguntaLarg = prompt ("qual a largura de um retangulo?")
let calculo = perguntaAlt * perguntaLarg
console.log (calculo)
}

// // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt ("em que ano estamos?")
let anoNasc = prompt ("Em que ano você nasceu?")
let anos = anoAtual - anoNasc
console.log (anos)
}

//EXERCÍCIO 03//
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let imc = altura * altura
let imctotal = peso / imc
return imctotal
}
console.log (imctotal)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let name = prompt ("qual seu nome?")
  let age = Number(prompt ("qual sua idade?"))
  let email = prompt ("qual seu e-mail?")
  let frase = `Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`
  console.log (frase)
  return frase
}

//EXERCÍCIO 05//
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt ("qual sua cor favorita?")
let cor2 = prompt ("outra cor favorita...")
let cor3 = prompt ("só mais uma cor...")
let todasAsCores = [cor1, cor2, cor3]
console.log (todasAsCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let maiuscula = string.toUpperCase()
console.log (maiuscula)
return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 let preju = custo / valorIngresso
 return preju
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let tam1 = string1.length 
let tam2 = string2.length
let boleanin = tam1 === tam2
return boleanin
}

// EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
//   return (array[0])
//}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let tamanho = array.[length2]
return tamanho
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let iguaisOuNao = string1 == string2
console.log (iguaisOuNao)
return iguaisOuNao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}