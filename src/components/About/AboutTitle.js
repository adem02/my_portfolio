import React from 'react'
import { Main } from './StyledAboutTitle'




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