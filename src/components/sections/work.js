import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled from "styled-components";
import { erinBlack, erinBlack10, erinRed, erinRoseGold10, erinWhite } from '../../styles/colors';
import { graphql, useStaticQuery} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { device } from '../../styles/devices';

const WorkGrid = styled.div`
    margin-top: 1.5em;
    margin-bottom: 5em;
    display: flex;
    position: relative;
    min-height: 500px;

    @media ${device.mobile} {
        flex-flow: column nowrap;
    }
`

const SidebarItem = styled.div`
    background-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    padding: 15px;
    p {
        color: ${props => (props.isActive ? erinRed: erinBlack)};
        padding: 0;
    }

    &:hover {
        background-color: ${erinRoseGold10};
    }

    @media ${device.mobile} {
        min-width: 130px;
        justify-content: center;
        border-bottom: 4px solid ${erinBlack10};
    }
`

const SidebarColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 25%;
    flex-grow: 1;
    white-space: nowrap;
    gap: 15px;
    border-left: 4px solid ${erinBlack10};
    height: fit-content;
    position: relative;

    @media ${device.mobile} {
        flex-flow: row nowrap;
        flex-grow: 0;
        overflow-x: auto;
        white-space: nowrap;
        margin-bottom: 20px;
        gap: 0px;
        border-left: none;
    }
`

//TODO remember to change height
const SidebarHighlight = styled.div`
    position: absolute;
    background-color: ${erinRed};
    top: 0;
    left: -4px;
    width: 4px;
    height: 57px;
    transform: translateY(calc(${({ position }) => position} * (57px + 15px)));
    transition: transform 0.25s ease-in-out;
    transition-delay: 0.1s;

    @media ${device.mobile} {
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        max-width: 160px;
        height: 4px;
        transform: translateX(calc(${({ position }) => position} * (130px + 30px)));
      }
`


const JobBlock = styled(animated.div)`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-left: 30px;

    small {
        color: ${erinBlack};
    }

    a {
        font-weight: 400;
    }   

    @media ${device.mobile} {
        width: 100%;
        margin-left: 10px;

        ul {
             padding-inline-start: 20px;
        }
    }
`

const JobDescription = ({ role, companyName, companyURL, startDate, endDate, bullets, props }) => {
    return <JobBlock style={props}>
        <h3>{role} at <a href={companyURL}>{companyName}</a></h3>
        <small>{startDate} – {endDate}</small>
        <MDXRenderer>{bullets}</MDXRenderer>
    </JobBlock>
}

export const Work = () => {
    const jobsQuery = useStaticQuery(graphql`
    query {
      allMdx (
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            body
            frontmatter {
              role
              company
              url
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const jobs = jobsQuery.allMdx.edges;

    const [currentJobIndex, setCurrentJobIndex] = React.useState(0);
    const transitions = useTransition(jobs[currentJobIndex], {
        from: { opacity: 0, transform: 'translate3d(0, 5%, 0)', display: 'flex'},
        enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)'},
        leave: { opacity: 0,  transform: 'translate3d(0, -5%, 0)', display: 'none'},
      });

    return <>
        <h1><span>where</span> I've worked</h1>
        <WorkGrid>
            <SidebarColumn>
                {/* For each job, create a bar here, on click method updates index # */}
                {jobs.map(function (job, index) {
                    const company = job.node.frontmatter.company
                    return <SidebarItem key={`sidebar_${company}_${index}`} isActive={index === currentJobIndex} onClick={() => setCurrentJobIndex(index)}>  {/* onClick method */}
                        <p>{company}</p>
                    </SidebarItem>
                })}
            <SidebarHighlight position={currentJobIndex}/>
            </SidebarColumn>
                {transitions(function (props, item, key, index) {
                    const { node } = item
                    const { frontmatter, body } = node;
                    const { role, url, company, startDate, endDate } = frontmatter;         
                    return <JobDescription key={`job_${company}_${jobs.indexOf(item)}`} props={props} role={role} companyName={company} companyURL={url} startDate={startDate} endDate={endDate}
                            bullets={body} />
                        })}
        </WorkGrid>
    </>
}