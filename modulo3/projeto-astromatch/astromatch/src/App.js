import React, { useState, useEffect } from "react";
import Perfil from "./Components/SessaoPerfis/Perfis";
import Matches from "./Components/SessaoMatches/Matches";

export default function App() {

  const [telaAtual, setTelaAtual] = useState("perfis")

  const irParaPerfil = () => {
    setTelaAtual("perfis")
  }

  const irParaMatches = () => {
    setTelaAtual("matches")
  }

  const trocarTela = () => {

    switch (telaAtual) {
      case "perfis":
        return (
        <Perfil irParaMatches={irParaMatches}/>
        )
      case "matches":
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
    
    <main>
      
      {trocarTela()}
    
    </main>

  );
}

