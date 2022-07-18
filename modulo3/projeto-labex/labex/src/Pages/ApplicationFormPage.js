import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/Cordinator";
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

export default function ApplicationFormPage() {

    const navigate = useNavigate()

    const [form, setForm] = useState({name: " ", age: " ", applicationText: " ", profession: " ", country: " ", id: " "})

    const [planetas, setPlanetas] = useState(" ")

    const onChangeSelect = (event) => {

        const {value} = event.target

        setPlanetas({...planetas, value})
    }

    const onChange = (event) => {

        // const name = event.target.name
        // const value = event.target.value
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    const ApplyToTrip = (event) => {
        event.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/laksmin/trips/6W90uls88kSIvVoAABl4/apply', form
        ).then((res) => {
            console.log(res.data)
        
        }).catch((err) => {
            console.log(err)
        })
    }

    return(

        <Divzona>
        
            <button onClick={() => goBack(navigate, "/")}>Voltar</button>
            
            <h1>Inscreva-se para uma viagem</h1>

            <form onSubmit={ApplyToTrip}>

                <select
                name="id"
                value={planetas}
                onChange={onChangeSelect}>

                <option value={"SunnyDale"}>Namekusei</option>
                <option value={"Marte"}>Marte</option>
                <option value={"Jupter"}>Jupter</option>
                <option value={"Cerus"}>Vegeta</option>
                <option value={"Saturno"}>Saturno</option>
                <option value={"Netuno"}>Netuno</option>

                </select>

                <input placeholder="Nome"
                name="name"
                value={form.name}
                onChange={onChange}
                type="name"
                required
                >
                </input>

                <input placeholder="age"
                name="age"
                value={form.age}
                onChange={onChange}
                required
                >Idade
                </input>

                <input placeholder="Texto de Candidatura"
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                required
                >
                </input>

                <input placeholder="Profissão"
                name="profession"
                value={form.profession}
                onChange={onChange}
                required
                >
                </input>

                <input placeholder="País"
                name="country"
                pattern={"[A-Z]{3}"}
                title="Codigo do Pais (BRA, USA, FRA)"
                value={form.country}
                onChange={onChange}
                required
                >
                </input>

                <button>Enviar</button>
            </form>
            
        </Divzona>
    )
}