import './App.css';
import { useState } from 'react';
import ChatList from './Components/ChatPage/ChatList.js';
import styled from 'styled-components';

const MainContainer = styled.main`
  border: solid black 5px;
  background-color: black;
  border-radius: 10px;
  width: 500px;
  height: 550px;
  margin-top: 30px;
  margin-left: 405px;
`
const CardInputs = styled.div`
  background-color: green;
  border: solid green 5px;
  border-radius: 15px;
  height: 45px;
  width: 400px;
  margin-top: 30px;
  margin-left: 45px;
  display: flex;

input{
  background-color: blanchedalmond;
  border-radius: 15px;
}

button{
  border-radius: 15px;
  background-color: green;
  
}
`

export default function App(props) {

  const [message, setMessages] = useState([{ }])
  const [users, setUsers] = useState(" ")
  const [messageValue, setMessageValue] = useState(" ")

  const handleUser = (e) => {
    setUsers(e.target.value)
  }
  const handleMessage = (e) => {
    setMessageValue(e.target.value)
  }

  const addMessage = () => {
    const messages = {
      users,
      messageValue

    }

    const newMessages = [...message, messages]
    setMessages(newMessages)
  }

  return (
    <MainContainer>

      {message.map((messages) => {
      
        return(
              
          <ChatList>

            <h3>{messages.users}</h3>
            <p>{messages.messageValue}</p>

          </ChatList>
              
        )
            
      })}

      <CardInputs>
       
        <input
          value={users}
          onChange={handleUser}
          placeholder={"User"}
          type="text"
        />
          
        <input
          value={messageValue}
          onChange={handleMessage}
          placeholder={"Message"}
          type="text"
        />
        
        <button onClick={addMessage}>Send</button>
      </CardInputs>

    </MainContainer>
  );
}

