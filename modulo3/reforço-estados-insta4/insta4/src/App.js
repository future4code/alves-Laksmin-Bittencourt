import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputs = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`
function App(props) {

  const [post, setPost] = useState([
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Lakshmi",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Indio",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    }
  
  ])
  
  const listaDePosts = post.map((posts, index) => {
    return(
      <Post key={index}
      nomeUser = {posts.nomeUsuario}
      fotoUser = {posts.fotoUsuario}
      fotoPost = {posts.fotoPost}
      />
    )
  })

  const [inputUsuario, setInputUsuario] = useState(" ")
  const [inputFotoUsuario, setInputFotoUsuario] = useState(" ")
  const [inputFotoPost, setInputFotoPost] = useState(" ")

  const adicionaPost = () => {

    const novoPost = { 
    nomeUsuario: inputUsuario, 
    fotoUsuario: inputFotoUsuario,
    fotoPost: inputFotoPost
    }

    const novoPosts = [...post, novoPost]

    setPost(novoPosts)
  }

  const onChangeInputNome = (e) => {
    setInputUsuario(e.target.value)
  }

  const onChangeInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value)
  }

  const onChangeInputFotoPost = (e) => {
    setInputFotoPost(e.target.value)
  }

  return (
    <MainContainer>
      <Inputs>
      <input
        value={inputUsuario}
        onChange={onChangeInputNome}
        placeholder= {"Nome"}
      />

      <input
      value={inputFotoUsuario}
      onChange={onChangeInputFotoUsuario}
      placeholder= {"Foto de Perfil"}
      />

      <input
      value={inputFotoPost}
      onChange={onChangeInputFotoPost}
      placeholder= {"Post"}
      />

      <button onClick={adicionaPost}>Postar</button>
      </Inputs>

      <div>
        {listaDePosts}
      </div>
    </MainContainer>

    
  );
}

export default App;
