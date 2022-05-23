import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Box = styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover{
        background-color: ${props => props.theme.body};
        color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
        border: 1px solid ${props => props.theme.text};
    }

    @media screen and (max-width: 768px){
        width: 55vw;
        height: 30vh;
    }

`

export const Title = styled.h2`
    font-size: calc(1em + 0.5vw);
    opacity: 0.9;
`

export const Description = styled.h2`
    font-size: calc(0.8em + 0.3vw);
    font-weight: 500;
`

export const Tags = styled.div`
    border-top: 2px solid ${props => props.theme.body};
    padding-top: 0.5rem;

    display: flex;
    flex-wrap: wrap;

    ${Box}:hover &{
        border-top: 2px solid ${props => props.theme.text};
    }
`

export const Tag = styled.span`
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
`

export const CLink = styled.a`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);
    cursor: pointer;

    ${Box}:hover &{
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
    }
`

export const Git = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    ${Box}:hover &{
        fill: ${props => props.theme.text};
    }    
`

