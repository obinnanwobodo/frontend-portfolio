import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.genabout}>

            <div className={styles.abouttexts}>

                <div><h2 className={styles.about}>About Me</h2></div>

                <div className={styles.gen123}>
                    <p className={styles.one}>I'm Obinna Nwobodo, a passionate frontend developer with a dedication to crafting exceptional <br />digital experiences. With expertise in modern web technologies including React, Next.js, JavaScript,<br />and CSS frameworks, I specialize in transforming complex business requirements into intuitive, <br />scalable, and visually stunning web applications.</p>
                    <p className={styles.two}>My approach combines technical precision with creative problem-solving, ensuring that every project <br />not only meets but exceeds client expectations. I believe that great software is born from the<br />intersection of robust functionality and exceptional user experience, and I'm committed to bringing <br />your digital dreams to life with clean, efficient, and maintainable code.</p>
                    <p className={styles.three}>Whether you're a startup looking to establish your digital presence, a B2B company needing a <br />professional website, or an enterprise requiring sophisticated SaaS solutions, I bring the expertise,<br />dedication, and collaborative spirit necessary to turn your vision into reality.</p>
                </div>


                <h3 className={styles.ready}>Ready to bring your ideas to life? Let's collaborate!</h3>

            </div>


        </div>
    )
}

export default About