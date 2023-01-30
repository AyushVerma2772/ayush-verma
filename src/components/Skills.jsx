import React from 'react';
import styled from 'styled-components';
import { Heading2, mainBgColor} from '../styles/CommonComp';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import pythonLogo from '../images/python-logo.png';
import reactLogo from '../images/react-logo.png';
import firebaseLogo from '../images/firebase.png';
import { mobile1 } from '../styles/Responsive';
import SkillCard from './SkillCard';


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


const Skills = () => {

    const skills = [
        { id: 1, name: 'html', image: htmlLogo, percentage: '90%', barColor: 'coral' },
        { id: 2, name: 'css', image: cssLogo, percentage: '80%', barColor: '#504cf8' },
        { id: 3, name: 'js', image: jsLogo, percentage: '75%', barColor: '#fdee43' },
        { id: 4, name: 'react.js', image: reactLogo, percentage: '70%', barColor: '#61DBFB' },
        { id: 5, name: 'python', image: pythonLogo, percentage: '80%', barColor: '#2044c8' },
        { id: 6, name: 'firebase', image: firebaseLogo, percentage: '60%', barColor: '#fcc632' },
    ];

    return (
        <>
            <Wrapper id="skills" className='tag'>
                <Heading2><span>My Skills</span></Heading2>

                <Container>
                    {
                        skills.map(ele =>  (
                                <SkillCard key={ele.id} name={ele.name} image={ele.image} barColor={ele.barColor} percentage={ele.percentage} />
                            )
                        )
                    }

                </Container>
            </Wrapper>
        </>
    )
}

export default Skills