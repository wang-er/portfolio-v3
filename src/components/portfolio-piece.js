import { Link } from 'gatsby';
import React from 'react'
import styled from "styled-components";
import { erinRed, erinBlack, erinWhite } from '../styles/colors';
import { device } from '../styles/devices';
import { Tag } from '../styles/globalStyle';

export const PortfolioBlock = styled(Link)`
    display: flex;
    // flex-basis: 320px;
    flex-basis: ${props => (props.size ? `${props.size}%` : "50%")};
    flex-shrink:  2;
    flex-grow: 2;
    // flex-shrink: ${props => (props.size ? props.size : 1)};
    // flex-grow: ${props => (props.size ? props.size : 1)};
    background-image: ${props => (props.image ? `url("${props.image}")` : "none")};
    height: 240px;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: all 0.2s;
    &:hover div{
        opacity: 1;
    }

    ::after {
        height: 0;
    }

    @media ${device.mobile} {
        flex-basis: 100%;
        height: 180px;
    }
`

export const PortfolioHoverBlock = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    opacity: 0;
    background-color: ${erinWhite}; 
    background-clip: content-box;
    z-index: 100;
    position: absolute;
    transition: all 0.2s;
    padding: 20px;
`

export const PortfolioDescription = styled.div`
    padding: 15px;
`


export const PortfolioPiece = ({ title, tags, previewImage, size, slug }) => {
    // const { title, tags, previewImage, size, ...rest } = props;

    return (
        <PortfolioBlock image={previewImage} size={size} to={slug}>
            <PortfolioHoverBlock>
                <PortfolioDescription>
                    <h3 style={{color: erinRed}}>{title}</h3>
                    <div>
                        {tags.map(function (tag, index) {
                            return <Tag key={`${title}_tag_${index}`}>{(index ? ' / ' : '') + tag}</Tag>;
                        })}
                    </div>
                </PortfolioDescription>
            </PortfolioHoverBlock>
        </PortfolioBlock>
    )
}