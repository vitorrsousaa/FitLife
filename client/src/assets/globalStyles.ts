import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #c75c07;
    --secondary: #FFA800;
    --black: #252525;
    --gray: #3A3A3C;
    --gray-100: #FAFAFA;
    --white: #F5F5F5;
    --error: #FF2424;
  }

  *{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
    font-family: 'Urbanist', sans-serif;

    color: var(--gray-100) ;
    font-weight: 400 ;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93,75%;
      }

    @media (max-width: 720px) {
      font-size: 87,5%;
      }
    }

  button {
    cursor: pointer ;
  }

  body {
    background: var(--black) ;
  }


`;
