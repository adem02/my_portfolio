import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import AllPagesCommonComponents from './AllPagesCommonComponents'
import { AboutIcon, ContactIcon, DownloadIcon, SkillsIcon, WorksIcon } from '../../utilities/AllSVGs'
import cv from '../../assets/cv/CV_DEM.pdf';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../utilities/Themes';

const Header = styled.header`
  width: 100%;
  height: 5rem;

  background-color: ${props => props.theme.body};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  position: sticky;
  top: 0;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;
  }

  & li {
    margin: 0 1rem;
    color: white;
  }  
`

const NavigationLink = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

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
                            <NavigationLink target="_blank" to={{ pathname: "mailto:demahmed02@gmail.com" }}>
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
            </Header>
        </ThemeProvider>
    )
}

export default MainNavigation

// <ThemeProvider theme={themeDispatcher(location.pathname) === 'light' ? lightTheme : darkTheme}>