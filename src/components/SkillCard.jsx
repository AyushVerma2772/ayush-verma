import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { headingFont, navFont, textColor } from '../styles/CommonComp';
import { mobile1 } from '../styles/Responsive';

const SkillBox = styled.div`
    width: 72%;
    /* border: 2px solid green; */
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 2.8rem;
    border-radius: 1.5rem;
    box-shadow: 1rem 1rem 1.5rem 0.2rem #03001c84;
    ${mobile1({ width: '82%', gap: '3rem' })}
`;

const Skill = styled.h4`
    font-family: ${navFont};
    font-size: 1.7rem;
    color: ${textColor};
    letter-spacing: 0.1rem;
    font-weight: lighter !important;
`;

const Image = styled.img`
    width: 10rem;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 1rem;
    background-color: #03001c;
    border-radius: 1rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        height: inherit;
        width: ${props => props.percentage};
        top: 0;
        left: 0;
        border-radius: inherit;
        background-color: ${props => props.barColor};
        transition: all 0.8s ease-in-out;
    }
    &::after {
        content: "${props => props.percentage}";
        position: absolute;
        padding: 0.3rem;
        font-size: 1.1rem;
        border-radius: 0.7rem 0.7rem 0.7rem 0;
        top: -2.3rem;
        right: 0;
        font-family: ${headingFont};
        background-color: ${textColor};
        transition: font-size 0.3s ease-in-out;
    }

    &:hover::after {
        font-size: 1.2rem;
        transition: font-size 0.3s ease-in-out;
    }
`;


const SkillCard = (props) => {
    const [skillCard, skillCardInView] = useInView({
        threshold: 0.1
    });

    return (
        <>
            <SkillBox ref={skillCard} className='d-flex' >
                <Skill>{props.name}</Skill>
                <Image src={props.image} alt='' />
                <ProgressBar barColor={props.barColor} percentage={skillCardInView ? props.percentage : '0%'}></ProgressBar>
            </SkillBox>
        </>
    )
}

export default SkillCard