import React from 'react';
import Axios from 'axios';
import Styled from 'styled-components';
import styled from 'styled-components';

const DivUsuarios = Styled.div `
    background-color: black;
    padding: 100px;
    max-height: 100%;
`

const CardUsuarios = Styled.div`
    color: yellow;
    border: 1px solid yellow;
    border-radius: 35px;
    background-color: black;
    padding: 10px;
    margin: 10px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    
`
const CardTitulo = Styled.h2 `
    color: yellow;
    background-color: black;
    border: 1px solid yellow;
    border-radius: 55px;
    padding: 1px;
    width: 300px;
    text-align: center;
`
const CardBotao = Styled.button `
    color: yellow;
    background-color: black;
    border: 1px solid yellow;
    border-radius: 30px;
    padding: 10px;
`
const CardBotao2 = Styled.button`
    color: yellow;
    background-color: black;
    border-radius: 20px;
    padding: 2px;
`

export default class TelaUsuarios extends React.Component {

    state = {
        usuario: []
    } 

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        Axios.get(url, { 
            headers: {
                Authorization: "Laksmin-Bittencourt-Alves"
            }
        
        })
        .then((res) => {
            this.setState({usuario: res.data})
        })

        .catch((erro) => {
            alert("Ops! Ocorreu um erro!")
        })

    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        Axios.delete(url, {
            headers: {
            Authorization: "Laksmin-Bittencourt-Alves"
            }

        })
        .then((res) => {
            alert("Usuario deletado com sucesso!")
            this.pegarUsuarios()
        })

        .catch((erro) => {
            alert(erro.response.data)
        })

    } 

    render () {
        
        const listaUsuarios = this.state.usuario.map((user) => {
            return (
            <CardUsuarios key= {user.id}>
                {user.name}
                <CardBotao2 onClick={() => this.deletarUsuario(user.id)}>X</CardBotao2>
            </CardUsuarios>
            )
        })

        return (

            <DivUsuarios>

                <CardBotao onClick={this.props.trocarParaCadastro}>Ir para Cadastro</CardBotao>

                <CardTitulo>
                    <h2>Lista de usuários</h2>
                </CardTitulo>

                {listaUsuarios}

            </DivUsuarios>
        )

    }

}