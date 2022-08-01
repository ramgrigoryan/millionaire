import { HelperButton, HelpersContainer } from "./helpoptions.style";
import { fiftyFifty } from "../../features/gameSlice/gameSlice";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
const HelpOptions = () => {
  const currentQuestion = useSelector((state) => state.game.currentQuestion);
  const [showFifty, setShowFifty] = useState(true);
  const dispatch = useDispatch();
  return (
    <HelpersContainer>
      <HelperButton
        onClick={() => {
          setShowFifty(false);
          dispatch(fiftyFifty(currentQuestion));
        }}
        style={
          !showFifty ? { visibility: "hidden" } : { visibility: "display" }
        }
      >
        50/50
      </HelperButton>
      <HelperButton>Audience</HelperButton>
      <HelperButton>Call a friend</HelperButton>
    </HelpersContainer>
  );
};

export default HelpOptions;
