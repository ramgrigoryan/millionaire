import { HelperButton, HelpersContainer } from "./helpoptions.style";
import { fiftyFifty,audience, callAFriend } from "../../features/gameSlice/gameSlice";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import audienceHelper from "../../utils/helpers/audience";
import friendCall from "../../utils/helpers/friendCall";
const HelpOptions = () => {
  const currentQuestion = useSelector((state) => state.game.currentQuestion);
  const [showFifty, setShowFifty] = useState(true);
  const [showAudition,setShowAudition] = useState(true);
  const [shawCall,setShawCall] = useState(true);
  const dispatch = useDispatch();
  return (
    <HelpersContainer>
      <HelperButton
        onClick={() => {
          setShowFifty(false);
          dispatch(fiftyFifty(currentQuestion));
        }}
        style={
          !showFifty ? { "visibility": "hidden" } : { "visibility": "display" }
        }
      >
        50/50
      </HelperButton>
      <HelperButton style={
          !showAudition ? { "visibility": "hidden" } : { "visibility": "display" }
        } onClick={()=>{
        setShowAudition(false);
        dispatch(audience({
          status:false,
          votes:audienceHelper(currentQuestion) 
        }));
      }}>Audience</HelperButton>
      <HelperButton style={
          !shawCall ? { "visibility": "hidden" } : { "visibility": "display" }
        } onClick={()=>{
          setShawCall(false);
          dispatch(callAFriend({status:false, answer: friendCall(currentQuestion)}))}}>Call a friend</HelperButton>
    </HelpersContainer>
  );
};

export default HelpOptions;
