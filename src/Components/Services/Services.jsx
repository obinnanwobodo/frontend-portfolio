import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <div className={styles.genservices}>

            <div className={styles.sc}>
                <h2 className={styles.services}>Services</h2>
                <p className={styles.com}>Comprehensive frontend development services tailored for SaaS, B2B, and e-<br />commerce clients.</p>
            </div>

            <div className={styles.mainservicegen}>


                <div className={styles.saasgen}>
                    <h2 className={styles.saas}>SaaS Development</h2>
                    <li className={styles.saas1}>Fintech SaaS, Healthcare SaaS, E-commerce SaaS</li>
                    <li className={styles.saas2}>Custom SaaS solutions for startups and enterprises</li>
                </div>


                <div className={styles.b2bgen}>
                    <h2 className={styles.b2b}>B2B Website Development</h2>
                    <li className={styles.b2b1}>Professional business websites that convert and engage</li>
                    <li className={styles.b2b2}>Landing pages, lead generation portals, client dashboards</li>
                </div>


                <div className={styles.ecomgen}>
                    <h2 className={styles.ecom}>E-commerce Website Development</h2>
                    <li className={styles.ecom1}>Online stores that drive sales and customer satisfaction</li>
                    <li className={styles.ecom2}>Custom-built e-commerce platform</li>
                </div>


                <div className={styles.customgen}>
                    <h2 className={styles.custom}>Custom Individual Websites</h2>
                    <li className={styles.custom1}>Personal portfolios, blogs, and creative websites</li>
                    <li className={styles.custom2}> Fully customized designs and functionality</li>
                </div>


                <div className={styles.seogen}>
                    <h2 className={styles.seo}>SEO Optimization</h2>
                    <li className={styles.seo1}>Improve search rankings and organic visibility</li>
                    <li className={styles.seo2}>On-page SEO, technical SEO, content strategy</li>
                </div>


            </div>


        </div>
    )
}

export default Services