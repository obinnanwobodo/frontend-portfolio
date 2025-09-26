"use client"
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // React Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.gennav}>
      <h2 className={styles.obinna}>OBINNA</h2>

      {/* Nav Links */}
      <div className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
      </div>
    </div>
  );
};

export default Navbar;
