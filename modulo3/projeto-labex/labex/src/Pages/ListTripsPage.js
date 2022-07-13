import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

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

export default function ListTripsPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    const goToForm = () => {
        navigate("/Form")
    }
    

    return(
        <Divzona>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToForm}>Inscrever-se</button>
            <p>Lista De Viagens</p>
        </Divzona>
    )
}