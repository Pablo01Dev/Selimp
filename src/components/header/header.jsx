import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import Selimplogo from "../../assets/Selimp.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770); // Detectar se a tela é pequena

  // Detectar rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atualizar estado ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770); // Atualiza para true ou false
      if (window.innerWidth > 770 && menuActive) {
        setMenuActive(false); // Fecha o menu ao sair do modo "small screen"
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  // Fecha o menu ao clicar fora dele
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

  // Alternar o menu
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  // Scroll com offset ajustado
  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    const target = document.querySelector(sectionId);
    const offset = target.getBoundingClientRect().top + window.scrollY - 80; // Ajuste para altura do Header
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });

    // Fecha o menu em telas pequenas
    if (isSmallScreen) {
      setMenuActive(false);
    }
  };

  return (
    <section id="header">
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <a href="#home">
          <img
            className={styles.logo}
            src={Selimplogo}
            alt="Logo Selimp"
          />
        </a>
        <nav className={styles.nav} ref={menuRef}>
          {/* Botão de Hambúrguer (só aparece em telas pequenas) */}
          {isSmallScreen && (
            <div className={styles.menuToggle} onClick={toggleMenu}>
              {menuActive ? '' : '☰'}
            </div>
          )}
          {/* Menu Responsivo */}
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
