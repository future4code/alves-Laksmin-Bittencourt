import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {goBack, goToForm} from "../Routes/Cordinator";
import axios from "axios";

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

export default function ListTripsPage() {

    const [ListTrip, setListTrip] = useState([])

    const navigate = useNavigate()

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
                <button>Detalhes</button>
                  </Cardizinho>
                )}

            </div>
        )

    }) 
    

    return(
        <Divzona>
            <Headerzin>
            <button onClick={() => goToForm(navigate, "Form")}>Inscrever-se</button>
            <button onClick={() => goBack(navigate, "/")}>Voltar</button>
            <h1>Lista De Viagens</h1>
            </Headerzin>

            <div>
            {listView}
            </div>
        </Divzona>
    )
}