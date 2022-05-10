/* Exercicios de interpretação */

// exercicio a é impresso FALSE//
//exercicio b é impresso FALSE//
//exercicio c é impresso TRUE//
//exercicio d é impresso number, mas acredito que seja booleans//

// Exercicio 2 //
//sera impresso os numeros que a pessoa colocar um do lado do outro sem espaço//

// Exercicio 3 //
//por o prompt dentro do number ()//

/* Exercicios de escrita de codigo */
// Exercicio 1 //

//a//
 let idade = Number( prompt ("Qual sua idade?"))

 //b//
 let idadeamigo = Number (prompt ("Qual a idade do seu melhor amigo?"))

 //c//
 console.log ("A sua idade é maior que a do seu amigo?", idade > idadeamigo)

 //d//
 console.log ("A diferença das suas idades é de", idade - idadeamigo, "anos")

//Exercicio 2//

//a//
 let par = Number (prompt ("Digite um num par"))
 let div= Number (2)
 let result = par % div 
 console.log (result)
//b//
//c//
// sempre sobra 0, pois sao numeros pares//

//d//
//quando o usuario coloca um num impar, sempre sobra//

//Exercicio 3//

 let idadedohumano = Number (prompt ("Qual sua idade em anos?"))
 //a//
 console.log (idadedohumano * 12)
 console.log (idadedohumano * 365)
 const hrs = 365 * 24
 console.log (idadedohumano * hrs)

//Exercicio 4//
let perg1 = Number (prompt("Digite um numero"))
let perg2 = Number (prompt("Digite mais um numero"))
let divisoes = perg1 % perg2
console.log ("o primeiro numero é maior que o segundo?", perg1 > perg2)
console.log ("o primeiro numero é igual ao segundo?", perg1 === perg2)
console.log ("o primeiro numero é divisivel pelo segundo?", divisoes === 0)
console.log ("o segundo numero é divisivel pelo primeiro?", divisoes === 0)
