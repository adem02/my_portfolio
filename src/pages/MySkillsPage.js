import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { lightTheme } from '../utilities/Themes'
// import { Design, Develope } from '../utilities/AllSVGs'
import ParticleComponent from '../components/ParticleComponent'
import BigTitle from '../components/BigTitle'

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
        x: '-100vw',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


`

// const Main = styled.div`
//     border: 2px solid ${props => props.theme.text};
//     color: ${props => props.theme.text};
//     background-color: ${props => props.theme.body};
//     padding: 2rem;
//     width: 30vw;
//     height: 60vh;
//     z-index: 3;
//     line-height: 1;

//     font-family: 'Ubuntu Mono',monospace;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     &:hover {
//         color: ${props => props.theme.body};
//         background-color: ${props => props.theme.text};
//     }
// `

// const Title = styled.h2`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: calc(1em + 1vw);

//     ${Main}:hover &{
//         &>*{
//             fill: ${props => props.theme.body};
//         }
//     }

//     &>*:first-child{
//         margin-right: 1rem;
//     }
// `

// const Description = styled.div`
//     color: ${props => props.theme.text};
//     font-size: calc(0.6em + 1vw);
//     padding: 0.5rem 0;

//     strong{
//         margin-bottom: 1rem;
//         text-transform: uppercase;
//     }
//     ul,p{
//         margin-left: 2rem;
//     }

//     ${Main}:hover &{
//             color: ${props => props.theme.body};
//     }
// `

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ParticleComponent theme='light' />
                {/* <Main>
                    <Title>
                        <Design width={40} height={40} /> Designer
                    </Title>
                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>
                            I like to Design
                        </strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile Apps</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>
                            Tools
                        </strong>
                        <ul>
                            <li>Mobile Apps</li>
                        </ul>
                    </Description>
                </Main> */}
                {/* <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>
                            Skills
                        </strong>
                        <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>
                            Tools
                        </strong>
                        <p>VScode, Github, Codepen etc.</p>
                    </Description>
                </Main> */}
                <BigTitle text="SKILLS" top="80%" left="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage