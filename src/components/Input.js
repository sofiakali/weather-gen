import styled from "styled-components";

export default styled.input `
  width: 70%;
  padding: 12px 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
  border-radius: 24px 0 0 24px;
  border: none;
  transition: box-shadow .4s ease-out;

  &:active, 
  &:focus {
    box-shadow:inset 0px 0px 0px 2px #ff9800;
  }
`;
