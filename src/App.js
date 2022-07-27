import { AppContainer, StartButton, LinkStyled } from "./App.style";

const App = () => {
  return (
    <AppContainer className="App">
      <LinkStyled to="game">
        <StartButton>Start</StartButton>
      </LinkStyled>
    </AppContainer>
  );
};

export default App;
