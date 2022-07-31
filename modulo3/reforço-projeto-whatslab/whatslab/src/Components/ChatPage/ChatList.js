import React from "react";
import styled from "styled-components";

const CardMsg = styled.div`
border: solid black 2px;
border-radius: 15px;
display: flex;
flex-direction: column;
margin-top: 15px;
margin-left: 23px;
margin-right: 10px;
width: 350px;
height: 350px;
position: absolute;

h3{
    color: black;
}

p{
    color: grey;
}
`

function ChatList(props) {

    return(

        <CardMsg>
            <h3>{props.nameUser}</h3>
            <p>{props.msgValue}</p>
        </CardMsg>

    )

}
export default ChatList;