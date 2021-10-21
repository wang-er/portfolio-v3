import React from 'react';
import { erinNoir, erinRed } from '../styles/colors';
import styled, { keyframes } from "styled-components";

export const ErinSVG = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.66 82.11" height="52vh">
        <g id="Layer_2" data-name="Layer 2">
            <g id="face">
                <g id="right_eye" data-name="right eye">
                    <circle fill={erinNoir} class="clss-1 blink" cx="44.7" cy="40.6" r="3.15" />
                </g>
                <g id="left_eye" data-name="left eye">
                    <circle fill={erinNoir} class="clss-1 blink" cx="20.7" cy="40.6" r="3.15" />
                </g>
                <g id="nose">
                    <rect fill={erinNoir} class="clss-1" x="28.82" y="50.1" width="7.75" height="3" />
                </g>
                <g id="right_brow" data-name="right brow">
                    <rect fill={erinNoir} class="clss-1" x="44.2" y="27.62" width="3" height="10.4" transform="translate(4.74 71.38) rotate(-78.96)" />
                </g>
                <g id="left_brow" data-name="left brow">
                    <rect fill={erinNoir} class="clss-1" x="14.09" y="31.32" width="10.4" height="3" transform="translate(-5.93 4.3) rotate(-11.04)" />
                </g>
                <g id="smile">
                    <path fill={erinNoir} class="clss-1" d="M32.7,65.06a14.07,14.07,0,0,1-10-4.15l2.12-2.12a11.15,11.15,0,0,0,15.78,0l2.12,2.12A14.06,14.06,0,0,1,32.7,65.06Z" />
                </g>
            </g>
            <g id="head">
                <path fill={erinNoir} d="M64.65,32.29A32.32,32.32,0,0,0,0,32.33v11s0,.07,0,.11,0,.07,0,.11v6.15H0V82.11H21.46V73.93q1.24.44,2.53.79a32.4,32.4,0,0,0,16.68,0c1-.26,1.94-.57,2.87-.92l.26-.08v8.4H64.66V32.29ZM32.33,72.8a29.17,29.17,0,0,1-10.55-2q-.92-.35-1.8-.77A29.53,29.53,0,0,1,7.84,59.58v-19H7.72L22.64,19.36l35,23,0,10.1,0,5.88-.41.68A29.54,29.54,0,0,1,46.26,69.28,29.45,29.45,0,0,1,32.33,72.8Z" />
            </g>
            <g id="glasses">
                <path fill={erinRed} class="clss-2" d="M28.35,46.61H9v-12H28.35ZM11,44.61H26.35v-8H11Z" />
                <path fill={erinRed} class="clss-2" d="M56.35,46.61H37v-12H56.35ZM39,44.61H54.35v-8H39Z" />
                <rect fill={erinRed} class="clss-2" x="27.35" y="39.6" width="10.69" height="2" />
            </g>
        </g>
    </svg>
);

// Create the keyframes
const blink = keyframes`
19% { transform: translate(0px) scaleY(1)}
  20% { transform: translate(0px, 39px) scaleY(0.05)}
  21% { transform: translate(0px) scaleY(1)}
  70% { transform: translate(0px) scaleY(1)}
  71% { transform: translate(0px, 39px) scaleY(0.05)}
  72% { transform: translate(0px) scaleY(1)}
  74% { transform: translate(0px) scaleY(1)}
  75% { transform: translate(0px, 39px) scaleY(0.05)}
  76% { transform: translate(0px) scaleY(1)}
`;

export const ErinSVGDiv = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 30px;


#right_eye, #left_eye{
    animation-name: ${blink};
    animation-duration: 8s;
    animation-iteration-count: infinite;
}

#left_brow, #right_brow {
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}
svg {
    max-width: 300px;
    max-height: 400px;

    &:hover #left_brow, &:hover #right_brow {
        transform:translate(0px,-2px);
    }
}
`

export const Erin = (props) => {
    return (
        <ErinSVGDiv>
            <ErinSVG/>
        </ErinSVGDiv>
    );
};