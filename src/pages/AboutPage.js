import React from 'react'
import { ThemeProvider } from 'styled-components'
import About from '../components/About/About'
import { lightTheme } from '../utilities/Themes'




const AboutPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <About />
        </ThemeProvider>
    )
}

export default AboutPage