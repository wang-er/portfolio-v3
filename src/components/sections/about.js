import React from 'react'
import styled from "styled-components";
import { erinBlack, erinWhite } from '../../styles/colors';

const AboutGrid = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
    margin: 175px 0px;
`
const AboutImage = styled.img`
    max-width: 40%;
    object-fit: contain;
    padding: 15px;
    box-sizing: border-box;
`

const AboutText = styled.div`
    max-width: 60%;
    padding-left: 10px;
`

export const About = () => (
    <AboutGrid>
        <AboutImage src="https://cdn.discordapp.com/attachments/336008480022593536/915659703676198952/unknown.png"/>
        {/* <AboutImage src="https://cdn.discordapp.com/attachments/464251241766322176/836390150945898496/ErinWang.jpg"/> */}
        <AboutText>
            <h1>more about <span>me</span></h1>
            <p>
                Hi! I’m Erin Wang, a creative web designer who’s interested in creating fun, memorable, and accessible experiences for all ages!
                I have dabbled in a variety of fields such as AR/VR, Mobile Development, UX/UI research, and project leadership.
                My most comfortable moments reside in designing front end screens with Figma and making them a reality in React.
            </p>
            <p>I am a creator, even outside of work. I love being able to create something new and wonderful.
                I’ve had a hand at sewing, crocheting, cake decorating, and using resin.</p>
            {/* <p>
                <a href="">Resume</a> / <a href=""></a> / <a href="">LOL</a> 
            </p> */}

        </AboutText>
    </AboutGrid>
)