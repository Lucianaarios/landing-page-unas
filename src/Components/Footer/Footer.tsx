import React from 'react';
import styles from './Footer.module.css';
import discountImg from '../../Components/images/discount.jpg'; // Imagen de descuento

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.discountContainer}>
        <img src={discountImg} alt="Descuento en servicios" className={styles.discountImage} />
        <div className={styles.discountTextContainer}>
          <p className={styles.discountText}>20% OFF on Manicure + Gel Polish</p>
          <button className={styles.ctaButton}>Booking Online</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;