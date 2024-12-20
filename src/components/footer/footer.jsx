import React from 'react';
import styles from './footer.module.css'; // Certifique-se de importar o arquivo CSS corretamente

function Footer() {
  return (
    <section id="footer">

      <div>
        <footer className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <div className={styles.footerInfoItem}>
              <img src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg" alt="phone" />
              <p>21 2605-5923 | 21 2614-0308</p>
            </div>
            <div className={styles.footerInfoItem}>
              <img src="https://e7.pngegg.com/pngimages/947/916/png-clipart-e-mail-icon-email-computer-icons-symbol-mail-icon-miscellaneous-angle.png" alt="mail" />
              <p>contato@selimp.com.br</p>
            </div>
            <div className={styles.footerInfoItem}>
              <img src="https://w7.pngwing.com/pngs/250/324/png-transparent-placeholder-pin-location-gps-point-position-essential-icon.png" alt="local" />
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
