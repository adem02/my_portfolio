import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import { lightTheme, darkTheme } from '../../utilities/Themes';




const Layout = (props) => {

    const location = useLocation()

    const theme = ['/work', '/skills'].includes(location.pathname) ? darkTheme : lightTheme;

    return (
        <Fragment>
            <MainNavigation theme={theme} />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout