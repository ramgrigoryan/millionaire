import HelpOptions from "../../components/HelperOptions/HelpOptions";
import { GameContainer } from "./game.style";
import QuestionContainer from "../../components/questionContainer/QuestionsContainer";
import { useSelector } from "react-redux/es/exports";
import AudienceHint from "../../components/audienceHint/AudienceHint";
const Game = () => {
  const { status, votes } = useSelector(
    (state) => state.game.helpers.availableAudience
  );
  const call = useSelector(state=>state.game.helpers.availableCall);
  return (
    <GameContainer>
      {!status && <AudienceHint votes={votes} />}
      {!call.status && <h1 style={{"color":"#fff"}}>Your friend thinks that the answer is - {call.answer}</h1>}
      <HelpOptions />
      <QuestionContainer />
    </GameContainer>
  );
};
export default Game;
