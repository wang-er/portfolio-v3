import React from 'react'
import { Erin } from '../images/erin';
import styled from "styled-components";


const Title = styled.h1`
    font-size: 72px;
`

const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Hero = () => (
    <Center>
    <Erin/>
    <Title>Hi! I’m <span>Erin.</span></Title>
    <h2>ux / ui / developer</h2> 
    </Center>
)