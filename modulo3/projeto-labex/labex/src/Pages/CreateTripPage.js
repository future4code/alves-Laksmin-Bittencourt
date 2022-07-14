import React from "react";
import styled from "styled-components";
import {useProtectedPage} from "./TripDetailsPage";

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

export default function CreateTripPage() {
    useProtectedPage()

    return(
        <Divzona>
            <h1>Criar Viagens</h1>
            <div>
                <input placeholder="Nome"></input>
                <select placeholder="Escolha um planeta"></select>
                <input type="date"></input>
                <input placeholder="Descrição"></input>
                <select placeholder="Duração em dias"></select>
            </div>
        </Divzona>
    )
}