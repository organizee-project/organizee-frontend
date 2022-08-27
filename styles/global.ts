import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #305DFE;
    
    --light-pink: #FF668B;
    --pink: #FE4572;

    --light-white: #F7F7F7;
    --white: #F2F2F2;

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

  .mb-6{
    margin-bottom: 24px;
  }

  .ml-3 {
    margin-left: 12px;
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

export const AddStyles = createGlobalStyle`
  body{
    background-color: var(--white);
  }
}`;
