//exercicios de interpretação//
//1//
//console 'a. ' dará undefined, pois nao tem valor//
//console 'b.' dará null, pois foi dado o valor de null//
//console 'c. ' imprimirá 11 que é a quantidade de caracteres//
//console 'd. ' imprimirá o 3 o porque eu n entendi//
//console 'd. ' imprimirá o 19 no lugar do 4 o porque eu nao entendi//
//console 'e. ' imprimirá o 6 prque acredito que esta contando a partir do 0 do i//
//2//
//a frase immpressa ficará "SUBI NUM ÔNIBUS EM MIRROCOS" (27)

//exercicios de escrita//
//1//
 let nome = prompt ("Digite seu nome?")
 let usuario = prompt ("Digite seu e-mail")
 console.log (`O e-mail ${usuario} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}`)

//2//
//a//
 let comidastotosas = ["sushi","hamburguer","beterraba", "strogonoff", "esticadinho"]
 console.log (comidastotosas)
 //b//
 console.log (`essas são minhas comidas preferidas 
 ${comidastotosas[0]}
 ${comidastotosas[1]}
 ${comidastotosas[2]}
 ${comidastotosas[3]}
 ${comidastotosas[4]}
 `)
 //c//
 let pergunta = prompt ("Qual sua comida preferida?")
 comidastotosas[1] = pergunta
 console.log (comidastotosas)

//3//
//a//
let listadetarefas = []
//b//
let tarefa1 = prompt ("Diga uma terefa")
let tarefa2 = prompt ("Mais uma...")
let tarefa3 = prompt ("E só mais uma...")
listadetarefas.push (tarefa1, tarefa2, tarefa3)
//c//
console.log (listadetarefas)
//d//
let terminou = prompt ("Qual das tarefas você já realizou; 0, 1 ou 2?")
console.log (listadetarefas[terminou])
//e//
console.log (listadetarefas.splice(terminou, 1))
console.log (listadetarefas)