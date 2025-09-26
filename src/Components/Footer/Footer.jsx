import React from 'react'
import styles from './Footer.module.css'





const Footer = () => {
    return (
        <div className={styles.genfooter}>


            <div className={styles.footercontent}>

                <div className={styles.leftset}>
                    <h2 className={styles.on}>Obinna Nwobodo</h2>
                    <p className={styles.fd}>Frontend Developer & Web Experience Builder</p>
                </div>



                <div className={styles.rightset}>
                    <p className={styles.copyright}>© 2025 Obinna Nwobodo. All rights reserved.</p>
                        <p className={styles.crafted}>Crafted with passion and precision</p>
                    
                </div>


            </div>


        </div>
    )
}

export default Footer