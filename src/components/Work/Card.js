import React from 'react';

import { Github } from '../../utilities/AllSVGs';
import { Box, Title, Description, Tags, Footer, Git, Tag, CLink } from './StyledCard'

// Framer motion config
const Item = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
        }
    }
}

const Card = (props) => {

    const { name, description, tags, demo, github } = props.data;
    return (
        <Box variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <CLink href={demo} target='_blank'>Visit</CLink>
                <Git href={github} target='_blank'>
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card