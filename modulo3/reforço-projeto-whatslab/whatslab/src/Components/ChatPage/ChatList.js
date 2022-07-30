import React from "react";
import styled from "styled-components";

const CardChat = styled.div`
background-color: blanchedalmond;
border: solid black 3px;
border-radius: 15px;
width: 400px;
height: 400px;
margin-top: 30px;
margin-left: 49px;
`
const CardMsg = styled.div`
border: solid black 1px;
display: flex;
flex-direction: column;

`

function ChatList(props) {
    

    return(

        <CardChat>
            
            <CardMsg>
                <h3>{props.nameUser}</h3>
                <p>{props.valueMessage}</p>
            </CardMsg>

        </CardChat>
    )

}

export default ChatList;