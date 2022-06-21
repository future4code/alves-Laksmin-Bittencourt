import './App.css';
import React from "react";
import axios from "axios";

export default class Usuarios extends React.Component {
  state = {
    name: " ",
    email: " "
  }

  criarUsuario = () => {
    axios
    .get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
      {
      headers: {
      Authorization: "Laksmin-Bittencourt-Alves"
      }

      }
        
    )
    .then((resposta) => {
    this.setState({ nome: resposta.data.result});
    })
    .catch(() => {
      console.log(erro.response);
    });

  };

  componentDidMount() {
    this.criarUsuario();
  }

  render () {
    return (
      <main>
        <h4>{this.props.Usuarios.name}</h4>
        {this.state.name.map((name) => {
        return <p key={nome.id}>{name.name}</p>
        })}
      </main>
    );
    
  }

}

