import React from 'react';
import styled from 'styled-components';

const FinalPai = styled.div`
border: solid green 2px;
margin: 10px;
`
const CardFinal = styled.div`
border: solid black 1px;
`

function Final() {

  return (

    <FinalPai>

      <h1>O FORMULARIO ACABOU</h1>
      
      <CardFinal>
      <h3>Muito obrigado por participar! Entraremos em contato!</h3>
      </CardFinal>

    </FinalPai>
  );
}

export default Final;
