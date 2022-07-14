import React from "react";
import styled from "styled-components";
import {useProtectedPage} from "./TripDetailsPage";
import {goBackHome} from "../Routes/Cordinator";
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

export default function AdminPage() {
    useProtectedPage()
    const navigate = useNavigate()

    return(

        <Divzona>
            <h1>Painel Administrativo</h1>
            <button onClick={() => goBackHome(navigate, "/")}>Voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </Divzona>
    )
}