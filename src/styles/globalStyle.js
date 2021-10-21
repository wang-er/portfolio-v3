import styled, { createGlobalStyle } from "styled-components"
import { erinBlack, erinRed, erinRose } from "./colors"

import Cabin from '../../static/fonts/Cabin/Cabin-Regular.ttf';
import CabinItalic from '../../static/fonts/Cabin/Cabin-Italic.ttf';


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Cabin';
    src: local('Cabin'), local('Cabin'),
    url(${Cabin}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin'), local('Cabin'),
    url(${CabinItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
}

body {
    margin: 0px;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  small {
    font-family: 'Cabin', sans-serif;
    color: ${erinBlack};
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0px;
  }

  span {
    color: ${erinRed};
  }

  h1 {
    font-size: 60px;
    margin-bottom: 16px;

  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 32px;
    margin-bottom: 8px;
    letter-spacing: 1px;

  }

  p {
    font-size: 22px;
    letter-spacing: 1px;

  }

  small {
    font-size: 22px;
    font-style: italic;
    letter-spacing: 1px;
    color: ${erinRose}
  }
`
export default GlobalStyle

export const Tag = styled.span`
    font-size: 22px;
    letter-spacing: 1px;
    color: ${erinBlack};
`