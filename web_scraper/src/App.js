import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import GameContainer from './GameContainer';
import './App.css';

const Background = styled.div`
  padding-top: 5rem;
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
    &:hover {
      cursor: default;
    }
  }
  h2 {
    font-size: 2rem;
    &:hover {
      cursor: default;
    }
  }
  h3 {
    font-size: 1.5rem;
  }
  li {
    margin-left: 7rem;
    font-size: 1.25rem;
    &:hover {
      cursor: default;
    }
  }
  p {
    font-size: 1.5rem;
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
