import styled from "styled-components";

export const UlBtns = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
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
  gap: 15px;
  width: 100%;

  button {
    width: 80%;
    max-width: 400px;
    border: none;
    background-color: #e4cccb;
    border-radius: 7px;
    height: 60%;

    img {
      width: 80px;
      height: 60px;
    }
  }
`;

export const TextPinterest = styled.p`
  color: red;
`;

export const TextWhats = styled.p`
  color: green;
`;

export const TextInsta = styled.p`
  color: purple;
`;
