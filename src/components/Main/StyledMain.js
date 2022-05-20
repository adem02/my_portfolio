import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3, duration: 0.3
        }
    },
    exit: {
        y: '-100vh',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

export const MainContainer = styled(motion.div)`
    background: ${props => props.theme.body};
    width: 100vw;
    height: calc(100vh - 5rem);
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6{
        font-family: 'Cuprum',sans-serif;
    }
`

export const Container = styled.div`
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

export const Center = styled.button`
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

export const DarkDiv = styled.div`
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