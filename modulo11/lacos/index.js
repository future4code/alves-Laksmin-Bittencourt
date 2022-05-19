//EXERCICIOS DE INTERPRETAÇÃO//
//1//

//2//
//a//
//b//
//c//

//3//

//EXERCICIOS DE ESCRITA//
//1//
//a//b//c//(só consegui fazer com ajuda do dk)
let quantosPets = Number(prompt("quantos animais de estimação você tem?"))
let arrayPet = []
if (quantosPets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (let i = 0; i < quantosPets; i++){
        let qualNome = prompt("Qual o nome do seu pet?")
        arrayPet[i] = qualNome 
    }
    for(let elemento of arrayPet){
        console.log (elemento)
    }
}

//2//
let arrayOriginal = [20,21,22,23,24,25]
//a//b//c//d//e//
//gente minha cabeça vai explodir. ja vi varios videos no yt e revi os slides mas ta foda//