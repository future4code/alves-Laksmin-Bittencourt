//exercicios de interpretação//
//1//
//a//
//se o numero digitado pelo usuario por divisivel por 2 ele imprime a mensagem de voce passou no teste//
//b//
//apenas numeros divisiveis por 2//
//c//
//numeros impares//

//2//
//a//
//foi feito para saber os valores das frutas//
//b//
//o preço da fruta maçã é 2,25//
//c//
//será impresso o default que é 5//

//exercicios de escrita//
//1//
//a//b//c//
let perguntaIdade = + prompt ("qual sua idade?")
if (perguntaIdade >= 18) {
console.log ("Você pode dirigir!")
} else {
console.log("Você não pode dirigir!")
}

//2//
let turno = prompt ("Digite M para matutino, V para vespertino e N para noturno").toUpperCase()
if (turno == "M"){
    console.log ("Bom Dia!")
} else if (turno == "V") {
    console.log ("Boa Tarde!")
} else if (turno == "N") {
    console.log ("Boa Noite!")
}
//3//


//4//
let filme = prompt ("Digite um genero de filme").toUpperCase()
let ingresso = Number (prompt("Quanto é o valor do ingresso?"))
if ((filme == "FANTASIA") && (ingresso <= 15)){
    console.log ("Bom Filme! :)")
} else {
    console.log("Escolha outro filme! :(")
}