import {
  QuestionArea,
  QuestionsWrapper,
  SingleQuestion,
  GameQuestionsWrapper,
} from "./questions-container.style";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { numToLet } from "../../utils/helpers/indexToLetter";
import { addCurrentQuestion, refreshQuestions, updateCount } from "../../features/gameSlice/gameSlice";
import { useNavigate } from "react-router-dom";
import randomNum from "../../utils/helpers/randomNum";

const QuestionContainer = () => {
  const {currentQuestion,questions} = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nextQuestion = randomNum(questions.length-1);
  const leftIndexes = currentQuestion.leftIndexes;
  const { question, content, correct } = currentQuestion;
  return (
    <QuestionsWrapper>
      <QuestionArea>
        <p>{question}</p>
      </QuestionArea>
      <GameQuestionsWrapper>
        {content.map((q, i) => {
          if (leftIndexes.includes(i)) {
            return (
              <SingleQuestion onClick={() => {
                if(i===correct){
                  dispatch(refreshQuestions(currentQuestion.id));
                  dispatch(addCurrentQuestion(nextQuestion));
                  dispatch(updateCount());
                  navigate(`/${nextQuestion}`);
                }
                else{
                  dispatch(updateCount("lose"));
                }
              }} key={Math.random()}>
                <p>{`${numToLet(i)} ${q}`}</p>
              </SingleQuestion>
            );
          } else {
            return (
              <SingleQuestion
                style={{ pointerEvents: "none" }}
                key={Math.random()}
              >
                <p></p>
              </SingleQuestion>
            );
          }
        })}
      </GameQuestionsWrapper>
    </QuestionsWrapper>
  );
};
export default QuestionContainer;
