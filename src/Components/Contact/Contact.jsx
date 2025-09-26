import React from 'react'
import styles from './Contact.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import SectionWrapper from '../sectionwrapper/SectionWrapper'






const Contact = () => {
    return (
        <div className={styles.contactgen}>

            <div className={styles.gencontent}>

                <SectionWrapper>

                    <div className={styles.lr}>
                        <h2 className={styles.lc}>Let's Connect</h2>
                        <p className={styles.ready}>Ready to bring your project to life? I'd love to hear about your ideas and discuss how <br />we can work together.</p>
                    </div>
                </SectionWrapper>


                <SectionWrapper>

                    <div className={styles.firstbox}>

                        <a href="https://wa.me/2347069185331">
                            <div className={styles.box1}>
                                <div className={styles.waicn}><FaWhatsapp /></div>
                                <p className={styles.wa} >WhatsApp</p>
                            </div>

                        </a>



                        <a href="https://www.linkedin.com/in/obinna-nwobodo-088413377">

                            <div className={styles.box2}>
                                <div className={styles.linkicn}><LuLinkedin /></div>
                                <p className={styles.link} >LinkedIn</p>
                            </div>


                        </a>


                        <a href="https://www.instagram.com/upscalewebdesigns/">

                            <div className={styles.box3}>
                                <div className={styles.instaicn}><FaInstagram /></div>
                                <p className={styles.insta}>Instagram</p>
                            </div>

                        </a>


                        <a href="mailto:obinnanwobodo27@gmail.com">


                            <div className={styles.box4}>
                                <div className={styles.emailicn}><MdOutlineMail /></div>
                                <p className={styles.email} >Email</p>
                            </div>

                        </a>

                    </div>
                </SectionWrapper>




                <SectionWrapper>

                    <div className={styles.secondbox}>

                        <h2 className={styles.rtsyp}>Ready to Start Your Project?</h2>

                        <p className={styles.wether}>Whether you need a stunning SaaS dashboard, a professional B2B website, or an <br />engaging e-commerce platform, I'm here to help bring your vision to life.</p>

                        <div className={styles.genbtn}>


                            <a href="https://wa.me/2347069185331">

                                <button className={styles.btn1}>
                                    <div className={styles.btn1icn}><FaWhatsapp /></div>
                                    <p className={styles.lcow}>Let's Chat on WhatsApp</p>
                                </button>

                            </a>





                            <a href="mailto:obinnanwobodo27@gmail.com">

                                <button className={styles.btn2}>
                                    <div className={styles.btn2icn}><MdOutlineMail /></div>
                                    <p className={styles.sae}>Send an Email</p>
                                </button>

                            </a>



                        </div>
                    </div>

                </SectionWrapper>






            </div>
        </div>
    )
}

export default Contact