import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  background-image: url("https://printcessandpuddinvinyl.com/wp-content/uploads/2019/08/galaxy-dark-blue-scaled.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const WithdrawButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 140px;
  background-color: #c7c716;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
`;
export const PrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:600px;
  height:350px;
  background-color:#fff;
  color:$FFF;
`;
export const NewGame = styled.div`
  font-size:40px;
  background-color:#000;
  color:#FFF;
  width:450px;
  height:100px;
  border-radius:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`
export const DisplayCash = styled.div`
  font-size: 15px;
  text-align:center;
  padding-top:20px;
`