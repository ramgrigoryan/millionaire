import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    width:100%;
    background-image:url("https://www.microids.com/wp-content/uploads/2020/10/WhoWantsToBeAMillionaire_keyart.jpg");
    background-repeat:no-repeat;
    background-size:cover;
`;
export const StartButton = styled.button`
height:45px;
width:140px;
background-color:#fff;
font-size:32px;
border-radius:8px;
font-weight:bold;
&:hover{
    cursor:pointer;
    background-color:#DDD;
}
`

export const LinkStyled = styled(Link)`
text-decoration:none;
`