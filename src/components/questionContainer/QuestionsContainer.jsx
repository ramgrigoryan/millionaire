import {
  QuestionArea,
  QuestionsWrapper,
  SingleQuestion,
  GameQuestionsWrapper,
} from "./questions-container.style";
import { useSelector } from "react-redux/es/exports";
import { numToLet } from "../../utils/helpers/indexToLetter";

const QuestionContainer = () => {
  const collection = useSelector((state) => state.game.currentQuestion);
  const leftIndexes = collection.leftIndexes;
  const { question, content } = collection;
  return (
    <QuestionsWrapper>
      <QuestionArea>
        <p>{question}</p>
      </QuestionArea>
      <GameQuestionsWrapper>
        {content.map((q, i) => {
          if (leftIndexes.includes(i)) {
            return (
              <SingleQuestion onClick={() => {}} key={Math.random()}>
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
