import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #305DFE;
    --blue: #0F41F5;
    
    --light-pink: #FF668B;
    --pink: #F41A4F;

    --light-white: #F9F9F9;
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

  .pointer:hover{
    cursor: pointer;
  }
  

}`;

export const LoginStyle = styled.body`
  body{
    background: url('/images/background.svg'), linear-gradient(116.82deg, #f41a4f 0%, rgba(254, 69, 114, 0) 100%);
    background-position: top right;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }
}`;
