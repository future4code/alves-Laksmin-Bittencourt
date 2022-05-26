//EXERCICIOS DE INTERPRETAÇÃO//


//EXERCICIOS DE ESCRITA//
//1//
//a//b//c//
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//const doguinhosUmPorUm = pets.filter((nomes) => {
//    return nomes.nome
// })
// const nomedogs = doguinhosUmPorUm.map((nomes) => {
//    return nomes.nome
// })
// console.log(nomedogs)

// const Salsichinhas = pets.filter((nomes1) => {
//     return nomes1.raca === "Salsicha"
//  })
// const soSalsichas = Salsichinhas.map((nomes1) => {
//     return nomes1.raca 
//  })
//  console.log(soSalsichas)

// const poodles = pets.filter((nomes2) => {
//     return nomes2.raca === "Poodle"
// })
// const soPoodles = poodles.map((nomes2) => {
//     return nomes2.nome
// })
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${soPoodles[1]}`)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${soPoodles[0]}`)

//2//
//a//
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomeDeCadaItem = produtos.filter((nomess) => {
    return nomess.nome
 })
const NomesDasComidas = nomeDeCadaItem.map((nomess) => {
    return nomess.nome
})
console.log(NomesDasComidas)
//b//
const precos = produtos.filter((valores) => {
    return valores.preco
})
const precossdomap = produtos.map((valores) => {
    return valores.preco
})

const NomeEPreco = {
    NomesDasComidas, 
    precossdomap
}
console.log (NomeEPreco)
//c//
const bebidasShabas = produtos.filter((goro) => {
    return goro.categoria === "Bebidas"
})
console.log(bebidasShabas)
//d//
const ApenasYpe = produtos.filter((ypezin) => {
    return ypezin.nome.includes("Ypê")
})
const Ypepe = produtos.map((ypezin) => {
    return ypezin.nome === "Ypê"
})
console.log(Ypepe)
//e//
//como eu nao consegui imprimir e guardar numa variavel os nomes com ype e nem aplicar o desconto esse tmb nao da//