import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/nattu-adnan-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: #e3e3e3;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Verdana;
    background-image: linear-gradient(180deg, #0085a3, #8987ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    font-size: 22px;
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #b7b5b5);
    border: 2px solid #757575;
    box-shadow: 0px 5px 10px #9f9f9f;
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 50px;
  }

  .start {
    max-width: 200px;
  }
`;
