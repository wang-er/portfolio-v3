import React from 'react'
import styled from "styled-components";
import { erinBlack, erinWhite } from '../../styles/colors';

const ContactMessage = styled.h2`
    margin-top: 1em;
    margin-bottom: 5em;

`

export const Contact = () => (
    <>
            <h1>thanks for visiting!</h1>
            <ContactMessage>
                <a href="mailto:erinwang101@gmail.com">Send an email</a> or <a href="google.com">view my resume</a> if <br/> you want to do something together :)
            </ContactMessage>
    </>
)