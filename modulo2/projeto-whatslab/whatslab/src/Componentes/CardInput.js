import React from 'react';

class CardUsuarioIpresso extends React.Component {

    state = {
        
        ValorInputUsuario: " "
      }
    
    }
    
    adicionaUsuario = () => {
    
      const novoUsuario = {
    
        nome: this.state.ValorInputNome
    
      }
    
    }
    
    const novaPessoa = [...this.state.novoUsuario];
    
    this.setState({ValorInputUsuario})
    
    onChangeInputUsuario = (event) => {
    
      this.setState({ ValorInputUsuario: event.target.value})
    
    };

    // render() {

        const listaDeUsuarios = this.state.ValorInputUsuario.map((ValorInputUsuario) => {

            return (
                <div>
                {ValorInputUsuario}
                </div>

            );

        })

    // }
export default CardInput;