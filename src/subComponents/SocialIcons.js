import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Facebook, Github, Twitter, YouTube } from '../components/AllSVGs'
import { darkTheme } from '../components/Themes'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.3rem 0;
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 5rem;
    background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body}
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={{ height: 0 }}
                animate={{ height: '5rem' }}
                transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            />
        </Icons>
    )
}

export default SocialIcons