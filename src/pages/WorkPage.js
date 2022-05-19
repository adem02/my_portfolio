import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { darkTheme } from '../utilities/Themes'
import { Work } from '../data/WorkData'
import Card from '../components/Card'
import { YinYang } from '../utilities/AllSVGs'
import BigTitle from '../components/BigTitle'
import ParticleComponent from '../components/ParticleComponent'
import particlesConfig from '../config/work-particlesjs-config.json'

const containerVariants = {
    hidden: {
        opacity: 0.5,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 0.3, duration: 0.3
        }
    },
    exit: {
        y: '100vh',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
    height: 250vh;
    position: relative;
    display: flex;
    align-items: center;
`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: white;

`

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`

const WorkPage = () => {

    const ref = useRef(null);
    const yingyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            if (yingyang.current) yingyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
        }


        window.addEventListener('scroll', rotate);

        return () => window.removeEventListener('scroll', rotate);
    }, [])

    const container = {

        hidden: { opacity: 0 },
        show: {
            opacity: 1,

            transition: {
                staggerChildren: 0.5,
                duration: 0.5,
            }
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <ParticleComponent config={particlesConfig} />

                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {
                        Work.map(d =>
                            <Card key={d.id} data={d} />
                        )
                    }
                </Main>
                <Rotate ref={yingyang}>
                    <YinYang width={80} height={80} fill={darkTheme.text} />
                </Rotate>
                <BigTitle text="PROJETS" top='10%' right='20%' />

            </Box>
        </ThemeProvider>
    )
}

export default WorkPage