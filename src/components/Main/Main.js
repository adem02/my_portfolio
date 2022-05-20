import React, { useState } from 'react'


import { YinYang } from '../../utilities/AllSVGs'
import Intro from './Intro'
import SocialIcons from '../Layout/SocialIcons'
import { lightTheme, darkTheme } from '../../utilities/Themes';

import {
    containerVariants, MainContainer, Container, Center, DarkDiv
} from './StyledMain.js'

const Main = () => {

    const [click, setClick] = useState(false);

    const handleOnClick = () => {
        setClick(prevState => prevState = !prevState)
    }

    return (
        <MainContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <DarkDiv click={click} />
            <SocialIcons theme={click ? darkTheme : lightTheme} />
            <Container>
                <Center click={click}>
                    <YinYang onClick={handleOnClick} width={click ? 120 : 200} height={click ? 120 : 200} fill="currentColor" />
                    <span>Click Here</span>
                </Center>
            </Container>

            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main