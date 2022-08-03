import HelpOptions from "../../components/HelperOptions/HelpOptions";
import {
  GameContainer,
  WithdrawButton,
  PrizeContainer,
  NewGame,
  DisplayCash,
} from "./game.style";
import QuestionContainer from "../../components/questionContainer/QuestionsContainer";
import { useDispatch, useSelector } from "react-redux/es/exports";
import AudienceHint from "../../components/audienceHint/AudienceHint";
import prizeCount from "../../utils/helpers/prizeCount";
import { updateCount, resetGame,changeShowStatuses } from "../../features/gameSlice/gameSlice";
import { useNavigate } from "react-router-dom";
const Game = () => {
  const dispatch = useDispatch();
  const {audienceStatus,callStatus} = useSelector(
    (state) => state.game.showStatuses
  );
  let { votes } = useSelector((state) => state.game.helpers.availableAudience);
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
      {audienceStatus && <AudienceHint votes={votes} />}
      {callStatus && (
        <h1 style={{ color: "#fff" }}>
          Your friend thinks that the answer is - {call.answer}
        </h1>
      )}
      {prizes.status === "pending" && <HelpOptions />}
      {prizes.status === "pending" && <QuestionContainer />}
      {prizes.status === "pending" && (
        <WithdrawButton
          onClick={() => {
            dispatch(updateCount("withdraw"));
            dispatch(changeShowStatuses({ audienceStatus: false, callStatus: false }));
          }}
        >
          Withdraw Prize
        </WithdrawButton>
      )}
    </GameContainer>
  );
};
export default Game;
