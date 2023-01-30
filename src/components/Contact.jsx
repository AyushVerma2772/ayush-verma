import React, { useRef } from 'react';
import styled from 'styled-components';
import { Heading2, headingColor, headingFont, IconBox, Input, Label, mainBgColor, paraFont, textColor } from '../styles/CommonComp';
import { MdSend } from "react-icons/md";
import contactImg from '../images/contact.png';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { mobile1 } from '../styles/Responsive';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';


const Wrapper = styled.section`
    padding: 0 4rem;
    padding-bottom: 6rem;
    position: relative;
    border: 0.1rem solid ${mainBgColor};
    &::before {
        content: "<contact>";
        top: 0;
    }

    &::after {
        content: "</contact >";
        bottom: 0;
    }
`;

const Container = styled.div`
    width: 90%;
    margin: 6rem auto;
    justify-content: space-between;
    ${mobile1({ justifyContent: 'center', width: '100%' })}
`;

const ImageBox = styled.div`
    width: 40%;
    height: inherit;
    ${mobile1({ display: 'none' })}
`;

const Image = styled.img`
    width: 38rem;
    filter: drop-shadow(0.3rem 0.5rem 0.2rem #00aaaa6c);
`;

const ContactForm = styled.form`
    width: 50%;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
    ${mobile1({ width: '90%' })}
`;

const IconContainer = styled.div`
    width: 90%;
    margin: 3.5rem auto;
`;

const InnerContainer = styled(IconBox)`
    border-bottom: 0.5rem solid #aeafaf;
    ${mobile1({ width: '100%' })}
`;

const Message = styled.textarea`
    display: block;
    border: 0;
    font-size: 1.6rem;
    width: 100%;
    border-bottom: 0.2rem solid ${headingColor};
    background-color: transparent;
    color: ${textColor};
    font-family: ${paraFont};
    padding: 0.5rem 1rem;
    &:focus {
        outline: none;
    }
`;

const SendButton = styled.button`
    position: relative;
    overflow: hidden;
    width: 10rem;
    height: 4rem;
    cursor: pointer;
    font-family: ${headingFont};
    border: 0.1rem solid ${headingColor};
    padding: 1rem 3.5rem;
    font-size: 1.6rem;
    color: ${headingColor};
    background-color: ${mainBgColor};

    .send-icon {
        position: absolute;
        left: -24%;
        font-size: 2.5rem;
    }

    @keyframes move {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}
`;

const Contact = () => {

    const sendBtn = useRef();
    const colRef = collection(db, "contact")

    const handleSubmit = (e) => {

        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;
        const date = new Date();
        const time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

        if (name && email && message) {
            // Animation 
            sendBtn.current.firstChild.innerText = "";
            sendBtn.current.lastChild.style = "animation: move 0.5s linear;";

            setTimeout(() => {
                sendBtn.current.firstChild.innerText = "Send";
                sendBtn.current.lastChild.style = "left: -24%;";


                const addData = async () => {
                    try {
                        await addDoc(colRef, {
                            name, email, message, time
                        });
                        
                    } catch (error) {
                        console.log(error);
                    }
                }

                addData();

                e.target[0].value = "";
                e.target[1].value = "";
                e.target[2].value = "";

                alert("Thank you for reaching out!\nI'll get back to you shortly.")
            }, 600);


        }

        else {
            alert("Please fill all fields")
        }



    }

    return (
        <>
            <Wrapper id='contact' className='tag'>
                <Heading2><span>Get in touch</span></Heading2>

                <Container className='d-flex' >
                    <ImageBox className='d-flex' data-aos="fade-right" >
                        <Image src={contactImg} alt="" />

                    </ImageBox>

                    <ContactForm className='d-flex' onSubmit={e => handleSubmit(e)} >
                        <Label htmlFor="">Name:
                            <Input type="text" name="name" id="name" placeholder='ABC' />
                        </Label>
                        <Label htmlFor="">Email:
                            <Input type="email" name="email" id="email" placeholder='abc@email.com' />
                        </Label>
                        <Label htmlFor="">Message:
                            <Message name="message" id="message" cols="30" rows="5" placeholder='Hello, Ayush' ></Message>
                        </Label>

                        <SendButton className='d-flex card-button' ref={sendBtn}>
                            <span>Send</span>
                            <MdSend className='send-icon' />
                        </SendButton>
                    </ContactForm>
                </Container>

                <IconContainer className='d-flex' >
                    <InnerContainer className='d-flex' >
                        <a href="https://www.linkedin.com/in/ayushh-verma/" target="_blank" rel="noreferrer" className='link'><SiLinkedin className='icon' id='linked-icon' /></a>

                        <a href="https://github.com/AyushVerma2772" target="_blank" rel="noreferrer" className='link'><SiGithub className='icon' id='github-icon' /></a>

                        <a href="mailto:ayushhathiwan@gmail.com" target="_blank" rel="noreferrer" className='link'><MdEmail className='icon' id='mail-icon' /></a>

                        <a href="https://www.instagram.com/ayushh._.verma/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" className='link'><BsInstagram className='icon' id='instagram-icon' /></a>

                        <a href="https://www.facebook.com/ayushverma.hathiwan" target="_blank" rel="noreferrer" className='link'><BsFacebook className='icon' id='facebook-icon' /></a>

                        <a href="https://wa.me/9354152459" target="_blank" rel="noreferrer" className='link'><BsWhatsapp className='icon' id='whatsapp-icon' /></a>
                    </InnerContainer>
                </IconContainer>

            </Wrapper>
        </>
    )
}

export default Contact