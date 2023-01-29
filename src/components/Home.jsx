import React from 'react';
import styled from 'styled-components';
import coder from '../images/coder.png'
import { Button, headingColor, paraFont, textColor } from '../styles/CommonComp';
import namaste from '../images/namaste.png';
import { mobile1 } from '../styles/Responsive';
import ayushVermaResume from '../resume/AyushVermaResume.pdf';


const Wrapper = styled.section`
    height: 55rem;
    justify-content: space-between;
    padding: 0 4rem;
    position: relative;

    &::before {
        content: "<home>";
        top: 0;
    }

    &::after {
        content: "</home >";
        bottom: 0;
    }
    background: rgb(66,222,214);
background: radial-gradient(circle, rgba(66,222,214,0.2359068627450981) 10%, rgba(16,19,33,1) 38%);

    ${mobile1({ height: '90rem', flexDirection: 'column-reverse', justifyContent: 'space-around' })}
`;

const Left = styled.div`
    margin: 0 3rem;
    ${mobile1({ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
`;

const Right = styled.div`
    
`;

const Image = styled.img`
    width: 37rem;
`;

const Namaste = styled.div`
    justify-content: flex-start;
    gap: 2rem;
    h2{
        font-size: 4.5rem;
        color: ${textColor};
        font-family: ${paraFont};
    }
    img {
        width: 5rem;
    }
`;


const Name = styled.h1`
    font-size: 3.3rem;
    color: ${textColor};
    font-family: ${paraFont};
    letter-spacing: 5;

    strong {
        font-size: 6.3rem;
        color: ${headingColor};
        font-family: 'Lobster', cursive;
    }
    
`;

const Bio = styled.h3`
    font-size: 1.9rem;
    font-weight: 300;
    font-family: ${paraFont};
    color: ${textColor};
    opacity: 0.75;
`;

const ResumeBtn = styled(Button)`
    display: inline-block;
    margin: 3rem 0;
`;



const Home = () => {
    return (
        <>
            <Wrapper id='home' className='tag d-flex' >
                <Left data-aos="zoom-out" >
                    <Namaste className='d-flex' >
                        <h2>Namaste</h2> <img src={namaste} alt="namaste-img" />
                    </Namaste>

                    <Name>I'm <strong>Ayush Verma</strong></Name>

                    <br />
                    <Bio>A Fronted developer & <br /> Subject Matter Expert</Bio>
                    <ResumeBtn as={'a'} href={ayushVermaResume} download className='link' >Resume</ResumeBtn>
                </Left>

                <Right data-aos="zoom-in" >
                    <Image src={coder} alt='coder' />
                </Right>
            </Wrapper>
        </>
    )
}

export default Home