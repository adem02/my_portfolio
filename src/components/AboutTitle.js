import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    .title {
        flex-grow: 1;
        width: auto;
        text-align: center;
    }

    .line {
        flex-grow: 10;
    }
`

const AboutTitle = ({ title }) => {
    return (
        <Main>
            <hr className='line' />
            <div className='title'>{title}</div>
            <hr className='line' />
        </Main>
    )
}

export default AboutTitle