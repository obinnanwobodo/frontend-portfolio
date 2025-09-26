import React from 'react'
import styles from './Contact.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";






const Contact = () => {
    return (
        <div className={styles.contactgen}>

<div className={styles.gencontent}>
            <div className={styles.lr}>
                <h2 className={styles.lc}>Let's Connect</h2>
                <p className={styles.ready}>Ready to bring your project to life? I'd love to hear about your ideas and discuss how <br />we can work together.</p>
            </div>


            <div className={styles.firstbox}>

                <div className={styles.box1}>
                    <div className={styles.waicn}><FaWhatsapp /></div>
                    <a className={styles.wa} href="">WhatsApp</a>
                </div>


                <div className={styles.box2}>
                    <div className={styles.linkicn}><LuLinkedin /></div>
                    <a className={styles.link} href="">LinkedIn</a>
                </div>


                <div className={styles.box3}>
                    <div className={styles.instaicn}><FaInstagram /></div>
                    <a className={styles.insta} href="">Instagram</a>
                </div>


                <div className={styles.box4}>
                    <div className={styles.emailicn}><MdOutlineMail /></div>
                    <a className={styles.email} href="">Email</a>
                </div>

            </div>
</div>
        </div>
    )
}

export default Contact