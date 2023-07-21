import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { Heading2, mainBgColor } from '../styles/CommonComp';
import { mobile1 } from '../styles/Responsive';
import infinityBlogs from '../images/infinity-blogs.png';
// import connectBees from '../images/connect-bees.png';
import labPartner from '../images/lab-partner.png';
import baatein from '../images/baatein.png';
import fireVdos from "../images/fireVdos.png"


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
    ${mobile1({ gridTemplateColumns: 'repeat(1, 1fr)', columnGap: '0' })}
`;

const Projects = () => {

    const projects = [
        { id: 1, name: 'Fire Vdos', image: fireVdos, gitHubRepo: 'https://github.com/AyushVerma2772/FireVdos', link: 'https://fire-vdos.web.app/', details: 'React | Firebase | Context API | Rapid API' },
        { id: 2, name: 'Infinity Blogs', image: infinityBlogs, gitHubRepo: 'https://github.com/AyushVerma2772/InfinityBlogs', link: 'https://infinity-blogs.firebaseapp.com/', details: 'React | Firebase | Context API' },
        { id: 3, name: 'Baatein', image: baatein, gitHubRepo: 'https://github.com/AyushVerma2772/Baatein', link: 'https://baatein-chats.web.app/', details: 'React | Firebase | Context API' },
        { id: 4, name: 'Lab Partner', image: labPartner, gitHubRepo: '/', link: 'https://lab-partner.web.app/', details: 'React | Firebase' },
    ]

    return (
        <>
            <Wrapper id='projects' className='tag' >
                <Heading2><span>My Projects</span></Heading2>

                <Container>
                    {
                        projects.map(ele => (
                            <ProjectCard key={ele.id} image={ele.image} gitHubRepo={ele.gitHubRepo} link={ele.link} name={ele.name} details={ele.details} />
                        )
                        )
                    }
                </Container>

                <Heading2><span>My Projects</span></Heading2>                
            </Wrapper>
        </>
    )
}

export default Projects