import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h6{
        display: inline-block;
    }

    body{
        background-color: ${props => props.theme.body};
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        box-sizing: border-box;
        font-family: 'Cuprum',sans-serif;
    }
`

export default GlobalStyle;