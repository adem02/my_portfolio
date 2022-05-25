import React from 'react'
import { skillsData } from '../../data/SkillsData'
import { motion } from 'framer-motion'
import { GridItem, UL, Li } from './StyledSkillsList'
import DisplaySkillsIcon from './DisplaySkillsIcon'
import { withTheme } from 'styled-components'

const SkillsList = (props) => {
    return (
        <React.Fragment>
            {Object.keys(skillsData).map((skills, index) =>
                <GridItem key={index} className={Object.keys(skillsData)[index]}>
                    <div>
                        <DisplaySkillsIcon skillLabel={Object.keys(skillsData)[index]} index={index} fill={`rgba(${props.theme.textRgba},0.8)`} />
                        <h3>{skillsData[skills].title}</h3>
                    </div>
                    <p className="description">
                        {skillsData[skills].description}
                    </p>
                    <UL>
                        {skillsData[skills].list.map((skill, index) => (
                            (skills === 'langages') ?
                                (<Li key={index}>
                                    {skill.label ? (
                                        <div className="leveledList">
                                            <div className="label">{skill.label}</div>
                                            <div className="level">
                                                <motion.div
                                                    className='line'
                                                    initial={{ width: 0, opacity: 0.7 }}
                                                    animate={{
                                                        width: `${skill.aLevel}`,
                                                        opacity: 1,
                                                        backgroundColor: `rgb(${skill.rgb})`,
                                                    }}
                                                    transition={{ delay: 0.1, duration: 2.5 }}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="legend">
                                            <div className="label">{skill.label}</div>
                                            <div className="leveledListDescription">{skill.description}</div>
                                        </div>
                                    )
                                    }

                                </Li>)
                                :
                                (<Li
                                    key={index}
                                    whileHover={{ scale: 1.3, color: `rgba(${props.theme.textRgba})` }}
                                    transition={{ type: "spring", stiffness: 600 }}
                                >
                                    <span>{skill.label}</span>
                                </Li>)
                        ))}
                    </UL>
                </GridItem>
            )
            }

        </React.Fragment >
    )
}

export default withTheme(SkillsList)