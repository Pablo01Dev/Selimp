import React from 'react';
import styles from './footer.module.css'; // Certifique-se de importar o arquivo CSS corretamente

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoItem}>
          <span role="img" aria-label="Phone" className={styles.footerIcon}>
            📞
          </span>
          <p>21 2605-5923 | 21 2614-0308</p>
        </div>
        <div className={styles.footerInfoItem}>
          <span role="img" aria-label="Email" className={styles.footerIcon}>
            ✉️
          </span>
          <p>contato@selimp.com.br</p>
        </div>
        <div className={styles.footerInfoItem}>
          <span role="img" aria-label="Location" className={styles.footerIcon}>
            📍
          </span>
          <p>São Gonçalo - RJ</p>
        </div>
        <div className={styles.footerSocial}>
          <a href="http://instagram.com/selimprj" aria-label="Instagram">
            <img
              src="https://via.placeholder.com/24/FFFFFF?text=I"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/people/Selimp/61564228050595/"
            aria-label="Facebook"
          >
            <img
              src="https://via.placeholder.com/24/FFFFFF?text=F"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>SELIMP © 1999. Site Criado por Andarilho Studio / B.A Tech Fast</p>
      </div>
    </footer>
  );
}

export default Footer;
