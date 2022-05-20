import React from 'react'
import { skillsData } from '../../data/SkillsData'
import { motion } from 'framer-motion'
import { GridItem, UL, Li } from './StyledSkillsList'

const SkillsList = (props) => {
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
                            (skills === 'langages') ?
                                (<Li key={index}>
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
                                </Li>)
                                :
                                (<Li
                                    key={index}
                                    whileHover={{ scale: 1.3, fontWeight: "bold", color: "white" }}
                                    transition={{ type: "spring", stiffness: 600 }}
                                >
                                    <span>{skill.label}</span>
                                </Li>)
                        ))}
                    </UL>
                </GridItem>
            )}

        </React.Fragment>
    )
}

export default SkillsList