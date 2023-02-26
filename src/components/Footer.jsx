import React from 'react';
import styled from 'styled-components';
import { headingColor, Para, textColor } from '../styles/CommonComp';

const Wrapper  = styled.footer`
    height: 6rem;
    border-top: 0.2rem solid ${headingColor};
    a {
        color: ${textColor};
    }
`

const Footer = () => {
    return (
        <>
            <Wrapper className='d-flex'>
                <Para>
                    &copy; Copyright <a href='/' >Ayush verma</a>. All Rights Reserved
                </Para>
            </Wrapper>
        </>
    )
}

export default Footer