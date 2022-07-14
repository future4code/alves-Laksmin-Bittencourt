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

    const onSubmitLogin = () => {
        console.log(email, password)
        
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/login', body
        ).then((response) => {
            console.log('Olá!:', response.data)
        
        }).cath((err) => {
            console.log('Ops!:', err.response)
        })
    }

    return(

        <Divzona>
            <h1>Login</h1>
            <div>
                <input 
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                
                />

                <input 
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                
                />
            </div>
            <button onClick={() => goBackAgain(navigate, -1)}>Voltar</button>
            <button onClick={onSubmitLogin}>Entrar</button>
        </Divzona>
    )
}