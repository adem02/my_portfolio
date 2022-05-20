import styled from 'styled-components'
import { motion } from 'framer-motion'


export const containerVariants = {
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

export const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
    height: 250vh;
    position: relative;
    display: flex;
    align-items: center;
`

export const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: white;

`

export const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`