'use client'



import React, { useState } from 'react'
import styles from './Skills.module.css'

const Skills = () => {

  const [activeSkill, setActiveSkill] = useState('technical');



  return (
    <div className={styles.genskills}>

      <div className={styles.skillscontent}>
        <h2 className={styles.se}>Skills & Expertise</h2>
        <p className={styles.ac}>A comprehensive blend of technical proficiency and essential soft skills that drive <br />successful project outcomes.</p>



        {/* USESTATE BUTTON */}




        <div className={styles.segen}>

          <button
            className={`${styles.btn1} ${activeSkill === 'technical' ? styles.activeBtn : ''}`}
            onClick={() => setActiveSkill('technical')}
          >
            Tech Skills
          </button>

          <button
            className={`${styles.btn2} ${activeSkill === 'soft' ? styles.activeBtn : ''}`}
            onClick={() => setActiveSkill('soft')}
          >
            Soft Skills
          </button>
        </div>

        {/* what will show */}

        <div className={styles.techndsoft}>
          {activeSkill === 'technical' && (

            <div className={styles.tendli}>
              <p className={styles.te}>Technical Expertise</p>

              <div className={styles.tech}>
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Html</li>
              </div>
            </div>


          )}
          {activeSkill === 'soft' && (

            <div className={styles.gensoft}>
              <p className={styles.pq}>Professional Qualities</p>

              <div className={styles.soft}>
                <li>Communication</li>
                <li>Collaboration & Teamwork</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
              </div>


<div className={styles.soft}>

<li>Emotional Intelligence</li>
                <li>Adaptability</li>
                <li>Empathy</li>
                <li>Innovation</li>
                <li>Attention to Detail</li>

</div>


            </div>

          )}


        </div>




      </div>


    </div>
  )
}

export default Skills