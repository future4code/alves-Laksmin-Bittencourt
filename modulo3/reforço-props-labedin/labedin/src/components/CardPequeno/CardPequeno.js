import React from 'react';
import styled from 'styled-components';

const CardPequenoStyled = styled.div`
display: flex;
border: solid black 1px;
`
const Div = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding: 20px 10px;
width: 550px;
strong {
    

}
`

function CardPequeno(props) {
    return (
        <CardPequenoStyled>
            <Div>
            <strong>{props.nome}</strong> 
            <p>{props.email}</p>
            
            <strong>{props.nome2}</strong> 
            <p>{props.endereço}</p>
            </Div>
        </CardPequenoStyled>
    )
}

export default CardPequeno;