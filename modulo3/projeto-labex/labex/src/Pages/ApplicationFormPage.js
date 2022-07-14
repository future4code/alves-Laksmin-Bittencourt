import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Cordinator";
import axios from "axios";

const Divzona = styled.div`
    border: solid black 2px;
    max-width: 50%;
    height: 500px;
    margin-left: 355px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function ApplicationFormPage() {

    const navigate = useNavigate()

    const [viagem, setViagem] = useState({})
    const [nome, setNome] = useState({})
    const [idade, setIdade] = useState({})
    const [texto, setTexto] = useState({})
    const [profissao, setProfissao] = useState({})
    const [pais, setPais] = useState({})

    const getViagem = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:laksmin/trips'
        ).then((res) => {
            console.log(res.data)
        
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <Divzona>

            <h1>Inscreva-se para uma viagem</h1>

            <div>
                <select placeholder="Escolha uma Viagem">Escolha uma Viagem</select>
                <input placeholder="Nome"></input>
                <select placeholder="Idade">Idade</select>
                <input placeholder="Texto de Candidatura"></input>
                <input placeholder="Profissão"></input>
                <select placeholder="Escolha um pais">Escolha um pais</select>
            </div>

            <button onClick={() => goBack(navigate, "/")}>Voltar</button>
            <button>Enviar</button>
            
        </Divzona>
    )
}