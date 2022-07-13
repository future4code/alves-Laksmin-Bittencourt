import React from "react";
import styled from "styled-components";

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

export default function TripDetailsPage() {
    return(
        <Divzona>
            
            <h1>Detalhes Da Viagem</h1>

            <div>
                Descrição da viajem
            </div>

            <button>Voltar</button>

            <div>
                <h2>Candidatos Pendentes</h2>
                <h2>Candidatos Aprovados</h2>
            </div>

        </Divzona>
    )
}