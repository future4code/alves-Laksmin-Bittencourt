import axios from "axios";
import React from "react";

export default function ResetButton (props) => {

    const clear = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`
        
        ).then((res) => {
        alert('Encontre seu Match')
        })
        props.getUsers()
        
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <button onClick={clear}> "Limpar Matches" </button>
    )

}