import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: fixed;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: fixed;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`

const Work = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: fixed;
    top: 50%;
    left: calc(1rem + 2vw);
    transform: translate(-50%, -50%) rotate(-90deg);
    text-decoration: none;
    z-index: 1;
`
const About = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const BottomBar = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
`

const Navigation = () => {
    return (
        <React.Fragment>
            <Contact target="_blank" to={{ pathname: "mailto:demahmed02@gmail.com" }}>
                <motion.h2
                    initial={{
                        y: -200,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Say Hi..
                </motion.h2>
            </Contact>

            <Blog to='/blog'>
                <motion.h2
                    initial={{
                        y: -200,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Blog
                </motion.h2>
            </Blog>

            <Work to='/work'>
                <motion.h2
                    initial={{
                        y: -200,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Work
                </motion.h2>
            </Work>

            <BottomBar>
                <About to='/about'>
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About.
                    </motion.h2>
                </About>

                <Skills to='/skills'>
                    <motion.h2
                        initial={{
                            y: 200,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills.
                    </motion.h2>
                </Skills>
            </BottomBar>

        </React.Fragment>
    )
}

export default Navigation