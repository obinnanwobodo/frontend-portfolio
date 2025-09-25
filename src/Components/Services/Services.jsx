import React from 'react'
import styles from './Services.module.css'

import { FaCloud } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Services = () => {
    return (
        <div className={styles.genservices}>

            <div className={styles.servicecontent}>

                <div className={styles.sc}>
                    <h2 className={styles.services}>My Services</h2>
                    <p className={styles.com}>Comprehensive frontend development services tailored for SaaS, B2B, e-commerce <br />and custom clients / Businesses.</p>
                </div>

                <div className={styles.mainservicegen}>


                    <div className={styles.saasgen}>
                        <div className={styles.icnndsaas}>
                            <div className={styles.saasicn}><FaCloud /></div>
                            <h2 className={styles.saas}>SaaS Development</h2>
                        </div>

                        <li className={styles.saas1}>Fintech SaaS, Healthcare SaaS, E-commerce SaaS</li>
                        <li className={styles.saas2}>Custom SaaS solutions for startups and enterprises</li>
                    </div>


                    <div className={styles.b2bgen}>

                        <div className={styles.icnndb2b}>
                            <div className={styles.b2bicn}><FaHandshake /></div>
                            <h2 className={styles.b2b}>B2B Website Development</h2>
                        </div>

                        <li className={styles.b2b1}>Professional business websites that convert and engage</li>
                        <li className={styles.b2b2}>Landing pages, lead generation portals, client dashboards</li>
                    </div>


                    <div className={styles.ecomgen}>

                        <div className={styles.icnndecom}>
                            <div className={styles.ecomicn}><LuShoppingCart /></div>
                            <h2 className={styles.ecom}>E-commerce Website Development</h2>
                        </div>

                        <li className={styles.ecom1}>Online stores that drive sales and customer satisfaction</li>
                        <li className={styles.ecom2}>Custom-built e-commerce platform</li>
                    </div>


                    <div className={styles.customgen}>

                        <div className={styles.icnndcustom}>
                            <div><CgProfile /></div>
                            <h2 className={styles.custom}>Custom Individual Websites</h2>
                        </div>

                        <li className={styles.custom1}>Personal portfolios, blogs, and creative websites</li>
                        <li className={styles.custom2}> Fully customized designs and functionality</li>
                    </div>


                    <div className={styles.seogen}>

                        <div className={styles.icnndseo}>
                            <div className={styles.seoicn}><AiOutlineSearch /></div>
                            <h2 className={styles.seo}>SEO Optimization</h2>
                        </div>
                        <li className={styles.seo1}>Improve search rankings and organic visibility</li>
                        <li className={styles.seo2}>On-page SEO, technical SEO, content strategy</li>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Services