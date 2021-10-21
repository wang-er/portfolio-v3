import React from 'react'
import styled from "styled-components";
import { erinBlack, erinWhite } from '../../styles/colors';
import { PortfolioPiece } from '../portfolio-piece';

const PortfolioGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    margin-bottom: 100px;

`

export const Portfolio = () => (
    <>
    <h1>my <span>work</span></h1> 
    <h3>interaction / dev</h3>
    <PortfolioGrid>
        <PortfolioPiece size ={3} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={1} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={1} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={3} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
    </PortfolioGrid>

    <h3>visual / graphic</h3>
    <PortfolioGrid>
        <PortfolioPiece size ={2} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={2} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={1} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
        <PortfolioPiece size ={3} title="Huntington Angels Network" tags={["lol", "test"]} previewImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
    </PortfolioGrid>


    </>
)