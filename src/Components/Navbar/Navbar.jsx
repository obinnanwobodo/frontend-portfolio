import React from 'react'
import styles from './Navbar.module.css'




const Navbar = () => {
  return (
    <div className={`${styles.gennav}`}>

<h2 className={`${styles.obinna}`}>OBINNA</h2>


<div className={`${styles.navlinks}`}>
<a href="#">Home</a>
<a href="#about">About</a>  
<a href="#skills">Skills</a>
<a href="#services">Services</a>
<a href="projects">Projects</a>
<a href="Contact">Contact</a>
</div>


    </div>
  )
}

export default Navbar