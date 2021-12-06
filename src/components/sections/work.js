import React from 'react'
import styled from "styled-components";
import { erinBlack, erinBlack10, erinRed, erinRoseGold10, erinWhite } from '../../styles/colors';

const WorkGrid = styled.div`
    margin-top: 1.5em;
    margin-bottom: 5em;
    display: flex;
`

const SidebarItem = styled.div`
    background-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    padding: 15px;
    // border-left: ${props => (props.isActive ? `4px solid ${erinRed}`: "none")};
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
    flex: 1 1 40%;
    gap: 15px;
    border-left: 4px solid ${erinBlack10};
    height: fit-content;
    position: relative;

    // padding: 7px 0px;
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


const JobBlock = styled.div`
    display: ${props => (props.hidden ? "none": 'flex')};
    flex-direction: column;
    flex: 2 1 auto;
    margin-left: 30px;

   small {
       color: ${erinBlack};
   }

   a {
       font-weight: 400;
   }
`

const JobDescription = ({ role, companyName, companyURL, startDate, endDate, bullets, hidden }) => (
    <JobBlock hidden={hidden}>
        <h3>{role} at <a href={companyURL}>{companyName}</a></h3>
        <small>{startDate} – {endDate}</small>
        <ul>
            {bullets.map(function (bullet, index) {
                return <li key={`${role}_${startDate}_bullet_${index}`}>{bullet}</li>;
            })}
        </ul>
    </JobBlock>
)

export const Work = ({ jobs }) => {
    const [currentJobIndex, setCurrentJobIndex] = React.useState(0);
    
    return <>
        <h1><span>where</span> I've worked</h1>
        <WorkGrid>
            <SidebarColumn>
                {/* For each job, create a bar here, on click method updates index # */}
                {jobs.map(function (job, index) {
                    return <SidebarItem key={index} isActive={index == currentJobIndex} onClick={() => setCurrentJobIndex(index)}>  {/* onClick method */}
                        <p>{`job.role ${index}`}</p>
                    </SidebarItem>
                })}
            <SidebarHighlight position={currentJobIndex}/>
            </SidebarColumn>

            {jobs.map(function (job, index) {
                    return <JobDescription key={index} hidden={index !== currentJobIndex} role={`HCI Engineer ${index}`} companyName="MORSE Corp." companyURL="https://google.com" startDate="June 2020" endDate="Present"
                    bullets={["Assist in designing and programming the architecture for multiple Android aerospace applications with a MVVM pattern",
                        "Create and implement pixel perfect mockups for Android applications",
                        "Perform design reviews with clients and key users from the Department of Defense"]} />
                })}
            {/* For each job, create a panel here, link it to id by key? visibility based on index boolean matches onClick */}
{/* probably sohuld take in the single job object? parse inside */}
            {/* <JobDescription hidden={false} role="HCI Engineer" companyName="MORSE Corp." companyURL="https://google.com" startDate="June 2020" endDate="Present"
                bullets={["Assist in designing and programming the architecture for multiple Android aerospace applications with a MVVM pattern",
                    "Create and implement pixel perfect mockups for Android applications",
                    "Perform design reviews with clients and key users from the Department of Defense"]} /> */}
        </WorkGrid>
    </>
}