import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #305DFE;
    --blue: #0F41F5;
    
    --light-pink: #FF668B;
    --pink: #F41A4F;

    --light-white: #fefefe;
    --medium-white: #F7F7F7;
    --white: #F2F2F2;

    --secondary-gray: #888888;
    --lighter-gray: #979797;
    --light-gray: #404040;
    --medium-gray: #3E3E3E;
    --gray: #333333;

    --black: #000000;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
  }

  body {
    background-color: var(--light-white);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .link {
    text-decoration: underline;
  }

  .link:hover{
    cursor: pointer;
  }
  
  .pointer:hover{
    cursor: pointer;
  }

  .skeleton {
    background: linear-gradient(-45deg, #DDDDDD, #F0F0F0, #DDDDDD, #F0F0F0);
    background-size: 400% 400%;
    -webkit-animation: Gradient 2.25s ease infinite;
    -moz-animation: Gradient 2.25s ease infinite;
    animation: Gradient 2.25s ease infinite;
  }
  
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  

}`;

export const LoginStyle = createGlobalStyle`
  body{
    background: url('/images/background.svg'), linear-gradient(116.82deg, #f41a4f 0%, rgba(254, 69, 114, 0) 100%);
    background-position: top right;
    background-repeat: no-repeat;
    background-size: auto 100%;
    width: 100%;
    height: 100vh;
  }
`;

export const HomeStyle = createGlobalStyle`
  body {
    background-color: var(--light-white);
  }
`;
