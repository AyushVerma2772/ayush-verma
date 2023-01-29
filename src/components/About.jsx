import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Heading2, headingColor, IconBox, Para, paraFont, textColor } from '../styles/CommonComp';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import profileImage from '../images/ayush.png';
import { mobile1 } from '../styles/Responsive';
import ayushVermaResume from '../resume/AyushVermaResume.pdf';


const Wrapper = styled.section`
    height: 59rem;
    position: relative;
    background-color: #172132;

    &::before {
        content: "<about>";
        top: 0;
        left: 4rem;
    }

    &::after {
        content: "</about >";
        bottom: 0;
        left: 4rem;
    }

    ${mobile1({ height: 'auto', padding: '2rem 0' })}
`;

const Wave = styled.svg`
    position: absolute;  
`;

const AboutWrapper = styled.div`
    height: 42rem;
    margin: 5rem auto;
    width: 90%;
    justify-content: space-between;
    ${mobile1({ height: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', gap: '3rem' })}
`;

const LeftBox = styled.div`
    width: 35%;
    height: inherit;
    flex-direction: column;
    justify-content: space-around;
    ${mobile1({ width: '90%', gap: '3rem' })}
`;

const ImageBox = styled.div`
    width: 23rem;
    height: 23rem;
    border: 0.3rem solid ${headingColor};
    border-radius: 50%;
    padding: 0.6rem;
    box-shadow: inset 0 0 1.5rem rgba(0,170,170,0.5), 0 0 1.8rem rgba(0,170,170,0.5);

`;

const ProfileImage = styled.img`
    width: 100%;
    transition: transform 0.5s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const Name = styled.h3`
    font-family: ${paraFont};
    color: ${textColor};
    font-size: 2.1rem;
    text-align: center;
    span {
        color: ${headingColor};
    }
`;

const RightBox = styled.div`
    width: 45%;
    height: inherit;
    flex-direction: column;
    gap: 2.5rem;
    ${mobile1({ width: '90%', padding: '2rem 0' })}
    p {
        ${mobile1({ textAlign: 'center' })}
    }
`;


const About = () => {

    const topWave = useRef();
    const bottomWave = useRef();
    const about = useRef();

    useEffect(() => {
        const topWaveHeight = topWave.current.clientHeight;
        topWave.current.style = `top: ${-1 * topWaveHeight + 2}`;
        bottomWave.current.style = `bottom: ${-1 * bottomWave.current.clientHeight + 2}`;
        about.current.style = `margin: ${topWaveHeight}px 0;`

    }, []);




    return (
        <>
            <Wrapper id='about' ref={about} className='tag' >
                <Wave ref={topWave} xmlns="http://www.w3.org/2000/Wave" viewBox="0 0 1440 320"><path fill="#172132" fillOpacity="1" d="M0,320L0,96L120,96L120,224L240,224L240,0L360,0L360,96L480,96L480,192L600,192L600,128L720,128L720,96L840,96L840,160L960,160L960,96L1080,96L1080,256L1200,256L1200,224L1320,224L1320,128L1440,128L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"></path></Wave>

                <Wave ref={bottomWave} xmlns="http://www.w3.org/2000/Wave" viewBox="0 0 1440 320"><path fill="#172132" fillOpacity="1" d="M0,96L0,128L130.9,128L130.9,96L261.8,96L261.8,160L392.7,160L392.7,256L523.6,256L523.6,224L654.5,224L654.5,64L785.5,64L785.5,224L916.4,224L916.4,64L1047.3,64L1047.3,288L1178.2,288L1178.2,192L1309.1,192L1309.1,288L1440,288L1440,0L1309.1,0L1309.1,0L1178.2,0L1178.2,0L1047.3,0L1047.3,0L916.4,0L916.4,0L785.5,0L785.5,0L654.5,0L654.5,0L523.6,0L523.6,0L392.7,0L392.7,0L261.8,0L261.8,0L130.9,0L130.9,0L0,0L0,0Z"></path></Wave>

                <Heading2><span>About Me</span></Heading2>

                <AboutWrapper className='d-flex' >
                    <LeftBox className='d-flex' >
                        <ImageBox data-aos="fade-up">
                            <ProfileImage src={profileImage} alt="ayush-image" />
                        </ImageBox>
                        <Name>Ayush Verma</Name>
                        <IconBox className='d-flex' >
                            <a href="https://www.linkedin.com/in/ayushh-verma/" rel="noreferrer" target="_blank" className='link'><SiLinkedin className='icon' id='linked-icon' /></a>

                            <a href="https://github.com/AyushVerma2772" rel="noreferrer" target="_blank" className='link'><SiGithub className='icon' id='github-icon' /></a>

                            <a href="mailto:ayushhathiwan@gmail.com" rel="noreferrer" target="_blank" className='link'><MdEmail className='icon' id='mail-icon' /></a>
                        </IconBox>

                    </LeftBox>

                    <RightBox className='d-flex' >
                        <Name>My name is <span>Ayush Verma</span></Name>

                        <Para>
                            I am a computer science student with a passion for Artificial Intelligence and Machine Learning. In addition to my academic pursuits, I am a skilled front-end developer who is constantly seeking to learn about new technologies and stay ahead of the curve. I have experience working with various technologies such as Tailwind CSS, React.js, React Redux, Firebase and more, and have a wealth of experience creating projects with these technologies.
                            Additionally, I work as a Subject Matter Expert for Chegg India, where I have helped hundreds of students and developers by providing solutions and answering their queries.

                        </Para>
                        <Para>
                            I am a dedicated and hardworking individual who is committed to staying up-to-date with the latest technologies and trends in the field of computer science. My diverse background and expertise make me a valuable asset to any team, and I look forward to continuing to grow and evolve as a developer.
                        </Para>


                        <Button as={'a'} href={ayushVermaResume} download className='link'>Resume</Button>


                    </RightBox>
                </AboutWrapper>


            </Wrapper>
        </>
    )
}

export default About