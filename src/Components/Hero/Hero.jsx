'use client';

import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css'; // Import CSS Module
import { FaChevronDown } from "react-icons/fa6";



const TYPING_SPEED = 100;         // ms per char when typing
const DELETING_SPEED = 50;       // ms per char when deleting
const PAUSE_BEFORE_DELETE = 1500; // ms to wait after finishing typing (your requested 1.5s)
const PAUSE_BEFORE_TYPE = 500;    // ms to wait after finishing deleting before typing next phrase

const Hero = () => {
  const phrases = [
    "Frontend Developer",
    "React | Next.js | JavaScript | CSS",
    "I build scalable web solutions that turn ideas into reality.",
    "Welcome to my portfolio!"
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // true = typing forward; false = deleting

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeoutId;

    if (isTyping) {
      // Still typing characters
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setText(prev => prev + currentPhrase.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, TYPING_SPEED);
      } else {
        // Finished typing the full phrase -> wait before starting deletion
        timeoutId = setTimeout(() => {
          setIsTyping(false); // begin deleting after pause
        }, PAUSE_BEFORE_DELETE);
      }
    } else {
      // Deleting characters
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, DELETING_SPEED);
      } else {
        // Finished deleting -> move to next phrase after a short pause and start typing again
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }, PAUSE_BEFORE_TYPE);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isTyping, phraseIndex, phrases]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Hi, I&apos;m Obinna</h1>

        <div className={styles.textWrapper}>
          <h2 className={styles.subHeading}>{text}</h2>
          <span className={styles.cursor}></span>
        </div>

        <p className={styles.crafting}>
          Crafting beautiful, responsive, and user-centric web experiences that help businesses <br />
          grow and connect with their audience.
        </p>

        <div className={styles.btngen}>
          <button className={styles.btn1}>
            <a href="#projects">View My Work</a>
          </button>
          <button className={styles.btn2}>
            <a href="#contact">Get In Touch</a>
          </button>
        </div>

        <div className={styles.downicn}> <a href="#about"><FaChevronDown /></a> </div>

      </div>
    </div>
  );
};

export default Hero;
