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

export default function LoginPage() {
    return(

        <Divzona>
            <h1>Login</h1>
            <div>
                <input placeholder="E-mail"></input>
                <input placeholder="Senha"></input>
            </div>
            <button>Voltar</button>
            <button>Entrar</button>
        </Divzona>
    )
}