import styled from "styled-components";

export const QuestionsWrapper = styled.div`
  display: grid;
  color: #fff;
  background-image: url("https://c0.wallpaperflare.com/preview/295/366/449/milkyway-night-sky-star.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  grid-template-rows: 1fr 3fr;
  width: 70vw;
  height: 40vh;
  align-self: flex-end;
  border-radius: 50px;
`;
export const GameQuestionsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding:20px
`;
export const QuestionArea = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  align-items:center;
  padding:25px
`;
export const SingleQuestion = styled.div`
  display: flex;
  text-transform:capitalize;
  cursor:pointer;
  justify-content: center;
  align-items:center;
  font-size: 1.2em;
  border: 2px solid #fff;
  border-radius: 10px;
  padding:15px;
  &:hover{
    background-color:rgba(247, 255, 28,0.2)
  }
`;
