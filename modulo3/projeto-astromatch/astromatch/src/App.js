import React, { useState } from "react";
import styled from "styled-components";
import Perfil from "./Components/SessaoPerfis/Perfis";
import Matches from "./Components/SessaoMatches/Matches";

// Estilização do card mãe, header, footer e botoes:

const Main = styled.main`
  border: solid black;
  border-radius: 15px;
  padding: 180px;
  width: 4%;
  margin-left: 450px;
  margin-top: 85px;
  display: flex;
  align-items: flex-start;
`

const CardCima = styled.div`
  width: 220px;
  margin-top: 0px;
  border: solid purple;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

`

const H1 = styled.h1`
  display: flex;
  flex-direction: start;
  
`
const Butao = styled.button`
 color: purple;
`
const Hr = styled.hr`
  width: 200px;
`

function App() {

  const [telaAtual, setTelaAtual] = useState("perfil")

  const trocarTela = () => {

    switch (telaAtual) {
      case "perfil":
        return (
        <Perfil irParaMatches={irParaMatches}/>
        )
      case "Matches":
        return (
        <Matches irParaPerfil={irParaPerfil}/>
        )
      default:
        return (
          <div>Ops! Página não encontrada.</div>
        )
    }
  }

  const irParaPerfil = () => {
    setTelaAtual({telaAtual: "perfil"})
  }

  const irParaMatches = () => {
    setTelaAtual({telaAtual: "matches"})
  }

  return (
    
    <Main>

      <CardCima>

      <H1>astromatch</H1> 
      <Butao>Ver Matches</Butao>
      
      </CardCima>

      <Hr></Hr>

      {trocarTela}

    </Main>

  );
}

export default App;
