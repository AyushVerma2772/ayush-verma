import styled from "styled-components";
import { mobile1 } from "./Responsive";

export const mainBgColor = "#101321";
export const headingColor = "#42ded6";
export const textColor = "#f3feff";

export const paraFont = "'Mulish', sans-serif";
export const headingFont = "'Ubuntu', sans-serif";
export const cursiveFont = "'Caveat', cursive";
export const navFont = "'Cairo', sans-serif";



export const Heading2 = styled.h2`
    text-align: center;
    font-family: ${headingFont};
    color: ${headingColor};
    font-size: 3.2rem;
    margin: 4rem auto;

    span {
        position: relative;
    }

    span::before, span::after {
        content: "";
        height: 0.2rem;
        width: 100%;
        background-color: ${headingColor};
        position: absolute;
        top: 52%;
        border-radius: 1rem;
        ${mobile1({width: '70%'})}
    }
    
    span::before {
        left: -110%;
        ${mobile1({left: '-80%'})}
    }

    span::after {
        right: -110%;
        ${mobile1({right: '-80%'})}

    }
`;


export const Button = styled.button`
    cursor: pointer;
    font-family: ${headingFont};
    border: 0.1rem solid ${headingColor};
    padding: 1rem 3.5rem;
    font-size: 1.6rem;
    color: ${headingColor};
    background-color: ${mainBgColor};
    position: relative;
    transition: all 0.2s linear;
    z-index: 2;
    letter-spacing: 0.2rem;
    box-shadow: inset 0 0 0.65rem rgba(0,170,170,0.5), 0 0 0.65rem rgba(0,170,170,0.5);
    background: none;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${headingColor};
        transition: all 0.2s linear;
        z-index: -1;
    }

    &:hover {
        color: ${mainBgColor};
        font-weight: 500 !important;
    }

    &:hover::before {
        width: 100%;
    }
`;


export const Para = styled.p`
    font-family: ${paraFont};
    font-size: 1.6rem;
    word-wrap: break-word;
    color: ${textColor};
    word-spacing: 0.3rem;
    /* text-align: center; */
`;

export const Label = styled.label`
    width: 80%;
    color: #aeafaf;
    font-family: ${navFont};
    font-size: 1.4rem;
    
`;


export const Input = styled.input`
    display: block;
    width: 100%;
    border: 0;
    font-size: 1.6rem;
    border-bottom: 0.2rem solid ${headingColor};
    background-color: transparent;
    color: ${textColor};
    font-family: ${paraFont};
    padding: 0.5rem 1rem;
    &:focus {
        outline: none;
    }
`;

export const IconBox = styled.div`
    width: 55%;
    border-bottom: 0.7rem solid ${mainBgColor};
    border-radius: 1rem;
    height: 5rem;
    justify-content: space-around;
    align-items: end;
    @keyframes iconFloat {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-1.3rem);
        }

        100% {
            transform: translateY(0);
        }
    }

    .icon {
        font-size: 2.8rem;
        color: ${headingColor};
        animation: iconFloat 4s ease-in-out infinite;
    }

    #github-icon {
        animation-delay: 0.8s;
    }

    #mail-icon {
        animation-delay: 1.6s;
    }
    #instagram-icon {
        animation-delay: 2.4s;
    }
    #facebook-icon {
        animation-delay: 3.2s;
    }
    #whatsapp-icon {
        animation-delay: 4s;
    }
`;