import React from 'react';

class CardMensagemImpressa extends React.Component {

    state = {
        
        ValorInputMensagem: " "
      }
    
    }
    
    adicionaConversa = () => {
    
      const novaConversa = {
    
        mensagem: this.state.ValorInputMensagem
    
      }
    
    }
    
    const novaMensagem = [...this.state.novaConversa];
    
    this.setState({ValorInputMensagem})
    
    onChangeInputMensagem = (event) => {
    
      this.setState({ ValorInputMensagem: event.target.value})
    
    };

    render() {

        const listaDeMensagens = this.state.ValorInputMensagem.map((ValorInputMensagem) => {

            return (
                <div>
                {ValorInputMensagem}
                </div>

            );

        })

    }
    export default CardGrande;