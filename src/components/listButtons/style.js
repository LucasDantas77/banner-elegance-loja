import styled from "styled-components";

export const UlBtns = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 37px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  h2 {
    font-size: 28px;
    line-height: 30px;
    color: #e4cdcb;
    -webkit-text-stroke: 1px #000;
  }
`;

export const LiBtns = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;

  button {
    width: 70%;
    max-width: 400px;
    border: none;
    background-color: #fff;
    border-radius: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    &:hover {
      background-color: #000;
      color: #fff;

      a {
        color: #fff;
      }
    }

    a {
      font-size: 16px;
      letter-spacing: 2px;
      text-decoration: none;
      color: #000;
      width: 50%;
      max-width: 240px;
      padding: 10px;
    }

    @media (min-width: 768px) {
      height: 50px;
    }
  }
`;
