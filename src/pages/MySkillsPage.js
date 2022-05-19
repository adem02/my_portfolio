import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { darkTheme } from '../utilities/Themes'
import ParticleComponent from '../components/ParticleComponent'
import BigTitle from '../components/BigTitle'
import particlesConfig from '../config/skills-particlesjs-config.json'
import Skills from '../components/Skills'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1, duration: 0.3
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Grid = styled.div`
    width: 90%;

    color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    display: grid;
    grid-template-columns: auto auto;
    gap: 5em;
    z-index: 2;

    margin-bottom: 5rem;
`

const MySkillsPage = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ParticleComponent config={particlesConfig} />

                <Grid>
                    <Skills />
                </Grid>

                <BigTitle text="COMPETENCES" top="80%" left="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage