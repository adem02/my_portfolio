import React from 'react'
import styled from 'styled-components'
import { skillsData } from '../data/SkillsData'
import { motion } from 'framer-motion'


const GridItem = styled.div`
    text-align: center;

    &.intro, &.langages, &.tools {
        grid-column: 1 / 3;
    }

    .description {
        margin: 1em auto;
        width: 40vw;
        text-align: center;
    }
    h3 {
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }
`

const UL = styled.ul`
    list-style-type: none;
`

const Li = styled(motion.li)`
    line-height: 1.5;
    width: 50%;
    margin: auto;
`

const Skills = (props) => {

    return (

        <React.Fragment>
            <GridItem className="intro">
                <h3>Presention</h3>
                <p></p>
            </GridItem>
            {Object.keys(skillsData).map((skills, index) =>
                <GridItem key={index} className={Object.keys(skillsData)[index]}>
                    <h3>{skillsData[skills].title}</h3>
                    <p className="description">
                        {skillsData[skills].description}
                    </p>
                    <UL>
                        {skillsData[skills].list.map((skill, index) => (
                            <Li
                                key={index}
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 600 }}
                            >
                                {skill.label}
                            </Li>
                        ))}
                    </UL>
                </GridItem>
            )}

        </React.Fragment>


    )
}

export default Skills