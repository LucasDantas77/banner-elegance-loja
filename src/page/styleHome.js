import styled from "styled-components";

export const MainPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom,  #dddddd, #333333);

  img {
    width: 500px;
    height: 290px;
    @media (min-width: 768px) {
      width: 600px;
      height: 315px;
    }
  }
`;
