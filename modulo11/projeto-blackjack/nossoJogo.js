/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas Vindas ao Jogo de Black Jack!")

if (confirm ("Gostaria de mais uma jogada?") === true){
   const carta = comprarCarta()
   const carta2 = comprarCarta()
   const pontos = carta.valor + carta2.valor
console.log(`Sua primeira carta é ${carta.texto} e seu valor é ${carta.valor}`)
console.log(`Sua segunda carta é ${carta2.texto} e seu valor é ${carta2.valor}`)
console.log(`Sua pontuação é ${pontos}`)

   const cartapc = comprarCarta()
   const cartapc2 = comprarCarta()
   const pontospc = cartapc.valor + cartapc2.valor
console.log(`Primeira carta do computador é ${cartapc.texto} e seu valor é ${cartapc.valor}`) 
console.log(`Segunda carta do computador é ${cartapc2.texto} e seu valor é ${cartapc2.valor}`)
console.log(`Pontuação do computador é ${pontospc}`)

if (pontos > pontospc ){
console.log("Você venceu!")

} else if (pontospc > pontos){
console.log("O computador venceu!")

} else if (pontos === pontospc){ 
  console.log("Empatou!")
  
}  else {
console.log("O jogo acabou!")
}
}








