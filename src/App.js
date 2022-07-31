import { useEffect } from "react";
import { AppContainer, StartButton, LinkStyled } from "./App.style";
import { useDispatch, useSelector } from "react-redux/";
import { fetchQuestions } from "./features/gameSlice/gameSlice";
import randomQuestionHelper from "./utils/helpers/randomNum";
import { addCurrentQuestion } from "./features/gameSlice/gameSlice";
const App = () => {
  const status = useSelector((state) => state.game.status);
  const randomQuestion = randomQuestionHelper();
  const dispatch = useDispatch();
  useEffect(() => {
    status === "idle" && dispatch(fetchQuestions());
  });
  return (
    <AppContainer className="App">
      <LinkStyled to={randomQuestion.toString()}>
        <StartButton onClick={()=>dispatch(addCurrentQuestion(randomQuestion))}>Start</StartButton>
      </LinkStyled>
    </AppContainer>
  );
};

export default App;
