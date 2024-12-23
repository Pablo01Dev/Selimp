import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import Selimplogo from "../../assets/Selimp.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
      if (window.innerWidth > 770 && menuActive) {
        setMenuActive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuActive((prev) => !prev);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.querySelector(sectionId);
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    if (isSmallScreen) setMenuActive(false);
  };

  return (
    <section id="header">
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <a href="#home">
          <img className={styles.logo} src={Selimplogo} alt="Logo Selimp" />
        </a>
        <nav className={styles.nav} ref={menuRef}>
          {isSmallScreen && (
            <div className={styles.menuToggle} onClick={toggleMenu}>
              {menuActive ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
            </div>
          )}
          <ul className={`${menuActive ? styles.active : ''} ${styles.menu}`}>
            <li><a href="#home" onClick={(e) => scrollToSection(e, "#home")}>Home</a></li>
            <li><a href="#nossos-servicos" onClick={(e) => scrollToSection(e, "#nossos-servicos")}>Nossos Serviços</a></li>
            <li><a href="#sobre" onClick={(e) => scrollToSection(e, "#sobre")}>Sobre</a></li>
            <li><a href="#contato" onClick={(e) => scrollToSection(e, "#contato")}>Contato</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Header;
