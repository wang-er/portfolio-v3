import styled, { createGlobalStyle } from "styled-components"
import { erinBlack, erinRed, erinRose, erinWhite } from "./colors"

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
    background-color: ${erinWhite};
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  span,
  small,
  a {
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

    a {
      ::after {
        height: 3px;
      }
    }
  }

  p, li{
    font-size: 22px;
    letter-spacing: .5px;
    padding: .35em 0 .75em;

    a::after {
      height: 0.1em;
      
    }
  }


  a {
    letter-spacing: inherit;
    font-weight: 800;
    text-decoration: none;
    transition: all 0.15s ease;
    color: ${erinRed};
    position: relative;

    &:hover {
      color: ${erinRed};
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: ${erinRed};
      transition: all 0.15s ease;
      opacity 1;
      transform: scaleX(0);
      transform-origin: left;
    }
  
    &:hover::after,
    &:focus::after {
      transform: scaleX(1);
    }
  }

  small {
    font-size: 22px;
    font-style: italic;
    letter-spacing: 1px;
    color: ${erinRose};
  }
`
export default GlobalStyle

export const Tag = styled.span`
    font-size: 22px;
    letter-spacing: 1px;
    color: ${erinBlack};
`