import React, { useState } from 'react'


import { YinYang } from '../../utilities/AllSVGs'
import Intro from './Intro'
import SocialIcons from '../Layout/SocialIcons'
import { lightTheme, darkTheme } from '../../utilities/Themes';
import { useMediaQuery } from '@mui/material'


import {
    containerVariants, MainContainer, Container, Center, DarkDiv
} from './StyledMain.js'

const Main = () => {

    const [click, setClick] = useState(false);
    const matches = useMediaQuery('(max-width:768px)')


    const handleOnClick = () => {
        setClick(prevState => prevState = !prevState)
    }

    const getCircleSize = () => {
        return matches ?
            {
                big: 100,
                small: 70
            } :
            {
                big: 200,
                small: 120
            }
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
                    <YinYang onClick={handleOnClick} width={click ? getCircleSize().small : getCircleSize().big} height={click ? getCircleSize().small : getCircleSize().big} fill="currentColor" />
                    <span>Cliquez ici</span>
                </Center>
            </Container>

            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main