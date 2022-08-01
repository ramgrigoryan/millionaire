import {
  QuestionArea,
  QuestionsWrapper,
  SingleQuestion,
  GameQuestionsWrapper,
} from "./questions-container.style";
import { useSelector } from "react-redux/es/exports";

const QuestionContainer = () => {
  const collection = useSelector((state) => state.game.currentQuestion);
  const leftIndexes = collection.leftIndexes;
  console.log(collection)
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
              <SingleQuestion key={Math.random()}>
                <p>{q}</p>
              </SingleQuestion>
            );
          } else {
            return <SingleQuestion
              style={{ "pointerEvents": "none" }}
              key={Math.random()}
            >
              <p></p>
            </SingleQuestion>;
          }
        })}
      </GameQuestionsWrapper>
    </QuestionsWrapper>
  );
};
export default QuestionContainer;
