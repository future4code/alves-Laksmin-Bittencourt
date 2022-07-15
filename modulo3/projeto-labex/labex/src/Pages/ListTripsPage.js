import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {goBack, goToForm} from "../Routes/Cordinator";
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

export default function ListTripsPage() {

    const [ListTrip, setListTrip] = useState([])

    const navigate = useNavigate()

    const getListTrip = (() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/laksmin/trips'
        ).than((response) => {
            setListTrip(response.data.trips)
            console.log(response.date)
        
        }).catch((err) => {
            console.log(err.response)
        })

    })



    return(
        <Divzona>
            <button onClick={() => goBack(navigate, "/")}>Voltar</button>
            <button onClick={() => goToForm(navigate, "Form")}>Inscrever-se</button>
            <p>Lista De Viagens</p>
            <div>
            
            </div>
        </Divzona>
    )
}