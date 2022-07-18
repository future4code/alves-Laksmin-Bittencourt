import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBackHome } from "../Routes/Cordinator";

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

export const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token===null) {
            console.log('Nao essta logado!')
            navigate("/Login")

        }
    })
}

export default function TripDetailsPage() {
    useProtectedPage()
    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/laksmin/trip/6W90uls88kSIvVoAABl4', {
            headers: {
                auth: token
            }
        }
        ).then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err.data)
        })

    }, [])

    return(
        <Divzona>
            
            <h1>Detalhes Da Viagem</h1>

            <div>
                Descrição da viajem
            </div>

            <button onClick={() => goBackHome(navigate, "/")}>Voltar</button>

            <div>
                <h2>Candidatos Pendentes</h2>
                <h2>Candidatos Aprovados</h2>
            </div>

        </Divzona>
    )
}