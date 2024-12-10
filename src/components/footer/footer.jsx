import React from 'react';
import styles from './footer.module.css'; // Certifique-se de importar o arquivo CSS corretamente

function Footer() {
  return (
    <section id="footer">

      <div>
        <footer className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerInfoItem}>
              <img src="../../src/assets/phone.png" alt="phone" />
              <p>21 2605-5923 | 21 2614-0308</p>
            </div>
            <div className={styles.footerInfoItem}>
              <img src="../../src/assets/mail.png" alt="mail" />
              <p>contato@selimp.com.br</p>
            </div>
            <div className={styles.footerInfoItem}>
              <img src="../../src/assets/location.png" alt="local" />
              <p>São Gonçalo - RJ</p>
            </div>
            <div className={styles.footerSocial}>
              <a href="http://instagram.com/selimprj" aria-label="Instagram">
                <i className="fab fa-instagram" style={{ fontSize: '24px', color: 'white' }}></i>
              </a>
              <a href="https://www.facebook.com/people/Selimp/61564228050595/" aria-label="Facebook">
                <i className="fab fa-facebook" style={{ fontSize: '24px', color: 'white' }}></i>
              </a>
            </div>
          </div>
        </footer>
        <div className={styles.footerCopyright}>
          <p>SELIMP © 1999. Site Criado por Andarilho Studio / B.A Tech Fast</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
