import React from 'react'
import styled from 'styled-components'
import Particles from "react-tsparticles";

import configDark from '../config/particlesjs-config.json'
import configLight from '../config/particlesjs-config-light.json'
import workConfig from '../config/work-particlesjs-config.json'

const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`

const ParticleComponent = (props) => {
    return (
        <Box>
            <Particles style={{ position: 'absolute', top: 0 }} id="tsparticles" params={props.config} />
        </Box>
    )
}

// Site pour générer les particules : vincentgarreau.com/particles.js

export default ParticleComponent