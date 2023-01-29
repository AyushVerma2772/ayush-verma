import React from 'react';
import styled from 'styled-components';
import { Heading2, headingColor, mainBgColor, navFont } from '../styles/CommonComp';
import { FiLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import infinityBlogs from '../images/infinity-blogs.png';
import connectBees from '../images/connect-bees.png';
import labPartner from '../images/lab-partner.png';
import baatein from '../images/baatein.png';
import { mobile1 } from '../styles/Responsive'



const Wrapper = styled.section`
    padding: 0 4rem;
    position: relative;
    margin: 4rem 0;
    border: 0.1rem solid ${mainBgColor};
    &::before {
        content: "<projects>";
        top: 0;
    }

    &::after {
        content: "</projects >";
        bottom: 0;
    }
`;

const Container = styled.div`
    width: 95%;
    margin: 7rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    column-gap: 1rem;
    row-gap: 4rem;
    justify-items: center;
    ${mobile1({gridTemplateColumns: 'repeat(1, 1fr)', columnGap: '0'})}
`;

const ProjectCard = styled.div`
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

    ${mobile1({ height: '38rem', width: '90%'})}
`;

const Image = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    ${mobile1({ height: '38rem', width: '100%', objectFit: 'unset'})}
`;

const InnerContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    bottom: -50%;
    transition: all 0.5s ease-in-out;
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


const Projects = () => {

    const projects = [
        { id: 1, name: 'infinity Blogs', image: infinityBlogs, gitRepo: 'https://github.com/AyushVerma2772/InfinityBlogs', link: 'https://infinity-blogs.firebaseapp.com/', details: 'React | Firebase | Context API' },
        { id: 2, name: 'Baatein', image: baatein, gitRepo: 'https://github.com/AyushVerma2772/Baatein', link: 'https://baatein-chats.web.app/', details: 'React | Firebase | Context API' },
        { id: 3, name: 'Lab Partner', image: labPartner, gitRepo: '/', link: 'https://lab-partner.web.app/', details: 'React | Firebase' },
        { id: 4, name: 'Connect Bees', image: connectBees, gitRepo: 'https://github.com/AyushVerma2772/ConnectBees', link: 'https://ayushverma2772.github.io/ConnectBees/', details: 'React' },
    ]

    return (
        <>
            <Wrapper id='projects' className='tag' >
                <Heading2><span>My Projects</span></Heading2>

                <Container>
                    {
                        projects.map((ele) => {
                            return (
                                <ProjectCard key={ele.id} data-aos="flip-left" data-aos-offset="300">
                                    <Image src={ele.image} alt="" />

                                    <InnerContainer className='inner-container' >
                                        <IconBox className='d-flex' >
                                            <a href={ele.gitRepo} target="_blank" className='d-flex link' rel="noreferrer" ><VscGithub className='git-icon' /></a>
                                            <a href={ele.link} rel="noreferrer" target="_blank" className='d-flex link' > <FiLink className='icon'  /> </a>
                                        </IconBox>

                                        <Details className='d-flex' >
                                            <h3>{ele.name}</h3>
                                            <h4>{ele.details}</h4>
                                        </Details>
                                    </InnerContainer>
                                </ProjectCard>

                            )
                        })
                    }

                </Container>
            </Wrapper>
        </>
    )
}

export default Projects