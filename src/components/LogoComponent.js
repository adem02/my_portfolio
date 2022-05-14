import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.h1`
    display: inline-block;
    text-transform: none;
    color: ${props => props.theme.text};
    font-family: 'Pacifico',cursive;
    font-weight: 100;

    margin: 0 1rem;
    z-index:1;
`

const LogoComponent = (props) => {

    // console.log(props.theme);

    return (
        <NavLink to='/'>
            <Logo theme={props.theme}>
                AHDEM
            </Logo>
        </NavLink>
    )
}

export default LogoComponent