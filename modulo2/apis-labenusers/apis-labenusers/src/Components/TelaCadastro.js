import axios from 'axios';
import React from 'react';

export default class TelaCadastro extends React.Component {
    state = {

        nome: " ",
        email: " "
    }

    handleNome = (event) => {

        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {

        this.setState({email: event.target.value})
    }

    salvarCadastro = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {

            headers: {
                Authorization: "Laksmin-Bittencourt-Alves"
            }

        })
        .then((res) => {
            alert("Usuario(a) criado(a) com sucesso!")
            this.setState({nome: " ", email: " "})
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })

    }

    render () {

        return (

            <div>

                <button onClick={this.props.trocarParaUsuarios}>Ir para lista de usuarios</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder='Nome'
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder='E-mail'
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick = {this.salvarCadastro}>Cadastrar</button>

            </div>
        )

    }


}