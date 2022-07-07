import React, { useState } from "react";
import styled from "styled-components";

const Divona = styled.div`
border: solid black;
`

export default function Matches(props) {

    return(
        <Divona>

            <div>
                
                <h1>astroMatch</h1>
                <button onClick={() => props.irParaPerfis}>Perfis</button>

            </div>
            

        </Divona>
    )
}
