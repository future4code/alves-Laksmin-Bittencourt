import React from "react";
import './App.css';
import CardGrande from './Componentes/CardGrande.js';
import CardInput from './Componentes/CardInput.js';

class App extends React.Component {

    state = {

        valorInputUsuario: " ",
        ValorInputMensagem: " "

    }

    render() {

        return (
            <div className="App">

            <div>
            <p>{this.state.ValorInputMensagem}</p>
            </div>

            <input
             value={this.state.valorInputUsuario}
            OnChange={this.oneChangeInputUsuario}
            placeholder={"Seu nome"}
            />

            <input
            value={this.state.ValorInputMensagem}
            OnChange={this.oneChangeInputMensagem}
            placeholder={"digite sua mensagem..."}
            />

            <buttom type= {submit} >{"ENVIAR"}</buttom>

            </div>

        )
    };
}
export default App;
