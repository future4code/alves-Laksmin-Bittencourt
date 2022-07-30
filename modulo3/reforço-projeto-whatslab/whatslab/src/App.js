import './App.css';
import React, { useState } from 'react';
import ChatList from './Components/ChatPage/ChatList.js';
import styled from 'styled-components';

const MainContainer = styled.main`
  border: solid black 2px;
  width: 500px;
  height: 500px;
  margin-top: 50px;
`

export default function App() {

  const [message, setMessages] = useState([{ }])
  const [inputUsers, setInputUsers] = useState(" ")
  const [inputMessageValue, setInputMessageValue] = useState(" ")

  const onChangeInputUser = (e) => {
    setInputUsers(e.targe.value)
  }

  const onChangeInputMessage = (e) => {
    setInputMessageValue(e.targe.value)
  }

  const newMessage = {
    user: inputUsers,
    message: inputMessageValue
  }

  const newMessages = [...message, newMessage]

  const attMessages = () => {
   setMessages(newMessages)
   setInputUsers( " ")
   setInputMessageValue(" ")
  }

  const messageList = message.map((messages, index) => {
      
    return(
      
      <ChatList key={index}
      nameUSer = {messages.user}
      valueMessage = {messages.message}
      />
      
    )
    
  })

  return (
    <MainContainer>
      
      <div>
        {messageList}
      </div>

      <div>
        <input
          value={inputUsers}
          onChange={onChangeInputUser}
          placeholder={"User:"}
          type="text"
        >User</input>
          
        <input
          value={inputMessageValue}
          onChange={onChangeInputMessage}
          placeholder={"Message:"}
          type="text"
        >Message</input>
        
        <button onClick={attMessages}>Send</button>
      </div>

    </MainContainer>
  );
}

