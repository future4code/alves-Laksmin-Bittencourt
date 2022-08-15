enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    titulo: string,
    ano: number,
    genero: string, 
    pontuação?: number
}

function OrganizandoElax(titulo: string, ano: number, genero: GENERO, pontuação?: number): Filme {
    if(pontuação) {
        return {
            titulo,
            ano,
            genero,
            pontuação
    
        }
    }else{
        return{
            titulo, 
            ano,
            genero
        }
    }
}
console.log('Run', 2021 , GENERO.ACAO, 10)