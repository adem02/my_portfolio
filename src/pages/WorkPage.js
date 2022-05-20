import React from 'react'
import { ThemeProvider } from 'styled-components'
import Work from '../components/Work/Work'

import { darkTheme } from '../utilities/Themes'

const WorkPage = () => {



    return (
        <ThemeProvider theme={darkTheme}>
            <Work />
        </ThemeProvider>
    )
}

export default WorkPage