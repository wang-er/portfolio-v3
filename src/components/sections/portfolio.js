import React from 'react'
import styled from "styled-components";
import { erinBlack, erinWhite } from '../../styles/colors';
import { PortfolioPiece } from '../portfolio-piece';
import { graphql, useStaticQuery} from 'gatsby'

const PortfolioGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    margin-bottom: 100px;

`

export const Portfolio = () => {
    const query = useStaticQuery(graphql`
    query {
      develop:allMdx (
        filter: { fileAbsolutePath: { regex: "/dev/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
                title
                tags
                previewImage
                size
              }
              slug
          }
        }
      }
      design:allMdx (
        filter: { fileAbsolutePath: { regex: "/design/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
                title
                tags
                previewImage
                size
              }
              slug
          }
        }
      }
    }

        
  `);


  const dev = query.develop.edges;
  const design = query.design.edges;


    return <>
    <h1>my <span>work</span></h1> 
    <h3>interaction / dev</h3>
    <PortfolioGrid>
    {dev.map(function (portfolio, index) {
                    const { node } = portfolio
                    const { frontmatter, slug } = node;
                    const { title, tags, previewImage, size } = frontmatter; 
                    return <PortfolioPiece key={`dev_portfolio_${title}`} size ={size} slug={slug} title={title} tags={tags} previewImage={previewImage}/> 
                })}
    </PortfolioGrid>

    <h3>visual / graphic</h3>
    <PortfolioGrid>
    {design.map(function (portfolio, index) {
                    const { node } = portfolio
                    const { frontmatter, slug } = node;
                    const { title, tags, previewImage, size } = frontmatter; 
                    return <PortfolioPiece key={`design_portfolio_${title}`} size ={size} slug={slug} title={title} tags={tags} previewImage={previewImage}/> 
                })}
       </PortfolioGrid>


    </>
}