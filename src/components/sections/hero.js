import React from 'react'
import { Erin } from '../../images/erin';
import styled from "styled-components";


const Title = styled.h1`
    font-size: 72px;
    margin: 0px;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

`

export const Hero = () => (
    <Center>
    <Erin/>
    <Title>Hi! I’m <span>Erin.</span></Title>
    <h2>designer / developer</h2> 
    </Center>
)