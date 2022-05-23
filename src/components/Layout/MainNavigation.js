import React from 'react'
import { motion } from 'framer-motion'

import AllPagesCommonComponents from './AllPagesCommonComponents'
import { AboutIcon, ContactIcon, DownloadIcon, SkillsIcon, WorksIcon } from '../../utilities/AllSVGs'
import cv from '../../assets/cv/CV.pdf';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../utilities/Themes';
import { Header, NavigationLink } from './StyledMainNavigation'
import BasicMenu from './Menu';

const MainNavigation = (props) => {

    return (
        <ThemeProvider theme={props.theme}>
            <Header>
                <AllPagesCommonComponents theme={props.theme} />
                <nav>
                    <ul>
                        <li>
                            <NavigationLink to='/about'>
                                <motion.h4
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <AboutIcon width={20} height={20} />
                                    A propos
                                </motion.h4>
                            </NavigationLink>
                        </li>

                        <li>
                            <NavigationLink to='/skills'>
                                <motion.h4
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <SkillsIcon width={20} height={20} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                                    Compétences
                                </motion.h4>
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink to='/work'>
                                <motion.h4
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <WorksIcon width={20} height={20} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                                    Projets
                                </motion.h4>
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink to="/">
                                <motion.h4
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ContactIcon width={20} height={20} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                                    Contactez-moi
                                </motion.h4>
                            </NavigationLink>
                        </li>

                        <li>
                            <NavigationLink target="_blank" to={cv} download>
                                <motion.h4
                                    initial={{
                                        y: -200,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <DownloadIcon width={20} height={20} fill={props.theme === darkTheme ? darkTheme.text : darkTheme.body} />
                                    CV
                                </motion.h4>
                            </NavigationLink>
                        </li>
                    </ul>
                </nav>
                <BasicMenu />
            </Header>
        </ThemeProvider>
    )
}

export default MainNavigation
// <ThemeProvider theme={themeDispatcher(location.pathname) === 'light' ? lightTheme : darkTheme}>