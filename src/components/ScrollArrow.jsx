import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RxDoubleArrowDown } from "react-icons/rx";
import { headingColor } from '../styles/CommonComp';
import { mobile1 } from '../styles/Responsive';



const ArrowBtn = styled.button`
    width: 4rem;
    height: 4rem;
    border: 0.25rem solid ${headingColor};
    background-color: transparent;
    border-radius: 50%;
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    cursor: pointer;
    box-shadow: inset 0 0 0.65rem rgba(0,170,170,0.5), 0 0 0.65rem rgba(0,170,170,0.5);
    animation: show 1.5s ease-in;
    ${mobile1({width: '4.5rem', height: '4.5rem'})}

    #scroll-arrow-icon {
        color: ${headingColor};
        font-size: 2.5rem;
        text-shadow: inset 0 0 0.65rem rgba(0,170,170,0.5), 0 0 0.65rem rgba(0,170,170,0.5);
        transition: transform 0.5s ease-in-out;
    }

    @keyframes show {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
        
    }
`;


const ScrollArrow = () => {

    
    useEffect(() => {
        const homeHeight = document.getElementById("home").clientHeight;
        const arrow = document.getElementById("scroll-arrow-icon");
        const arrowBtn = document.getElementById("scroll-arrow-btn");

        arrowBtn.addEventListener("click", () => {
            window.scroll(0, homeHeight);
        });

        window.addEventListener("scroll", () => {
            const yScroll = window.pageYOffset;
            if (yScroll > homeHeight / 2) {
                arrow.style = "transform: rotate(180deg) !important;";
                arrowBtn.title = "Scroll up";
                arrowBtn.addEventListener("click", () => {
                    window.scroll(0, 0);
                });
            }
            
            else {
                arrow.style = "transform: rotate(0) !important;";
                arrowBtn.title = "Scroll down";
                arrowBtn.addEventListener("click", () => {
                    window.scroll(0, homeHeight);
                });
            }
        })

    }, [])

    return (
        <>
            <ArrowBtn className='d-flex' id="scroll-arrow-btn" title='Scroll down' >
                <RxDoubleArrowDown id="scroll-arrow-icon" />
            </ArrowBtn>

        </>
    )
}

export default ScrollArrow