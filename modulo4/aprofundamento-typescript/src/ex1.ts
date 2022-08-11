const minhaString: string = "Ele não deixou eu por numero ;)"

const meuNumero: number = 0 // (tmb n deixou eu por string)

const pessoa: {nome: string, idade: number, corFav: string} = {
    nome: "Lakshmi",
    idade: 24,
    corFav: "Preto"
}

type pessoaP = {nome: string, idade: number, corFav: string}

const pessoa1: pessoaP = {
    nome: "jana",
    idade: 24,
    corFav: "Rosa"
}

const pessoa2: pessoaP = {
    nome: "Marcelo",
    idade: 28,
    corFav: "vermelho"
}

const pessoa3: pessoaP = {
    nome: "Br",
    idade: 35,
    corFav: "verde"
}

enum CoresArcoI{
    VERMELHO= "vermelho",
    LARANJA= "laranja",
    AMARELA= "amarela",
    VERDE= "verde",
    AZUL= "azul",
    ANIL= "anil",
    VIOLETA= "violeta"
}

type Cor = pessoaP & {
    corFav: CoresArcoI
}

const pessoaComCor: pessoaP = {
    nome: "Br",
    idade: 35,
    corFav: CoresArcoI.VIOLETA
}