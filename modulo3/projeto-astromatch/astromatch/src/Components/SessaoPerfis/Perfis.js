import React, { useState, useEffect, useSyncExternalStore } from "react";
import styled from "styled-components";
import axios from "axios";

const Divona = styled.div`
border: solid black;
`

export default function Perfis(props) {

    const [user, setUsers] = useState({})

    const getUsers = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:darvas/person'
        ).then((res) => {
            console.log(res.data)
            setUsers(res.data.profile)

        }).catch((err) => {
            console.log(err)
        })
    
    }

    const escolherMatch = (boolean) => {
        const body = {

            id: profile.id,
            choice: boolean
        }
    
        axios
        .post(
           'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:laksmin/choose-person', body)
        .then((res) => {
           if (res.data.isMatch){
             alert(`Deu Match ${user.name}`)

            }
        }).catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        getUsers()
    }, [])

    return(
        <Divona>

            <div>
                <h1>astroMatch</h1>
                <button onClick={() => props.irParaMatches()}>Seus Matches</button>
            </div>

            <div>
                <img src={user.photo} alt={user.name}/>
                <h2>Nome: {user.name}</h2>
                <h3>Idade: {user.age}</h3>
                <p>Biografia: {user.bio}</p>
                <hr/>
                <button onClick={() => {escolherMatch(user.id)}}>Match</button>
                <button onClick={() => {getUsers()}}>Próximo</button>
            </div>

        </Divona>
    )
}

