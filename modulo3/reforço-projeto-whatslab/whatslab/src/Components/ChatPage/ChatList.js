import React from "react";
import styled from "styled-components";

const CardMsg = styled.div`
border: solid grey 1px;
background-color: #bdaead;
border-radius: 25px;
margin-top: 250px;
margin-left: 23px;
margin-right: 10px;
width: 350px;
height: 100px;
position: absolute;

h3{
    color: black;
    margin-left: 20px;
}

p{
    color: black;
    margin-left: 20px;

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