import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import nailHero from '../../Components/images/nail-hero.jpg'; // Ajusta la ruta a donde se encuentra la imagen

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Galería</a></li>
          <li><a href="#">Testimonios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div className={styles.hero} style={{ backgroundImage: `url(${nailHero})` }}>
        <h1 className={styles.heroText}>Manos bellas, uñas perfectas</h1>
        <p className={styles.heroSubtext}>Descubre la elegancia que tus manos merecen</p>
        <button className={styles.ctaButton}>Servicios y Precios</button>
      </div>
    </header>
  );
};

export default Header;