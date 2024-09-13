import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#services" className={styles.link}>Servicios</a>
          <a href="#gallery" className={styles.link}>Galería</a>
          <a href="#testimonials" className={styles.link}>Testimonios</a>
          <a href="#contact" className={styles.link}>Contacto</a>
        </div>

        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Uñas Estéticas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;