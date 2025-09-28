import React from 'react'
import styles from './About.module.css'
import SectionWrapper from '../sectionwrapper/SectionWrapper'

const About = () => {
    return (

        <div className={styles.genabout}>
            <div className={styles.abouttexts}>
                <div>
                    <h2 className={styles.about}>About Me</h2>
                </div>
                <SectionWrapper>
                    <div className={styles.gen123}>
                        <p className={styles.one}>
                            I'm Obinna Nwobodo, a passionate frontend developer with a dedication to
                            crafting exceptional digital experiences. With expertise in modern web technologies including
                            React, Next.js, JavaScript, and CSS frameworks, I specialize in transforming complex business
                            requirements into intuitive, scalable, and visually stunning web applications.
                        </p>
                        <p className={styles.two}>
                            My approach combines technical precision with creative problem-solving,
                            ensuring that every project not only meets but exceeds client expectations. I believe that
                            great software is born from the intersection of robust functionality and exceptional user
                            experience, and I'm committed to bringing your digital dreams to life with clean, efficient,
                            and maintainable code.
                        </p>
                        <p className={styles.three}>
                            Whether you're a startup looking to establish your digital presence, a B2B
                            company needing a professional website, or an enterprise requiring sophisticated SaaS
                            solutions, I bring the expertise, dedication, and collaborative spirit necessary to turn your
                            vision into reality.
                        </p>
                    </div>
                </SectionWrapper>

            </div>
        </div>

    )
}

export default About
