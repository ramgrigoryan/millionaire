import { HelperButton, HelpersContainer } from "./helpoptions.style";
import { fiftyFifty } from "../../features/gameSlice/gameSlice";
import { useDispatch } from "react-redux";
const HelpOptions = () => {
  const dispatch = useDispatch();
  return (
    <HelpersContainer>
      <HelperButton onClick={()=>dispatch(fiftyFifty())}>50/50</HelperButton>
      <HelperButton>Audience</HelperButton>
      <HelperButton>Call a friend</HelperButton>
    </HelpersContainer>
  );
};

export default HelpOptions;
