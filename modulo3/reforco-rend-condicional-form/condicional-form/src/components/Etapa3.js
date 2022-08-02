import React from 'react';
import styled from 'styled-components';

const Etapa3Pai = styled.div`
border: solid purple 2px;
margin: 10px;
`
const Card3 = styled.div`
border: solid black 1px;
`
function Etapa3() {

  return (

    <Etapa3Pai>

      <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <Card3>
      <li>5. Porque você não terminou um curso de graduação?</li>
      <select>Você fez algum curso complementar?</select>
      </Card3>
      
    </Etapa3Pai>
  );
}

export default Etapa3;
