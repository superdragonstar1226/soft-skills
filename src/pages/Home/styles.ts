import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Info = styled.div`
  background-color: #061222;
  flex: 1;
  padding: 50px;

  h1 {
    color: #fff;
  }

  > div {
    background-color: #eff6ff;
    width: 185%;
    margin-top: 50px;
    border-radius: 8px;
    padding: 15px;
    height: 400px;
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-around;
      align-items: center;

      > a {
        display: flex;
        align-items: center;
        background: #3f3c57;
        padding: 15px;
        border-radius: 15px;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.2s;
        text-decoration: none;

        &:hover {
          background: ${shade(0.2, "#3f3c57")};
          color: ${shade(0.2, "#fff")};
        }

        svg {
          margin-left: 3px;
        }
      }
    }

    h2 {
      color: #2cc3b4;
    }

    p {
      color: #6b727a;
      max-width: 400px;
      text-align: center;
    }

    img {
      width: 400px;
      height: 300px;
      border-radius: 25px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  padding: 50px 0;
  font-size: 16px;
  text-align: center;
  justify-content: space-evenly;
`;
