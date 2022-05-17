import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;
    background-color: #2196F3;
    padding: 1.5rem;
    justify-content: space-around;
    gap: 1.5rem;
`
const GridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;

    &.item1 {
        grid-column: 1 / 4;
    }

    &.item2 {
        grid-column: 1 / 3;
    }

    &.item3 {
        grid-row: 2 / 5;
        grid-column-start: 3;
    }

    &.item4 {
        grid-row: 3 / 6;
        grid-column: 1 / 2;
    }

    &.item7 {
        grid-column: 1 / 4;
    }
`



const AboutPage2 = () => {
    return (
        <React.Fragment>
            <GridContainer>
                <GridItem className='item1'>1</GridItem>
                <GridItem className='item2'>2</GridItem>
                <GridItem className='item3'>3</GridItem>
                <GridItem className='item4'>4</GridItem>
                <GridItem className='item5'>5</GridItem>
                <GridItem className='item6'>6</GridItem>
                <GridItem className='item7'>7</GridItem>
            </GridContainer>
            <Outlet />
        </React.Fragment>
    )
}

export default AboutPage2