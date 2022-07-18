import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goToListTripsPage, goToAdminPage} from "../Routes/Cordinator";

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
    
    return(
        <Divzona>
            <h1>Labe-X</h1>
            
            <button onClick={() => goToListTripsPage(navigate, "ListTrip")}>Ver Viagens</button>

            <button onClick={() => goToAdminPage(navigate, "Admin")}>Área Administrativa</button>

        </Divzona>
    )
}