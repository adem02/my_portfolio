import styled from 'styled-components'


export const Main = styled.div`
    display: flex;
    width: 70vw;
    align-items: center;
    margin: 0.5rem auto;

    .title {
        flex-grow: 1;
        width: auto;
        text-align: center;
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }

    .line {
        flex-grow: 10;
        height: 2.5px;
        background-color: ${props => props.theme.text};
    }
`