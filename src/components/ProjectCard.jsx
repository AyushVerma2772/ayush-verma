import React from 'react';
import styled from 'styled-components';
import { FiLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { mobile1 } from '../styles/Responsive';
import { headingColor, mainBgColor, navFont } from '../styles/CommonComp';

const Card = styled.div`
    width: 32rem;
    height: 23rem;
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;

    &:hover .inner-container {
        bottom: 0;
    }

    &:hover img {
        opacity: 0.75;
        transform: scale(1.05);
    }

    ${mobile1({ height: '38rem', width: '90%' })}
`;

const Image = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    ${mobile1({ height: '38rem', width: '100%', objectFit: 'unset' })}
`;

const InnerContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    bottom: -50%;
    transition: all 0.6s ease-in-out;
`;

const IconBox = styled.div`
    height: 40%;
    background-color: transparent;
    padding: 0 1rem;
    gap: 1.5rem;
    justify-content: flex-start;
    a {
        
        background-color: ${headingColor};
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
    }

    .git-icon {
        color: ${mainBgColor};
        font-size: 2.5rem;
    }
    .icon {
        color: ${mainBgColor};
        font-size: 2rem;
    }
    
    `;

const Details = styled.div`
    /* border: 2px solid blue; */
    height: 60%;
    background-color: ${headingColor};
    color: ${mainBgColor};
    flex-direction: column;
    
    h3, h4 {
        letter-spacing: 0.1rem;
        font-size: 1.7rem;
        font-family: ${navFont};
    }

    h4 {
        font-size: 1.4rem;
    }


`;

const ProjectName = styled.a`
    font-family: ${navFont};
    color: ${headingColor};
    text-align: center !important;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 1.8rem;
    position: relative;
    width: max-content;
    padding: 0.1rem 0.2rem;

    &::before {
        width: 0;
        height: 0.2rem;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.5rem;
        background-color: ${headingColor};
        transition: width 0.3s linear;
    }

    &:hover::before {
        width: 100%;
    }
`;


const ProjectCard = (props) => {
    return (
        <>
            <div>
                <Card data-aos="flip-left" data-aos-offset="100">
                    <Image src={props.image} alt="" />

                    <InnerContainer className='inner-container' >
                        <IconBox className='d-flex' >
                            <a href={props.gitRepo} target="_blank" className='d-flex link' rel="noreferrer" ><VscGithub className='git-icon' /></a>
                            <a href={props.link} rel="noreferrer" target="_blank" className='d-flex link' > <FiLink className='icon' /> </a>
                        </IconBox>

                        <Details className='d-flex' >
                            <h3>{props.name}</h3>
                            <h4>{props.details}</h4>
                        </Details>
                    </InnerContainer>
                </Card>

                <ProjectName href={props.link} rel="noreferrer" target="_blank" className='d-flex link' > {props.name} </ProjectName>
            </div>
        </>
    )
}

export default ProjectCard