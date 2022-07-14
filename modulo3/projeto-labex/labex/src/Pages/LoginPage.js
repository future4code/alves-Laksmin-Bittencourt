import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { goBackAgain } from "../Routes/Cordinator"; 
import { useNavigate } from "react-router-dom";
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

export default function LoginPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
               
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/laksmin/login', body
        ).then((response) => {
            console.log('Olá!:', response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate("/Details")

        }).catch((err) => {
            console.log('Ops!:', err.response)
        })

        console.log(email, password)
    }

    return(

        <Divzona>

            <button onClick={() => goBackAgain(navigate, -1)}>Voltar</button>
            <h1>Login</h1>
            <form onSubmit={onSubmitLogin}>
                <input 
                    placeholder="E-mail"
                    type="email"
                    id="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                />

                <input 
                    placeholder="password"
                    type="password"
                    value={password}
                    id="password"
                    onChange={onChangePassword}
                    required
                />

                <button>Entrar</button>
            </form>
            
        </Divzona>
    )
}