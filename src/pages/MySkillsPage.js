import React from 'react'
import { ThemeProvider } from 'styled-components'
import Skills from '../components/Skills/Skills'

import { darkTheme } from '../utilities/Themes'



const MySkillsPage = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Skills />
        </ThemeProvider>
    )
}

export default MySkillsPage