import React from 'react'
import { ThemeProvider } from 'styled-components'
import { motion } from "framer-motion"

import { lightTheme } from '../../utilities/Themes'
import profileDark from '../../assets/Images/my_profile_dark.jpg'
import AboutTitle from '../../components/About/AboutTitle'
import pc3d from '../../assets/Images/pc3d.jpg'
import {
    Box, Main, PersonnalPresentation,
    Ambitions, Grid, GridItem,
    WorkAttitude, containerVariants
} from './StyledAbout'



const About = (props) => {
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
                            De mon parcours scolaire et personnel en passant par mes expériences professionnelles, , j'ai été amené à apprendre des langages de programmation comme : le Java, Python, Javascript et bien d'autres. <br />
                            J'ai travaillé dans le cadre professionnel sur un projet à impact financé par <strong>L'Oréal France pour les femmes</strong> et accompagné par <strong>Microsoft</strong> France dans le cadre de leur programme <i>ShareAI</i>.
                        </div>
                        <div className='imgContainer'>
                            <motion.img whileHover={{ scale: 1.1 }}
                                transition={{ type: "tween", stiffness: 500 }} src={profileDark} alt="my profile" />
                        </div>
                    </PersonnalPresentation>


                    <Ambitions>
                        <AboutTitle title='AMBITIONS.' theme={lightTheme} />

                        <Grid>
                            <GridItem className="introText">
                                J'apire à devenir un excellent programmeur, capable de s'adapter efficacement et rapidement à n'importe quel langage de programmation auquel je serai confronté dans ma carrière.
                                Je me donne les moyens pour devenir un expert en Javascript ainsi qu'un excellent développeur Java et Python.
                                Je désir aquérir des compétences indispensables dans les technologies Javascript.
                            </GridItem>

                            <GridItem className="devWeb1">
                                J'ai acquis de solides <strong>compétences</strong> dans le développement web avec les technologies Javascript.
                                Avec 1 année d'expérience en entreprise et plus de 3 années d'utilisations des technologies Javascript sur des projets scolaires ou personnels, j'ai su monter considérablement en compétence en tant que développeur web fullstack.
                                <div className="styledLine"></div>
                            </GridItem>

                            <GridItem className="item1-img">
                                <img src={pc3d} alt="Dev Web" width={350} height={300} />
                            </GridItem>

                            <GridItem className="devWeb2">
                                Parallèlement, j'ai développé des projet de différentes natures me permettant d'avoir des connaissances variées et d'être polyvalent.
                                J'ai aussi développé, dans le cadre de mes études à <a className='liens' href='https://etna.io' target="_blank" rel="noreferrer">l'Etna</a>, des applications mobiles en React Native et Android Studio.
                                <div className="styledLine"></div>
                            </GridItem>

                            <GridItem className="citation">
                                <h3>En somme je veux atteindre le but que je me suis fixé : être un excellent développeur d'applications web, mobiles et bureautiques.</h3>
                            </GridItem>
                        </Grid>
                    </Ambitions>

                    <WorkAttitude>
                        <AboutTitle title='ATOUTS.' theme={lightTheme} />
                        <Grid className='atouts'>
                            <GridItem className="passion">
                                <h3>Passion</h3>
                                <p>La programmation est ma passion, et ce, quel que soit le langage. J'aime apprendre à programmer dans tous les langages, découvrir et approfondir mes connaissances notamment en Javascript, Java et Pyton.</p>
                                <br />
                                <h3>Analyse</h3>
                                <p>Je sais prendre du recul afin d'étudier les besoins d'un projet. Guidé par mon besoin constant de chercher le programme le plus efficace, l'algorithme le plus optimal, je m'efforce toujours autant que possible de produire un code facile à lire, à maintenir et faire évoluer.</p>
                            </GridItem>
                            <GridItem className="esprit">
                                <h3>Esprit d'équipe</h3>
                                <p>J'aime également travailler en équipe. C'est sans doute une de mes plus belles expériences (chez <a className='liens' href='https://www.humanitydiaspo.org/' target="_blank" rel="noreferrer">Humanity Diaspo ONG</a>) dans le domaine de la programmation. Rigoureux et curieux, je sais parfaitement m'intégrer au sein d'une équipe afin de collaborer efficacement.</p>
                                <br />
                                <h3>Polyvalent</h3>
                                <p>J'ai toujours su facilement m'adapter à tous types de situations. Que ce soit en entreprise ou à l'école, j'ai toujours su apprendre le plus vite possible ce dont j'avais besoin pour m'intégrer au mieux.</p>
                            </GridItem>
                            <GridItem className="citation">
                                <h3 style={{ marginTop: '8px' }}>Ma passion pour le développement web me pousse à être parfaitement polyvalent dans toutes situations.</h3>
                            </GridItem>
                        </Grid>
                    </WorkAttitude>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default About