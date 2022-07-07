import React from 'react';
import Post from './components/Post';
import { useState } from "react";
import laks from "./img/laks.jpg";

export default function App() {

  return (
    <>
      <h1>Post</h1>
      <Post
        nomeUsuario={'Lakshmi'}
        fotoUsuario={'https://picsum.photos/200/300'}
        fotoPost={'https://picsum.photos/200/300'}
      />
    </>
  );
};

