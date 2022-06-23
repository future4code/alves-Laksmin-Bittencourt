import React from 'react';
import Styled from 'styled-components';
import TelaCadastro from './Components/TelaCadastro';
import TelaUsuarios from './Components/TelaUsuarios';
import logolabenu from './img/logolabenu.jpg';

const DivApp = Styled.div `
  background-color: black;
`
const HeaderApp = Styled.header `
  color: black;
  background-color: yellow;
  border: 2px solid black;
  text-align: center;
  padding: 1px;
  display: flex;
  justify-content: left;
  gap: 15px;
  `
  const LogoDaLabenu = Styled.img `
    padding: 5px;
    height: 50px;
    margin: 10px;
  `
  const TituloHeader = Styled.h2 `
    margin-top: 30px;
    margin-left: 400px;
  `

export default class App extends React.Component {
  state = {

    telaInicial: "cadastro"

  }

  escolheTela = () => {
    switch (this.state.telaInicial) {
      case "cadastro":
        return <TelaCadastro trocarParaUsuarios={this.trocarParaUsuarios}/>

      case "Usuarios":
        return <TelaUsuarios trocarParaCadastro={this.trocarParaCadastro}/>
      
      default: 
        return <div>Erro! Página não encontrada</div>
    
    }

  }

  trocarParaCadastro = () => {
    this.setState({telaInicial: "cadastro"})

  };

  trocarParaUsuarios = () => {
    this.setState({telaInicial: "Usuarios"})

  };

  render () {

    return (

      
      <DivApp>

        <HeaderApp>
          
          <LogoDaLabenu src= {logolabenu}/>
          <TituloHeader>INSCRIÇÃO LABENUSERS</TituloHeader>

        </HeaderApp>
        {this.escolheTela()}

      </DivApp>

    )
  }

}