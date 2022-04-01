import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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

const Line = styled.span`
    width: 2px;
    height: 5rem;
    background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body}
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/adem02" }}>
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme} />
                </NavLink>
            </div>

            <Line color={props.theme} />
        </Icons>
    )
}

export default SocialIcons