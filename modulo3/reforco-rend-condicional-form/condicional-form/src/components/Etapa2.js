import React from 'react';
import styled from 'styled-components';

const Etapa2Pai = styled.div`
border: solid pink 2px;
margin: 10px;
`
const Card2 = styled.div`
border: solid black 1px;
`
function Etapa2() {

  return (
    
    <Etapa2Pai>

      <h1>Etapa 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>

      <Card2>
      <li>5. Qual curso?</li>
      <li>6. Qual a unidade de ensino?</li>
      </Card2>

    </Etapa2Pai>
  );
}

export default Etapa2;
