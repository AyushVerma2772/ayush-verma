import React from 'react';
import styled from 'styled-components';
import { headingColor, Para } from '../styles/CommonComp';

const Wrapper  = styled.footer`
    height: 6rem;
    border-top: 0.2rem solid ${headingColor};
`

const Footer = () => {
    return (
        <>
            <Wrapper className='d-flex'>
                <Para>
                    &copy; Copyright <strong>Ayush verma</strong>. All Rights Reserved
                </Para>
            </Wrapper>
        </>
    )
}

export default Footer