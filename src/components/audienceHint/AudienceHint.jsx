import { useSelector } from "react-redux/es/exports";
import { numToLet } from "../../utils/helpers/indexToLetter";
import { AudienceContainer } from "./audienceHint.style";
const AudienceHint = ({ votes }) => {
  const leftIndexes = useSelector(
    (state) => state.game.currentQuestion.leftIndexes
  );
  console.log(votes)
  return (
    <AudienceContainer>
      {leftIndexes.map((candidate,index) => {
        return <h2 key={index}>
          {numToLet(candidate)} - {votes[index]}%
        </h2>;
      })}
    </AudienceContainer>
  );
};
export default AudienceHint;
