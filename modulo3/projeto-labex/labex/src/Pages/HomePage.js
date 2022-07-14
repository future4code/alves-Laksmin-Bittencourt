import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {goToListTripsPage} from "../Routes/Cordinator";

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

export default function HomePage() {
    const navigate = useNavigate()
    const pathParams = useParams()
    
    return(
        <Divzona>
            <h1>Labe-X</h1>
            
            <button onClick={() => goToListTripsPage(navigate, "ListaDeViagens")}>Ver Viagens {pathParams.goToListTripsPage}</button>

            <button>Área Administrativa</button>

        </Divzona>
    )
}