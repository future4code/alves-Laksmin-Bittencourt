import React, { useState, useEffect, useSyncExternalStore } from "react";
import styled from "styled-components";
import axios from "axios";



const Divona = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 2%; 
    background-color: #f9fb05;
    background-image: linear-gradient(180deg, #f9fb05 0%, #f59104 50%, #f50606 100%);

`
const CardMatch = styled.div`
    height: 100%;
    width: 100%;
    max-width: 370px;
    max-height: 600px;
    border: 3px purple solid;
    border-radius: 40px;
    box-shadow: 5px 5px 7px 5px purple;
    margin-top: 2%;
`
const Headerzin = styled.header`
    text-align: center;
    display: flex;
    justify-content: space-between;

button {
    background-color: purple;
    border-radius: 5px;
    margin-bottom: 15px;
    height: 40px;
    width: 70px;
    margin-top: 20px;
    margin-right: 30px;
    text-align: center;
   
}

h1 {
    margin-left: 20px;
}

`


const Image = styled.img`
width:85%;
height:15rem;
object-fit:cover;
border-radius:0.6rem;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; margin-top:0.5rem;
margin-left: 2rem ;
margin-left: 2rem;
`
const Section = styled.section `
 display: flex;
 flex-direction: column;
 height: 550px;
 margin-left: 2rem;
 margin-right: 2rem;
p {
    font-size: 1.1rem;
    color: black;
}
`

const SectionButton = styled.section `
display: flex;
justify-content: space-between;
width:300px;
height: 50px;
margin-top: 0px;
border-top: 0px solid  rgb(196, 126, 242);
align-items: center;
Button {
   background-color: purple;
   border: solid 2px black;
   border-radius: 5px;
   margin-bottom: 5px;
}`

export default function Perfis(props) {

    const [users, setUsers] = useState({})

    const getUsers = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:laksmin/person'
        ).then((res) => {
            console.log(res.data)
            setUsers(res.data.profile)

        }).catch((err) => {
            console.log(err)
        })
    
    }

    const escolherMatch = (id) => {
        const body = {

            id: id,
            choice: true
        }
    
        axios
        .post(
           'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:laksmin/choose-person', body)
        
           .then((res) => {
           if (res.data.isMatch){
             alert(`Deu Match ${users.name}`)

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

            <CardMatch>

                <Headerzin>
                    <h1>astroMatch</h1>
                    <button onClick={() => props.irParaMatches()}>Seus Matches</button>
                </Headerzin>
                <hr/>
                <Image src={users.photo} alt={users.name}/>
                
                <Section>

                <h2>Nome: {users.name}</h2>
                <h3>Idade: {users.age}</h3>
                <p>Biografia: {users.bio}</p>
                
                <SectionButton>
                
                <button onClick={() => {escolherMatch(users.id)}}>Match</button>
                <button onClick={() => {getUsers()}}>Próximo</button>
                
                </SectionButton>

                </Section>


            </CardMatch>

        </Divona>
    )
}

