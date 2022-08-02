import React, { useState } from 'react';
import styled from 'styled-components';

const Etapa3Pai = styled.div`
border: solid purple 2px;
margin: 10px;
`
const Card3 = styled.div`
border: solid black 1px;
`

function Etapa3() {

  const [porque, setPorque] = useState(" ")
  const [selectOption, setSelectOption] = useState("Nenhum")

  const onChangePorque = (e) => {
    setPorque(e.terget.value)
  }

  const onChangeSelect = (e) => {
    setSelectOption(e.terget.value)
  }

  return (

    <Etapa3Pai>

      <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <Card3>

      <li>5. Porque você não terminou um curso de graduação?</li>
      <input onChange={onChangePorque} value={porque} placeholder="Motivo"/>

      <select onChange={onChangeSelect} value={selectOption}>Você fez algum curso complementar?

        <option value={"Nenhum"}>Nenhum</option>
        <option value={"Curso técnico"}>Curso técnico</option>
        <option value={"Curso de ingles"}>Curso de ingles</option>
        
      </select>

      </Card3>
      
    </Etapa3Pai>
  );
}

export default Etapa3;
