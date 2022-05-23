import styled from 'styled-components'
import { motion } from "framer-motion"

export const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
`

export const Main = styled.div`
    color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    line-height: 1.5;
    width: 100vw;
    min-width: 350px;
    margin: auto;
    z-index: 3;
    text-align: justify;

    font-size: 1rem;
    font-style: italic;
`

export const PersonnalPresentation = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    

    .presentationText {
        flex-basis: 50%;
        margin: auto 1.5em;
    }

    .imgContainer {
        flex-basis: 25%;
        align-content: center;
        display: flex;
        justify-content: center;
        margin: 1em 0.5em;

        img {
            cursor: pointer;
            object-fit: cover;
            width: 280px;
            height: 280px;
        }
    }

    @media screen and (max-width: 768px){
        .presentationText {
            flex-basis: 90%;
            margin: 1rem 1.5em;
        }
        .imgContainer {
            flex-basis: 90%;
            align-content: center;
            display: flex;
            justify-content: center;
            margin: 0 0.5em;

        img {
            cursor: pointer;
            object-fit: cover;
            width: 280px;
            height: 280px;
        }
    }
    }
`

export const WorkAttitude = styled.div`
    padding-bottom: 3rem;
`
export const Ambitions = styled.div`
    margin: 2rem 0;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;

    strong {
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }

    &.atouts {
        width: 90%;
        margin: auto;
    }

    .liens {
        text-decoration: none;
        color: "#33ffff";
        font-weight: bold;
    }
`

export const GridItem = styled.div`
    &.introText { 
        grid-column: 1 / span 3;
        width: 85%;
        margin: 1em auto 20px auto ;

    }

    &.devWeb1 {
        grid-area: 2 / 1 / 3 / 2;
    }

    &.devWeb2 {
        grid-area: 2 / 3 / 3 / 4;
    }

    &.devWeb2, &.devWeb1 {
        width: 90%;
        text-align: justify;
        margin: auto;

        .styledLine {
            height: 3px;
            width: 65px;
            background-color: black;
        }

    }
    &.citation {
        grid-column: 1 / 4;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        &.item1-img {
            display: none;
        }

        &.devWeb1 {
            grid-area: 2 / 1 / 3 / 4;
        }

        &.devWeb2 {
            grid-area: 3 / 1 / 3 / 4;
        }

        &.passion, &.esprit {
            grid-column: 1/ 4;
        }
    }
`

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
        x: '100vh',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}