import styled from 'styled-components';
import { motion } from 'framer-motion'


export const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 75vw; 
    height: 55vh;
    display: flex;

    background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index: 1;
`

export const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;


    .pic {
        position: absolute;
        bottom: 1.2rem;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 70%;
        height:90%;
        object-fit: contain;
    }
`

export const Text = styled.div`
    font-size: calc(0.7em + 1vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.7)`};
        font-size: calc(0.5em + 1vw);
        font-weight: 300;
    }
`