import React from 'react';
import styled from 'styled-components';
import { cursiveFont, mainBgColor } from '../styles/CommonComp';

const Wrapper = styled.div`
    min-height: 100vh;  
`;

const Loading = styled.h2`
    position: relative;
    font-size: 7rem;
    font-family: ${cursiveFont};
    color: ${mainBgColor};

    &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        color: cyan;
        border-bottom: 0.5rem solid cyan;
        border-right: 0.2rem solid cyan;
        overflow: hidden;
        animation: loading 3s linear 0.1s;
    }

    @keyframes loading {
        0%, 10%, 100% {
            width: 0;
        }

        70%, 90% {
            width: 101%;
        }
        
    }
`;




const NameLoading = () => {
    return (
        <>
            <Wrapper className='d-flex' >
                <Loading data-text="<AyushVerma />" >{'<AyushVerma />'}</Loading>
            </Wrapper>
        </>
    )
}

export default NameLoading