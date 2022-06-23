import React from "react";
import styled from "styled-components";
import App from "../App";

export default class DadosGerais extends React.Component {
    state = {
      logou: false
    };
    logar = () => {
      this.setState({ logou: !this.state.logou });
    };
    render() {
      return (
        <div>
          {this.state.logou ? 
          (<App logar={this.logar} />) : (<Login logar={this.logar} />)
          }
        </div>
      );
    }
  }
  