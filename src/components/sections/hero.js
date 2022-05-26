import React from 'react'
import { Erin } from '../../../static/images/erin';
import styled from "styled-components";
import { device } from '../../styles/devices';


const Title = styled.h1`
    font-size: 72px;
    margin: 0px;
    
    @media ${device.mobile} {
        font-size: 60px;
    }
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;

`

export const Hero = () => (
    <Center>
    <Erin/>
    <Title>Hi! I’m <span>Erin</span></Title>
    <h2>and I love to develop designs.</h2> 
    </Center>
)