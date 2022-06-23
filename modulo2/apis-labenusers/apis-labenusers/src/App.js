import React from 'react';
import TelaCadastro from './Components/TelaCadastro';
import TelaUsuarios from './Components/TelaUsuarios';

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

      <div>

        {this.escolheTela()}

      </div>

    )
  }

}