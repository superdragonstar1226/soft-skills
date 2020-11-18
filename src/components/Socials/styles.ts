import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.footer`
  background-color: #e2edff;
  width: 250px;
  height: 60px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #784ea7;
  transition: color 0.4s;

  svg {
    &:hover {
      color: ${shade(-0.4, "#784EA7")};
    }
  }
`;
