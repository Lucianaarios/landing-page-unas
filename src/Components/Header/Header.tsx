import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Nail Studio</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;