import React from 'react';
import styled from 'styled-components';
import { Heading2, headingFont, mainBgColor, navFont, textColor } from '../styles/CommonComp';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import pythonLogo from '../images/python-logo.png';
import reactLogo from '../images/react-logo.png';
import firebaseLogo from '../images/firebase.png';
import { mobile1 } from '../styles/Responsive';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled.section`
    padding: 0 4rem;
    position: relative;
    border: 0.1rem solid ${mainBgColor};

    &::before {
        content: "<skills>";
        top: 0;
    }

    &::after {
        content: "</skills >";
        bottom: 0;
    }
`;

const Container = styled.div`
    width: 90%;
    margin: 7rem auto; 
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    column-gap: 1rem;
    row-gap: 4rem;
    justify-items: center;
    ${mobile1({gridTemplateColumns: 'repeat(2, 1fr)'})}
`;

const SkillBox = styled.div`
    width: 72%;
    /* border: 2px solid green; */
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 2.8rem;
    border-radius: 1.5rem;
    box-shadow: 1rem 1rem 1.5rem 0.2rem #03001c84;
    ${mobile1({width: '82%', gap: '3rem'})}
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
        transition: all 0.5s ease-in-out;
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







const Skills = () => {

    const skills = [
        { id: 1, name: 'html', image: htmlLogo, percentage: '90%', barColor: 'coral' },
        { id: 2, name: 'css', image: cssLogo, percentage: '80%', barColor: '#504cf8' },
        { id: 3, name: 'js', image: jsLogo, percentage: '75%', barColor: '#fdee43' },
        { id: 4, name: 'react.js', image: reactLogo, percentage: '70%', barColor: '#61DBFB' },
        { id: 5, name: 'python', image: pythonLogo, percentage: '80%', barColor: '#2044c8' },
        { id: 6, name: 'firebase', image: firebaseLogo, percentage: '60%', barColor: '#fcc632' },
    ];

    const [skillCard, skillCardInView] = useInView({
        threshold: 0.1
    });



    return (
        <>
            <Wrapper id="skills" className='tag'>
                <Heading2><span>My Skills</span></Heading2>

                <Container>
                    {
                        skills.map((ele, i) => {
                            return (
                                <SkillBox ref={skillCard} key={ele.id} className='d-flex' >
                                    <Skill>{ele.name}</Skill>
                                    <Image src={ele.image} alt='' />
                                    <ProgressBar barColor={ele.barColor} percentage={skillCardInView ? ele.percentage : '0%'} ></ProgressBar>
                                </SkillBox>
                            )
                        })
                    }

                </Container>
            </Wrapper>
        </>
    )
}

export default Skills