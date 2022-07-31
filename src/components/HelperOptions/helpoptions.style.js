import styled from "styled-components";

export const HelpersContainer = styled.div`
  align-self: center;
`;

export const HelperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url("https://img.freepik.com/free-vector/abstract-design-background-with-blue-purple-gradient_1048-13167.jpg?w=360");
  background-size:cover;
  background-repeat:no-repeat;
  width: 200px;
  height: 120px;
  border-radius: 50%;
  font-size: 35px;
  font-weight: bold;
  cursor:pointer;
  &:hover{
    background-image:none;
    background-color: rgba(75,0,130,0.7);
    color:#fff;
    font-size:150%;
    font-style:italic;
  }
  margin-bottom:15px;
  margin-right:10px
`;
