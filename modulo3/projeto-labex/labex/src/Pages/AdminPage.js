import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import {useProtectedPage} from "./TripDetailsPage";
import {goBackHome, goToDetails} from "../Routes/Cordinator";
import {useNavigate} from "react-router-dom";

const Headerzin = styled.header`
    border: solid black 2px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    min-width: 100%;
`
const Divzona = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Cardizinho = styled.div`
    border: solid purple 5px;
    max-height: 100%;
    margin-top: 50px;

`

export default function AdminPage() {
    useProtectedPage()

    const navigate = useNavigate()
    const [ListTrip, setListTrip] = useState([])
    const token = localStorage.getItem('token')

    const getListTrip = (() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/laksmin/trips'
        ).then((response) => {
            setListTrip(response.data.trips)
            console.log(response.date)
        
        }).catch((err) => {
            console.log(err.response)
        })

    })

    useEffect(() => {
        getListTrip()
    }, [])

    const listView = ListTrip.map((e) => {
        return(

            <div key={e.id}> 
            
                {token === null ? (

                  <Cardizinho>
                <h2>{e.name}</h2>
                <h3>Planeta: {e.planet}</h3>
                <h3>Duração: {e.durationInDays}</h3>
                <h3>Data: {e.date}</h3>
                <h3>Descrição: {e.description}</h3>
                  </Cardizinho>

                ) : (

                  <Cardizinho>
                <h2>{e.name}</h2>
                <h3>Planeta: {e.planet}</h3>
                <h3>Duração: {e.durationInDays}</h3>
                <h3>Data: {e.date}</h3>
                <h3>Descrição: {e.description}</h3>
                <button onClick={() => goToDetails(navigate, "Details")}>Detalhes</button>
                  </Cardizinho>
                )}

            </div>
        )

    }) 

    return(

        <Divzona>

            <Headerzin>
            <h1>Painel Administrativo</h1>
            <button onClick={() => goBackHome(navigate, "/")}>Voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
            </Headerzin>

            {listView}

        </Divzona>
    )
}