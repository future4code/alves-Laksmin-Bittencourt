import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import App from "../../App";

const Divona = styled.div`
    margin-top: 60px;
    margin-left: 500px;
    margin-right: 445px;
    margin-bottom: 0px; 
    background-color: #f9fb05;
    background-image: linear-gradient(180deg, #f9fb05 0%, #f59104 50%, #f50606 100%);
button {
    height: 40px;
    width: 70px;
    background-color: purple;
    border-radius: 10px;
}
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
button {
    margin-right: 15px;
}
h1 {
    margin-left: 15px;
}
`

const CardMatches = styled.div`
    width: 400px;
    height: 500px;
    border: 3px purple solid;
    border-radius: 40px;
    box-shadow: 5px 5px 7px 5px purple;
    margin-top: 2%;

`

export default function Matches(props) {

    const [matchUsers, setMatchesUsers] = useState([])

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Laksmin/matches`
        
        ).then((res) => {
            setMatchesUsers(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
    }, [matchUsers])

    const displayMatch = matchUsers.map((person) => {
        return (
            <div>
                <img width={"150rem"} src ={person.photo} alt={person.name}/>
                <h4>{person.name}</h4>
            </div>
        )
    })

    const clear = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`
        
        ).then((res) => {
            console.log(res)
        
        }).catch((err) => {
            console.log(err)
        })
    }

    const onClickClear = () => {
        clear()
        alert('Busque Matches')
    }

    return(
        <Divona>

            <CardMatches>
                
            <Div>

                <h1>astroMatch</h1>
                <button onClick={() => props.irParaPerfis()}>Perfis</button>

                {displayMatch}

                

            </Div>

            <hr/>

            <button onClick={onClickClear}>Limpar Matches</button>
            </CardMatches>


        </Divona>
    )
}
