import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const UlButtons = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: azure;
    
  }

  button {
    width: 80%;
    max-width: 300px;
    padding: 10px;
    background-color: #c0c0c0;
    border-radius: 5px;
    border: none;
  }
`;
