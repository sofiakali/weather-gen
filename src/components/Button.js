import styled from "styled-components";

export default styled.button `
  width: 30%;
  padding: 14px 30px;
  font-size: 14px;
  border-radius: 0 24px 24px 0;
  color: white;
  font-weight: bold;
  background: #171717;
  border: none;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  transition: background .4s;

  &:hover {
      background: #ff9800;
      color: white;
  }
`;
