import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Menu as MenuSVG } from '../../utilities/AllSVGs'
import { styled } from '@mui/material';

import { AboutIcon, ContactIcon, DownloadIcon, SkillsIcon, WorksIcon } from '../../utilities/AllSVGs'
import { NavigationLink } from './StyledMainNavigation'
import { motion } from 'framer-motion'
import { withTheme } from 'styled-components'
import { darkTheme } from '../../utilities/Themes';
import cv from '../../assets/cv/CV.pdf';
import { useLocation } from 'react-router-dom';



const ButtonStyled = styled(Button)({
    "&:hover": {
        backgroundColor: 'transparent',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    '&:focus': {

    },
})

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        padding: '0.5em 0.8em',
    },
    '& a': {
        marginTop: '0.8em',
    }
})

const RespMenu = (props) => {
    const styledTheme = props.theme;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const location = useLocation()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        handleClose()
    }, [location])


    return (
        <div className="menu">
            <ButtonStyled
                color='inherit'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuSVG width={30} height={30} fill={styledTheme.text} />
            </ButtonStyled>
            <StyledMenu
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: styledTheme.body,
                        maxWidth: 'calc(100% - 20px)'
                    }
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <NavigationLink to='/about'>
                    <motion.h4
                        initial={{
                            x: -200,
                            transition: { type: 'spring', duration: 1, delay: 0.2 }
                        }}
                        animate={{
                            x: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AboutIcon width={20} height={20} />
                        A propos
                    </motion.h4>
                </NavigationLink>
                <NavigationLink to="skills">
                    <motion.h4
                        initial={{
                            x: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        animate={{
                            x: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <SkillsIcon width={20} height={20} fill={styledTheme.text === darkTheme.text ? darkTheme.text : darkTheme.body} />
                        Compétences
                    </motion.h4>
                </NavigationLink>
                <NavigationLink to='/work'>
                    <motion.h4
                        initial={{
                            x: -200,
                            transition: { type: 'spring', duration: 1.3, delay: 0.2 }
                        }}
                        animate={{
                            x: 0,
                            transition: { type: 'spring', duration: 1.1, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <WorksIcon width={20} height={20} fill={styledTheme.text === darkTheme.text ? darkTheme.text : darkTheme.body} />
                        Projets
                    </motion.h4>
                </NavigationLink>
                <NavigationLink target="_blank" to={{ pathname: "mailto:demahmed02@gmail.com" }}>
                    <motion.h4
                        initial={{
                            x: -200,
                            transition: { type: 'spring', duration: 1.6, delay: 0.2 }
                        }}
                        animate={{
                            x: 0,
                            transition: { type: 'spring', duration: 1.3, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ContactIcon width={20} height={20} fill={styledTheme.text === darkTheme.text ? darkTheme.text : darkTheme.body} />
                        Contactez-moi
                    </motion.h4>
                </NavigationLink>
                <NavigationLink target="_blank" to={cv} download>
                    <motion.h4
                        initial={{
                            x: -200,
                            transition: { type: 'spring', duration: 1.4, delay: 0.2 }
                        }}
                        animate={{
                            x: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <DownloadIcon width={20} height={20} />
                        CV
                    </motion.h4>
                </NavigationLink>
            </StyledMenu>
        </div>
    );
}

export default withTheme(RespMenu)