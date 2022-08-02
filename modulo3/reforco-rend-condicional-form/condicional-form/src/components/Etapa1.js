import React from 'react';
import styled from 'styled-components';

const Etapa1Pai = styled.div`
border: solid blueviolet 2px;
margin: 10px;

`
const Card1 = styled.div`
border: solid black 1px;
`

function Etapa1() {
  return (
    <Etapa1Pai>

      <h1>Etapa 1 - DADOS GERAIS</h1>

      <Card1>
      <li>1. Qual o seu nome?</li>
      <li>2. Qual sua idade?</li>
      <li>3.Qual seu e-mail?</li>
      <select>4. Qua sua escolaridade?</select>
      </Card1>

    </Etapa1Pai>
  );
}

export default Etapa1;
