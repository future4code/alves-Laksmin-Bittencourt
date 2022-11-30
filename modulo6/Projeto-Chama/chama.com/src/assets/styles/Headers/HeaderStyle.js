import styled from "styled-components";

export const Header = styled.header`

    display: flex;
        align-items: center;
        height: 10vh;
        padding: 0 4%;
        gap: 2%;
        background-color: #161b22;
        box-shadow: 0px 1px 20px #030508;
        img{ 
            height: 5vh;
            cursor: pointer;
        }
        @media screen and (max-width: 770px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 4vh;
            }
        }

`


