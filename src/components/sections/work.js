import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled from "styled-components";
import { erinBlack, erinBlack10, erinRed, erinRoseGold10, erinWhite } from '../../styles/colors';
import { graphql, useStaticQuery} from 'gatsby'

const WorkGrid = styled.div`
    margin-top: 1.5em;
    margin-bottom: 5em;
    display: flex;
    position: relative;
    min-height: 350px;
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
`

const JobDescription = ({ role, companyName, companyURL, startDate, endDate, bullets, hidden, props }) => {
    return <JobBlock style={props} hidden={hidden}>
        <h3>{role} at <a href={companyURL}>{companyName}</a></h3>
        <small>{startDate} – {endDate}</small>
        {/* <ul> */}
        <div dangerouslySetInnerHTML={{ __html: bullets }} />
            {/* {bullets.map(function (bullet, index) {
                return <li key={`${role}_${startDate}_bullet_${index}`}>{bullet}</li>;
            })} */}
        {/* </ul> */}
    </JobBlock>
}

export const Work = () => {
    const jobsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
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

  const jobs = jobsQuery.allMarkdownRemark.edges;

    const [currentJobIndex, setCurrentJobIndex] = React.useState(0);
    const transitions = useTransition(jobs[currentJobIndex], {
        from: { opacity: 0, transform: 'translate3d(0,5%, 0)', display: 'flex'},
        enter: { opacity: 1, transform: 'translate3d(0,0%, 0)' },
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

                {/* <div> */}
                {transitions(function (props, item, key, index) {
                    const { node } = item
                    const { frontmatter, html } = node;
                    const { role, url, company, startDate, endDate } = frontmatter;         
                    return <JobDescription key={`job_${company}_${jobs.indexOf(item)}`} hidden={(key.ctrl.id - 1) !== currentJobIndex} props={props} role={role} companyName={company} companyURL={url} startDate={startDate} endDate={endDate}
                            bullets={html} />
                        })}
                {/* </div> */}
        </WorkGrid>
    </>
}
