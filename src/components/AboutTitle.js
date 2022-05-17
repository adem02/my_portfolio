import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
    display: flex;
    width: 70vw;
    align-items: center;
    margin: 0.5rem auto;

    .title {
        flex-grow: 1;
        width: auto;
        text-align: center;
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }

    .line {
        flex-grow: 10;
        height: 2.5px;
        background-color: ${props => props.theme.text};
    }
`

const AboutTitle = ({ title, theme }) => {
    return (
        <Main theme={theme}>
            <hr className='line' />
            <div className='title'>{title}</div>
            <hr className='line' />
        </Main>
    )
}

export default AboutTitle