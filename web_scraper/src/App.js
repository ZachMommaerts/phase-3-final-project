import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import GameContainer from './GameContainer';
import './App.css';

const Background = styled.div`
  height: 100vh;
  background-color: #1C1C1C;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Assistant', sans-serif;
  }
  h1 {
    font-size: 5rem;
    color: #EDEDED;
    font-family: 'Fugaz One', cursive;
  }
`

function App() {
  return (
    <Background>
      <GlobalStyle />
      <Header />
      <GameContainer />
    </Background>
  );
}

export default App;
