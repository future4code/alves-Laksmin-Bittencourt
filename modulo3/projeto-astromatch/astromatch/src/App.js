import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Perfil from "./Components/SessaoPerfis/Perfis";
import Matches from "./Components/SessaoMatches/Matches";

// Estilização do card mãe, header, footer e botoes:

const Main = styled.main`
  border: solid black;
  border-radius: 15px;
  padding: 180px;
  width: 50px;
  height: 90px;
  margin-left: 450px;
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  
  
`

export default function App() {

  const [telaAtual, setTelaAtual] = useState("perfil")

  const irParaPerfil = () => {
    setTelaAtual("perfil")
  }

  const irParaMatches = () => {
    setTelaAtual("matches")
  }

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

  return (
    
    <Main>

      {trocarTela()}

    </Main>

  );
}

