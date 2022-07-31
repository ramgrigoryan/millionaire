import HelpOptions from "../../components/HelperOptions/HelpOptions";
import { GameContainer } from "./game.style";
import QuestionContainer from "../../components/questionContainer/QuestionsContainer";
const Game = () => {
  return (
    <GameContainer>
      <HelpOptions  />
      <QuestionContainer/>
    </GameContainer>
  );
};
export default Game;
