import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'


import { YinYang } from '../utilities/AllSVGs'
import Intro from '../components/Intro'
import SocialIcons from '../components/SocialIcons'
import { lightTheme, darkTheme } from '../utilities/Themes';
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3, duration: 0.7
        }
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

const MainContainer = styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: calc(100vh - 5rem);
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6{
        font-family: 'Cuprum',sans-serif;
        font-weight: 200;
    }
`

const Container = styled.div`
padding: 2rem;
`

const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 1s linear;
    }

    &>:last-child{
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }
`

const DarkDiv = styled.div`
    position: absolute;
    background-color: #000;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const MainPage = () => {

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

export default MainPage