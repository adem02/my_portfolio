import React from 'react'
import { motion } from 'framer-motion'

import Me from '../../assets/Images/profile_nobg.png'
import { Box, SubBox, Text } from './StyledIntro'
import { useMediaQuery } from '@mui/material'




const Intro = () => {

    const matches = useMediaQuery('(max-width:768px)')



    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: `${matches ? '30vh' : '45vh'}` }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Yo,</h1>
                    <h3>Moi c'est Ahmed.</h3>
                    <h6>Je suis un développeur d'applications  web, mobiles et bureautiques.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt='ma pp' />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro