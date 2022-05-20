import React from 'react'


import ParticleComponent from '../Layout/ParticleComponent'
import BigTitle from '../Layout/BigTitle'
import particlesConfig from '../../config/skills-particlesjs-config.json'
import SkillsList from './SkillsList'
import { containerVariants, Box, Grid } from './StyledSkills'

const Skills = () => {
    return (

        <Box
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ParticleComponent config={particlesConfig} />

            <Grid>
                <SkillsList />
            </Grid>

            <BigTitle text="COMPETENCES" top="80%" left="30%" />
        </Box>
    )
}

export default Skills