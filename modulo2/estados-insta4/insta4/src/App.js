import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      
        <Post
          nomeUsuario={'Julinha'}
          fotoUsuario={'https://this-person-does-not-exist.com/img/avatar-52cf1d275b1dc2a6a17f2f2a72ba711d.jpg'}
          fotoPost={'https://escolaeducacao.com.br/wp-content/uploads/2022/01/Snowball-750x420.jpg'}
        />
    
        <Post
          nomeUsuario={'Fernandinho'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgs_Iwz8ASn3ABg7PfPaipxz_OSenFUs55Bw&usqp=CAU'}
        />
      </MainContainer>
    );
  }
}

export default App;
