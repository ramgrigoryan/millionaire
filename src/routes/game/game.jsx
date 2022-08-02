import HelpOptions from "../../components/HelperOptions/HelpOptions";
import { GameContainer, WithdrawButton, PrizeContainer,NewGame,DisplayCash } from "./game.style";
import QuestionContainer from "../../components/questionContainer/QuestionsContainer";
import { useDispatch, useSelector } from "react-redux/es/exports";
import AudienceHint from "../../components/audienceHint/AudienceHint";
import prizeCount from "../../utils/helpers/prizeCount";
import { updateCount, resetGame } from "../../features/gameSlice/gameSlice";
import { useNavigate } from "react-router-dom";
const Game = () => {
  const dispatch = useDispatch();
  let { status, votes } = useSelector(
    (state) => state.game.helpers.availableAudience
  );
  const questionsArray = useSelector(state=>state.game.questions);
  const call = useSelector((state) => state.game.helpers.availableCall);
  const prizes = useSelector((state) => state.game.prizeCount);
  const navigate = useNavigate();
  return (
    <GameContainer>
      {(prizes.status === "withdraw" || prizes.status === "lose") && (
        <div>
          <PrizeContainer>
            <div>
              <NewGame
                onClick={() => {
                  navigate("/");
                  dispatch(resetGame());
                }}
              >
                Start a new game
              </NewGame>
              <DisplayCash>
                You win {prizeCount(prizes.rightAnswersCount, prizes.status)}
              </DisplayCash>
            </div>
          </PrizeContainer>
        </div>
      )}
      {!status && <AudienceHint votes={votes} />}
      {!call.status && (
        <h1 style={{ color: "#fff" }}>
          Your friend thinks that the answer is - {call.answer}
        </h1>
      )}
      <HelpOptions />
      {questionsArray.length>0 &&<QuestionContainer />}
      <WithdrawButton
        onClick={() => {
          dispatch(updateCount("withdraw"));
        }}
      >
        Withdraw Prize
      </WithdrawButton>
    </GameContainer>
  );
};
export default Game;
