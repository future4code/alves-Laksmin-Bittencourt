import React from 'react';

class CardUsuarioIpresso extends React.Component {

  state = {
    
    ValorInputUsuario: " "
  };
    
  
    
  adicionaUsuario = () => {
    
    const novoUsuario = {
    
      Usuario: this.state.ValorInputUsuario
    
    }
    
    const novaPessoa = [...this.state.novoUsuario]
    
    this.setState({ValorInputUsuario})
    
    onChangeInputUsuario = (event) => {
    
    this.setState({ ValorInputUsuario: event.target.value})

    }

  }

}
  
render() {

  const listaDeUsuarios = this.state.ValorInputUsuario.map((ValorInputUsuario) => {

    return (
      <h5>
        {ValorInputUsuario}
      </h5>

    );

  })

  return (
    <div>
      {listaDeUsuarios}
    </div>
  )

}

export default CardInput;