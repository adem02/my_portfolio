import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme } from '../utilities/Themes'
import BigTitle from '../components/BigTitle'
import { generateAge } from '../utilities/ageConverter'
import imgDevWeb from '../assets/Images/jsTechnologies.png'
// import profile from '../assets/Images/my_profile.jpeg'
import profileDark from '../assets/Images/my_profile_dark.jpg'
import reactJS from '../assets/Images/depositphotos_427124532-stock-photo-react-inscription-laptop-code-background.webp'
import jjpp from '../assets/Images/java-javascript-php-python-logo.png'
import qubondev from '../assets/Images/qualites-bon-developpeur-web.png'
import AboutTitle from '../components/AboutTitle'
import pendule from '../assets/Images/pendules.webp'
import pc3d from '../assets/Images/pc3d.jpg'
import mobileBureau from '../assets/Images/mobile_bureautique.jpeg'

const Box = styled.div`
    background-color: ${props => props.theme.body};
`

const Main = styled.div`
    color: ${props => props.theme.text};
    line-height: 1.5;
    width: 90%;
    margin: auto;
    z-index: 4;
    /* position: relative; */

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
        flex-basis: 55%;
        text-align: center;
        align-self: center;
    }

    .imgContainer {
        flex-basis: 25%;
        align-content: center;
        display: flex;
        justify-content: center;
        margin: 0 0.5em;

        img {
            cursor: pointer;
            /* border-radius: 15px; */
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
    /* padding-bottom: 2em; */
    padding-bottom: 2rem;
`
const Ambitions = styled.div`
    /* display: flex;
    align-items: unset; */
    margin: 2rem 0;
`

// const TitleDiv = styled.div`

// `

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Grid = styled.div`
    display: grid;
    
    grid-template-columns: auto auto auto;
    gap: 0.2rem;
`

const GridItem = styled.div`
    &.introText { 
        grid-column: 1 / span 3;
        width: 75%;
        margin: auto;
    }
    &.item1-img {

        grid-row: 2;
        grid-column: 1 / 4;
        margin: 0 auto 2rem auto;

        img {
            object-fit: contain;
        }
    }

    &.bddText {
        grid-area: 3 / 1 / 5 / 1;
        margin: auto;
    }

    &.frontendText {
        grid-area: 3 / 3 / 5 / 3;
        margin: auto;
    }

    &.backendText {
        
     }
    &.mobileText { }
    &.bueautiqueText { }
    &.item2-img {
        margin: auto;
        object-fit: cover;
        margin-bottom: 6rem;
    }

    &.item3-img {
        margin: auto;
    }

    &.endText {
        grid-column: 1 / 4;
        margin: 4rem auto 4rem auto;
    }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                {/* <ParticleComponent theme='light' /> */}
                <Main>
                    <PersonnalPresentation>
                        <div className='presentationText'>
                            Salut, je m'appelle Ahmed, j'ai {generateAge(new Date(1994, 7, 12))} ans et je suis un grand passionné de développement web.
                            Au cours de mes années d'études des sciences de la programmation, j'ai développé une réelle passion pour les technologies du web.
                            J'en ai fait aujourd'hui ma vocation.
                            <br />
                            Dans mon parcours professionnel, scolaire et personnel, j'ai été amené à apprendre des langages de programmation comme : le Java, Python, Javascript et bien d'autres <br />
                        </div>
                        <div className='imgContainer'>
                            <img src={profileDark} alt="my profile" />
                        </div>
                    </PersonnalPresentation>


                    <Ambitions>
                        <AboutTitle title='MES ASPIRATIONS.' />

                        <Grid>
                            <GridItem className="introText">
                                J'apire à devenir un excellent programmeur, capable de s'adapter efficacement et rapidement à n'importe quel langage de programmation auquel je serai confronté dans ma carrière de développeur.
                                Je me donne les moyens pour devenir un expert en Javascript ainsi qu'un excellent développeur Java et Python.
                                Je désir aquérir des compétences indispensables dans les technologies Javascript.
                            </GridItem>
                            <GridItem className="item1-img">
                                <img src={pc3d} alt="Dev Web" width={450} height={350} style={{ objectFit: 'cover' }} />
                            </GridItem>

                            <GridItem className="bddText">
                                Base de données : Ayant déjà des compétences solides en base de données relationnelles et NoSQL, j'ai pour ambitions de me perfectionner en MySQL, MongoDB et Postgre SQL.
                            </GridItem>
                            <GridItem className="backendText">
                                Backend : Je me perfectionne en Node/Express ainsi que dans d'autres langages serveurs comme Java et Python
                            </GridItem>
                            <GridItem className="frontendText">
                                Frontend : Déjà développeur React, je me perfectionne tous les jours dans cette technologie. Je m'améliore également en Angular qui est après React mon Framework Frontend favori.
                            </GridItem>
                            <GridItem className="item2-img">
                                <img src={qubondev} alt="Dev Web" width={280} height={250} />
                            </GridItem>


                            <GridItem className="bueautiqueText">
                                Bureautiques : Je veux également travailler sur des applications bureautiques que ce soit dans le milieu professionnel ou sur des projets personnels. Pour cela, je pense m'initier au développement bureautique avec Javascript et/ou Java
                            </GridItem>
                            <GridItem className="item3-img">
                                <img src={mobileBureau} alt="Dev Web" width={500} height={350} />
                            </GridItem>
                            <GridItem className="mobileText">
                                Mobile : Ayant Déjà été initié à React Native et Android Java, je souhaite également monter en compétences dans ces deux technologies afin d'être parfaitement capable de concevoir des applications mobiles robustes et performants
                            </GridItem>
                            <GridItem className="endText">
                                <h1>Tels sont mes aspirations en tant que passionné de programmation.</h1>
                            </GridItem>
                        </Grid>
                    </Ambitions>

                    <WorkAttitude>
                        <AboutTitle title='ATOUTS.' />
                        Passion : La programmation est ma passion, et ce, quel que soit le langage. J'aime apprendre à programmer dans tous les langages, découvrir et approfondir mes connaissances en Javascript, Java et Pyton.<br />
                        Esprit d'équipe : J'aime également travailler en équipe sur un projet donné. C'est sans doute une de mes plus belles expériences dans le domaine de la programmation. Rigoureux et curieux, je sais parfaitement m'intégrer au sein d'une équipe afin de collaborer efficacement.<br />
                        Analyse : Je sais prendre du recul afin d'étudier les besoins d'un projet. Guidé par mon besoin constant de chercher le programme le plus efficace, l'algorithme le plus optimal, je m'efforce toujours autant que je le peux à produire le travail le plus efficace, facile à maintenir et faire évoluer.<br />
                        Polyvalent : J'ai toujours su facilement m'adapter à tous types de situations. Que ce soit en entreprise ou à l'école, j'ai toujours su apprendre le plus vite possible ce dont j'avais besoin pour m'intégrer au mieux.<br />
                        Ma passion pour la développement web me pousse à être parfaitement polyvalent dans toutes situations.
                    </WorkAttitude>
                </Main>
                <BigTitle text="ABOUT" top="8%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage

{/* <ImagesContainer>
    <div>
        <img src={imgDevWeb} alt="Dev Web" width={250} height={100} />
    </div>
    <div>
        <img src={reactJS} alt="Dev Web" width={200} height={150} style={{ objectFit: 'cover' }} />
    </div>
    <div>
        <img src={jjpp} alt="Dev Web" width={350} height={150} />
    </div>
    <div>
        <img src={pendule} alt="Dev Web" width={280} height={200} />
    </div>
</ImagesContainer> */}