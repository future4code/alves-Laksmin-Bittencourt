import React from 'react';
import Login from './Components/Login.js';
import Playlists from './Components/Playlists.js';

export default class App extends React.Component {
  state = {
    TelaInicial: "Login"
  }

  escolherTela = () => {
    switch (this.state.TelaInicial) {
      case "Login":
        return <Login irParaLogin={this.irParaLogin}/>
      case "Playlists":
        return <Playlists irParaPlaylists={this.irParaPlaylists}/>
      default:
        return <div>Ops! Algo deu errado!</div>
    }
  };

  irParaPlaylists = () => {
    this.setState({TelaInicial: "Playlists"})
  };

  irParaLogin = () => {
    this.setState({TelaInicial: "Login"})
  };

  render () {

    return (
      <div>
        
        {this.escolherTela()}

      </div>
    )
  }

}