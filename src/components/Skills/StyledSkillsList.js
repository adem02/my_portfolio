
import styled from 'styled-components'
import { motion } from 'framer-motion'



export const GridItem = styled.div`
    text-align: center;

    &.intro, &.langages, &.tools {
        grid-column: 1 / 3;
    }

    .description {
        margin: 1em auto;
        width: 40vw;
        text-align: center;
    }
    h3 {
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }

    @media screen and (max-width: 768px){
        &.intro, &.langages, &.tools, &.mobile, &.tools, &.backend, &.frontend, &.cloud {
            grid-column: 1 / 3;
        }
        .description {
            margin: 1em auto;
            width: 90%;
            text-align: center;
        }
    }
`

export const UL = styled.ul`
    list-style-type: none;
`

export const Li = styled(motion.li)`
    line-height: 1.5;
    width: 50%;
    margin: auto;

    

    .leveledList {
        display: flex;
        align-items: center;
        line-height: 2;

        .label {
            flex-grow: 1;
        }

        .level {
            flex-basis: 80%;
            width: 25vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: ${props => props.theme.text};
            height: 0.7vh;

            .line{
                height: 100%;
            }
        }
    }

    .legend {
        .leveledListDescription {
            color: ${props => `rgba(0, 255, 255,0.7)`};
            text-align: center;
            font-style: italic;
            margin-top: -0.7em;
            font-size: 13px;
        }
    }
    

    @media screen and (max-width: 768px){
        width: 95%;
        margin: auto;
    }
`