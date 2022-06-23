import React from 'react';
import Axios from 'axios';

export default class TelaUsuarios extends React.Component {

    state = {
        usuario: []
    } 

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, { 
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

    render () {
        
        console.log()

        return (

            <div>

                <button onClick={this.props.trocarParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de usuários</h2>

            </div>
        )

    }

}