import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import ChatList from './Components/ChatPage/ChatList';
import fundoDeTela from './img/fundoDeTela.jpg';


const MainContainer = styled.main`
  border: solid green 10px;
  background-color: black;
  border-radius: 50px;
  width: 500px;
  height: 550px;
  margin-top: 30px;
  margin-left: 405px;
  position: relative;
`
const CardInputs = styled.div`
  background-color: green;
  border: solid green 5px;
  border-radius: 15px;
  height: 45px;
  width: 400px;
  margin-top: 20px;
  margin-left: 45px;
  display: flex;
  text-align: center;

input{
  background-color: #bdaead;
  border: solid #181717 2px;
  border-radius: 15px;
}

button{
  color: gey;
  border: solid #181717 2px;
  border-radius: 15px;
  background-color: #bdaead;
  width: 50px;
  text-align: center;
}
`
const MsgBlock = styled.div`
  background: url(${fundoDeTela});
  border: solid green 5px;
  border-radius: 25px;
  height: 385px;
  width: 400px;
  margin-top: 39px;
  margin-left: 45px;
`

function App(props) {

  const [message, setMessages] = useState([ ])

  const renderMessage = message.map((item, index) => {
  
    return <ChatList key={index}>    nameUser = {item.nameUser} messageUser = {item.msgValue}   </ChatList>
               
  })  

  const [users, setUsers] = useState(" ")
  const [messageValue, setMessageValue] = useState(" ")

  const addMessage = () => {

    let messages = {
      nameUser: users,
      msgValue: messageValue
    }  

    let copiaMessages = [...message, messages]

    setMessages(copiaMessages)
  }

  const onChangeUser = (e) => {
    setUsers(e.target.value)
  }

  const onChangeMessageValue = (e) => {
    setMessageValue(e.target.value)
  }

  return (
    <MainContainer>

      <MsgBlock>
        {renderMessage}
      </MsgBlock>

      <CardInputs>
       
        <input
          value={users}
          onChange={onChangeUser}
          placeholder={"User"}
          
        />
          
        <input
          value={messageValue}
          onChange={onChangeMessageValue}
          placeholder={"Message"}
          
        />
        
        <button onClick={addMessage}>SEND</button>
      </CardInputs>

    </MainContainer>
  );
}
export default App;
