import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #305DFE;
    
    --pink: #FE4572;

    --white: #F2F2F2;
    --gray: #333333;
    --black: #000000;
  }

  *{
    padding: 0;
    margin: 0;
  }

  a {
    color: var(--black);
    text-decoration: none;
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
