import {Header} from "./assets/styles/Headers/HeaderStyle";
import styled from "styled-components";


const FullScreen = styled.div`
  margin: 0vw;
  min-height: 100vh;
  max-width: 100vw;
  background-color: black;
`

const App = () => {
  return (
   <FullScreen>
      <Header>

        
        <h1>Search for a Github user...</h1>
        <h1>Search</h1>
        <h1>History</h1>
        
      </Header>
   </FullScreen>
  )
}

export default App;
