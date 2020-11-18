import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  header {
    display: flex;

    ul {
      display: flex;
      justify-content: space-between;

      a {
        list-style: none;
        margin: 0 14px;
        color: #6b727a;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.8, "#6b727a")};
          text-decoration: underline;
        }
      }
    }
  }
`;
