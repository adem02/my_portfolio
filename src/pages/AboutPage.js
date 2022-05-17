import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from "framer-motion"

import { lightTheme } from '../utilities/Themes'
import BigTitle from '../components/BigTitle'
import profileDark from '../assets/Images/my_profile_dark.jpg'
import AboutTitle from '../components/AboutTitle'
import pc3d from '../assets/Images/pc3d.jpg'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3, duration: 0.7
        }
    },
    exit: {
        x: '100vh',
        transition: { ease: 'easeInOut' },
        opacity: 0,
    }
}

const Box = styled(motion.div)`
    background-color: ${props => props.theme.body};
`

const Main = styled.div`
    color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    line-height: 1.5;
    width: 90%;
    margin: auto;
    z-index: 4;
    text-align: justify;

    font-size: 1rem;
    font-style: italic;
`

const PersonnalPresentation = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    height: 300px;
    

    .presentationText {
        flex-basis: 50%;
        margin: auto 1.5em;
    }

    .imgContainer {
        flex-basis: 25%;
        align-content: center;
        display: flex;
        justify-content: center;
        margin: 0 0.5em;

        img {
            cursor: pointer;
            object-fit: cover;
            width: 280px;
            height: 280px;
            transition: 0.5s;

            &:hover {
                width: 285px;
                height: 285px;
            }
        }
    }
`

const WorkAttitude = styled.div`
    padding-bottom: 3rem;
`
const Ambitions = styled.div`
    margin: 2rem 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 0.8rem;

    strong {
        color: ${props => `rgba(${props.theme.textRgba},0.6)`};
    }
`

const GridItem = styled.div`
    &.introText { 
        grid-column: 1 / span 3;
        width: 75%;
        margin: 1em auto 20px auto ;

    }

    &.devWeb1 {
        grid-area: 2 / 1 / 3 / 2;
    }

    &.item1-img {
        grid-area: 2 / 2 / 3 / 3;

        img {
            object-fit: contain;
            text-align: start;
        }
    }

    &.devWeb2 {
        grid-area: 2 / 3 / 3 / 4;
    }

    &.devWeb2, &.devWeb1 {
        width: 80%;
        text-align: justify;
        margin: auto;

        .styledLine {
            height: 3px;
            width: 65px;
            background-color: red;
        }

    }
    &.citation {
        grid-column: 1 / 4;
        text-align: center;
    }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Main>
                    <PersonnalPresentation>
                        <div className='presentationText'>
                            Salut, je m'appelle Ahmed et je suis un grand passionné de développement web.
                            Au cours de mes années d'études des sciences de la programmation, j'ai développé une réelle passion pour les technologies du web.
                            J'en ai fait aujourd'hui ma vocation.
                            <br />
                            Dans mon parcours professionnel, scolaire et personnel, j'ai été amené à apprendre des langages de programmation comme : le Java, Python, Javascript et bien d'autres <br />
                            J'ai travaillé dans le milieu professionnel sur un projet à impact financé par L'Oréal France pour les femmes et accompagné par Microsoft France dans le cadre de le programme ShareAI.
                        </div>
                        <div className='imgContainer'>
                            <img src={profileDark} alt="my profile" />
                        </div>
                    </PersonnalPresentation>


                    <Ambitions>
                        <AboutTitle title='MES ASPIRATIONS.' theme={lightTheme} />

                        <Grid>
                            <GridItem className="introText">
                                J'apire à devenir un excellent programmeur, capable de s'adapter efficacement et rapidement à n'importe quel langage de programmation auquel je serai confronté dans ma carrière de développeur.
                                Je me donne les moyens pour devenir un expert en Javascript ainsi qu'un excellent développeur Java et Python.
                                Je désir aquérir des compétences indispensables dans les technologies Javascript.
                            </GridItem>

                            <GridItem className="devWeb1">
                                J'ai de <strong>compétences</strong> solides dans le développement web avec les technologies Javascript.
                                Plus de 3 ans d'expériences dans le développement web avec 1 année d'expériences en entreprise, j'ai su monter considérablement en compétence dans le domaince du développement web fullstack.
                                <div className="styledLine"></div>
                            </GridItem>

                            <GridItem className="item1-img">
                                <img src={pc3d} alt="Dev Web" width={350} height={300} />
                            </GridItem>

                            <GridItem className="devWeb2">
                                Parallèlement, j'ai développé des projet de différentes natures me permettant d'avoir des connaissances variés et d'être polyvalent.
                                J'ai aussi développé, dans le cadre de mes études, des applications mobiles en React Native et Android Studio.
                                <div className="styledLine"></div>
                            </GridItem>

                            <GridItem className="citation">
                                <h3>En somme je veux simplement atteindre le but que je me suis fixé : être un excellent développeur d'applications web, mobiles et bureautiques.</h3>
                            </GridItem>
                        </Grid>
                    </Ambitions>

                    <WorkAttitude>
                        <AboutTitle title='ATOUTS.' theme={lightTheme} />
                        <Grid>
                            <GridItem>
                                <h3>Passion</h3>
                                <p>La programmation est ma passion, et ce, quel que soit le langage. J'aime apprendre à programmer dans tous les langages, découvrir et approfondir mes connaissances notamment en Javascript, Java et Pyton.</p>
                                <br />
                                <h3>Analyse</h3>
                                <p>Je sais prendre du recul afin d'étudier les besoins d'un projet. Guidé par mon besoin constant de chercher le programme le plus efficace, l'algorithme le plus optimal, je m'efforce toujours autant que je le peux à produire le travail le plus efficace, facile à maintenir et faire évoluer.</p>
                            </GridItem>
                            <GridItem>
                                <h3>Esprit d'équipe</h3>
                                <p>J'aime également travailler en équipe. C'est sans doute une de mes plus belles expériences dans le domaine de la programmation. Rigoureux et curieux, je sais parfaitement m'intégrer au sein d'une équipe afin de collaborer efficacement.</p>
                                <br />
                                <h3>Polyvalent</h3>
                                <p>J'ai toujours su facilement m'adapter à tous types de situations. Que ce soit en entreprise ou à l'école, j'ai toujours su apprendre le plus vite possible ce dont j'avais besoin pour m'intégrer au mieux.</p>
                            </GridItem>
                            <GridItem className="citation">
                                <h3 style={{ marginTop: '8px' }}>Ma passion pour la développement web me pousse à être parfaitement polyvalent dans toutes situations.</h3>
                            </GridItem>
                        </Grid>
                    </WorkAttitude>
                </Main>
                <BigTitle text="ABOUT" top="8%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage