import {
  QuestionArea,
  QuestionsWrapper,
  SingleQuestion,
  GameQuestionsWrapper
} from "./questions-container.style";
import { useSelector } from "react-redux/es/exports";

const QuestionContainer = () => {
  const collection = useSelector(state=>state.game.currentQuestion);
  const {question,content} = collection;
  return (
    <QuestionsWrapper>
      <QuestionArea>
        <p>{question}</p>
      </QuestionArea>
      <GameQuestionsWrapper>
        {content.map(q=><SingleQuestion key={Math.random()}>
          <p>{q}</p>
        </SingleQuestion>)}
      </GameQuestionsWrapper>
    </QuestionsWrapper>
  );
};
export default QuestionContainer;
