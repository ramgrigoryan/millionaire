import { HelperButton, HelpersContainer } from "./helpoptions.style";
import { fiftyFifty } from "../../features/gameSlice/gameSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const HelpOptions = () => {
  const [showFifty,setShowFifty] =useState(true);
  const dispatch = useDispatch();
  return (
    <HelpersContainer>
      <HelperButton onClick={()=>{
        setShowFifty(false);
        dispatch(fiftyFifty())}} style={!showFifty?{"visibility":"hidden"}:{"visibility":"display"}}>50/50</HelperButton>
      <HelperButton>Audience</HelperButton>
      <HelperButton>Call a friend</HelperButton>
    </HelpersContainer>
  );
};

export default HelpOptions;
