import styled from "styled-components";

export const HelpersContainer = styled.div`
  align-self: center;
`;

export const HelperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6e3fbf;
  width: 200px;
  height: 120px;
  border-radius: 50%;
  font-size: 35px;
  font-weight: bold;
  cursor:pointer;
  &:hover{
    background-color: #6226c9;
    font-size:150%;
    font-style:italic;
  }
  margin-bottom:15px;
`;
