import { Link } from 'gatsby';
import React from 'react'
import styled from "styled-components";
import { erinRed, erinBlack } from '../styles/colors';
import { Tag } from '../styles/globalStyle';

export const PortfolioBlock = styled(Link)`
    display: flex;
    flex-basis: 320px;
    flex-shrink: ${props => (props.size ? props.size : 1)};
    flex-grow: ${props => (props.size ? props.size : 1)};
    background-image: ${props => (props.image ? `url("${props.image}")` : "none")};
    background-color: ${erinBlack}; 
    height: 240px;
    position: relative;
    transition: all 0.2s;
    &:hover div{
        opacity: 1;
    }

    ::after {
        height: 0;
    }
`

export const PortfolioHoverBlock = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    opacity: 0;
    background-color: ${erinRed}; 
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
        <PortfolioBlock image={previewImage} size={size} to="/blog/my-first-post/">
            <PortfolioHoverBlock>
                <PortfolioDescription>
                    <h3>{title}</h3>
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