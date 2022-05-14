import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainNavigation from './MainNavigation'
import { lightTheme, darkTheme } from '../../utilities/Themes';




const Layout = (props) => {

    const location = useLocation()

    const theme = ['/work'].includes(location.pathname) ? darkTheme : lightTheme;

    return (
        <Fragment>
            <MainNavigation theme={theme} />
            <AnimatePresence exitBeforeEnter>
                <main>{props.children}</main>
            </AnimatePresence>
        </Fragment>
    )
}

export default Layout