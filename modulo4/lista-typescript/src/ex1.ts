function dadosNasc (nome: string, nasc: string):string{
    const [dia, mes, ano] = nasc.split("/")

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`
}
console.log(dadosNasc("Laksmin", "02/12/1997"))