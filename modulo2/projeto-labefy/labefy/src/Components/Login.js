import axios from 'axios';
import React from 'react';
import Styled from 'styled-components';

const CardCadastro = Styled.div`
    color: yellow;
    background-color: black;
    padding: 175px;
    margin: 10px;
    
`
const BotaoTrocarTela = Styled.div `
    color: yellow;
    border: 1px solid yellow;
    background-color: black;
    border-radius: 20px;
    padding: 10px;
    max-width: 150px;
`
const Input = Styled.button `
    background-color: black ;
    color: yellow;
    border: 1px solid yellow;
    border-radius: 15px;
    padding: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    
`
const Cadastrar = Styled.button `
    color: yellow;
    border: 1px solid yellow;
    background-color: black;
    border-radius: 20px;
    padding: 10px;
    max-width: 150px;
    margin-top: 25px;
`

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

            <CardCadastro>

                <BotaoTrocarTela onClick={this.props.trocarParaUsuarios}>Ir para lista de usuarios</BotaoTrocarTela>
                <h2>Cadastro</h2>
                <Input 
                    placeholder='Nome'
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <Input 
                    placeholder='E-mail'
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <Cadastrar onClick = {this.salvarCadastro}>Cadastrar</Cadastrar>

            </CardCadastro>
        )

    }


}