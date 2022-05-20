import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '../../utilities/Themes'
import { WorkData } from '../../data/WorkData'
import Card from './Card'
import { YinYang } from '../../utilities/AllSVGs'
import BigTitle from '../Layout/BigTitle'
import ParticleComponent from '../Layout/ParticleComponent'
import particlesConfig from '../../config/work-particlesjs-config.json'
import { containerVariants, Box, Main, Rotate } from './StyledWork'

const Work = () => {

    const ref = useRef(null);
    const yingyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            if (yingyang.current) yingyang.current.style.transform = `rotate(` + -window.pageYOffset + `deg)`
        }


        window.addEventListener('scroll', rotate);

        return () => window.removeEventListener('scroll', rotate);
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,

            transition: {
                staggerChildren: 0.5,
                duration: 0.5,
            }
        }
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <ParticleComponent config={particlesConfig} />

                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {
                        WorkData.map(d =>
                            <Card key={d.id} data={d} />
                        )
                    }
                </Main>
                <Rotate ref={yingyang}>
                    <YinYang width={80} height={80} fill={darkTheme.text} />
                </Rotate>
                <BigTitle text="PROJETS" top='10%' right='20%' />

            </Box>
        </ThemeProvider>
    )
}

export default Work