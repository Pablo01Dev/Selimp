import React from 'react';
import styles from './footer.module.css'; // Certifique-se de importar o arquivo CSS corretamente
import Phone from '../../assets/phone.png';
import Mail from '../../assets/mail.png';
import Local from '../../assets/location.png';
function Footer() {
  return (
    <section id="footer">

      <div>
        <footer className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerInfoItem}>
              <img src={Phone} alt="phone" />
              <a href="tel:+552126055923">(21) 2605-5923</a>
              <a href="tel:+552126140308">(21) 2614-0308</a>
            </div>
            <div className={styles.footerInfoItem}>
              <img src={Mail} alt="mail" />
              <a href="mailto:contato@selimp.com.br">contato@selimp.com.br</a>
            </div>
            <div className={styles.footerInfoItem}>
              <img src={Local} alt="local" />
              <a href="https://maps.app.goo.gl/D847qVoXTVe4DqNJA">São Gonçalo - RJ</a>
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
      </div >
    </section >
  );
}

export default Footer;
