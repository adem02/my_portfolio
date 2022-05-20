import styled from 'styled-components'
import { motion } from 'framer-motion'


export const containerVariants = {
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

export const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Grid = styled.div`
    width: 90%;

    color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    display: grid;
    grid-template-columns: auto auto;
    gap: 5em;
    z-index: 2;

    margin-bottom: 5rem;
`