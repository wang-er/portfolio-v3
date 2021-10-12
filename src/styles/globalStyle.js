import { createGlobalStyle } from "styled-components"
import { erinBlack, erinRed } from "./colors"

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
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
  }

  h2 {
    font-size: 40px;
}
`
export default GlobalStyle