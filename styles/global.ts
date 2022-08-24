import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #305DFE;
    
    --pink: #FE4572;

    --light-white: #F7F7F7;
    --white: #F2F2F2;

    --light-gray: #404040;
    --gray: #333333;

    --black: #000000;
  }

  *{
    padding: 0;
    margin: 0;
    font-family: 'Poppins';
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .pointer:hover{
    cursor: pointer;
  }

  .mt-6{
    padding-top: 24px;
  }

}`;

export const LoginStyle = createGlobalStyle`
  body{
    background: url('/images/background.svg'), linear-gradient(116.82deg, #f41a4f 0%, rgba(254, 69, 114, 0) 100%);
    background-position: top right;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }
}`;
