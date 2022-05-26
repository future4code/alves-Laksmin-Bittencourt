//exercicios de interpretação//
//1//
//a// vai ser impresso matheus nahtergaele depois virginia cavendish e por ultimo o 3 canal//

//2//
//a// vai ser impresso nome:juca, idade 3, raca srd depois juba (restante tudo igual)e por ulltimo jubo(restante tudo igua)
//b// os ... copiam os objetos para nós atribuirmos um novo valor, ou significado.

//3//
//a// sera impresso FALSE e undefined
//b//foi impresso so o false pq o beckender tinha uma propriedade definida, já a altura não.

//exercicios de escrita//
//1//
//a//
const pessoa = {
    nome: "Lakshmi",
    apelidos: ["Shimia", "Laks", "Lastima"]

}
function imprimirFrase(apes){
console.log (`oi meu nome é ${apes.nome} mas pode me chamar de ${apes.apelidos[0]} ${apes.apelidos[1]} ou ${apes.apelidos[2]}`)
}
imprimirFrase(pessoa)

//b//
const novoObjeto = {
    ...pessoa, 
    apelidos: ["galaxia", "rajka", "lassi"]
}
imprimirFrase(novoObjeto)

//2//
//a//
const obj1 = {
    nome: "Luna",
    idade: 25,
    profissao: "programadora"
}
const obj2 = {
    nome: "Derik",
    idade: 26,
    profissao: "dev"
}
function osDoisObjetos(infos1, infos2){ 
    const array = [infos1.obj1.nome, infos1.obj1.nome.length, infos1.obj1.idade, infos1.obj1.profissao, infos1.obj1.profissao.length, 
    infos2.obj2.nome, infos2.obj2.nome.length, infos2.obj2.idade, infos2.obj2.idade.length, infos2.obj2.profissao, infos2.obj2.profissao.length]
}
osDoisObjetos(obj1, obj2)

//3//
const carrinho = []
const fruta1 = {
    nome: "melancia",
    disponipilidade: true
} 
const fruta2 = {
    nome: "laranja",
    disponipilidade: true
}
const fruta3 = {
    nome: "abacaxi",
    disponipilidade: true
}
function frutasCarrinho (fruit1, fruit2, fruit3){
    carrinho.push(fruta1, fruta2, fruta3)
    return carrinho
}
frutasCarrinho(fruta1, fruta2, fruta3)
console.log(carrinho)

//obs// eu fiz com a ajuda dos colegas, mas nao peguei muito bem...//