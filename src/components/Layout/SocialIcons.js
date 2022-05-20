import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Facebook, Github, Twitter, YouTube } from '../../utilities/AllSVGs'
import { darkTheme } from '../../utilities/Themes'

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 1rem;
    left: 2rem;

    z-index: 3;

    &>*:not(:first-child) {
        margin: 0 0.3rem;
    }
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
                    <Github width={25} height={25} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Twitter width={25} height={25} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Facebook width={25} height={25} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <YouTube width={25} height={25} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
        </Icons>
    )
}

export default SocialIcons