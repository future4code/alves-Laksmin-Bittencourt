import React, { useState } from 'react';
import styled from 'styled-components';

const Etapa1Pai = styled.div`
border: solid blueviolet 2px;
margin: 10px;

`
const Card1 = styled.div`
border: solid black 1px;
`

function Etapa1() {

 const [nome, setNome] = useState(" ")
 const [idade, setIdade] = useState(" ")
 const [email, setEmail] = useState(" ")
 const [select, setSelect] = useState(" ")

 const onChangeNome = (e) => {
  setNome(e.target.value)
 }

 const onChangeIdade = (e) => {
  setIdade(e.target.value)
 }

 const onChangeEmail = (e) => {
  setEmail(e.target.value)
 }

const onClickSelect = (e) => {
  setSelect(e.target.value)
}



  return (
    <Etapa1Pai>

      <h1>Etapa 1 - DADOS GERAIS</h1>

      <Card1>
      <li>1. Qual o seu nome?</li>
      <input onChange={onChangeNome} value={nome} placeholder="Nome"/>
      <li>2. Qual sua idade?</li>
      <input onChange={onChangeIdade} value={idade} placeholder="Idade"/>
      <li>3.Qual seu e-mail?</li>
      <input onChange={onChangeEmail} value={email} placeholder="E-mail"/>

      <select onClick={onClickSelect} value={select}>

        <option>"Ensino Médio Incompleto"</option>
        <option>"Ensino Médio Completo"</option>
        <option>"Ensinno Superior Incompleto"</option>
        <option>"Ensinno Superior Completo"</option>

      </select>

      </Card1>

    </Etapa1Pai>
  );
}

export default Etapa1;
