import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Skilled Nail Art</h2>
      <p className={styles.description}>
        Descubre nuestros servicios de alta calidad y transforma tus uñas en una obra de arte.
      </p>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <i className="fas fa-hand-paper"></i>
          <h3>Nail Care</h3>
          <p>Cuidado especializado para uñas saludables.</p>
        </div>
        <div className={styles.serviceItem}>
          <i className="fas fa-paint-brush"></i>
          <h3>Nail Art</h3>
          <p>Diseños creativos y elegantes para todas las ocasiones.</p>
        </div>
        <div className={styles.serviceItem}>
          <i className="fas fa-plus-circle"></i>
          <h3>Add-Ons</h3>
          <p>Complementos personalizados para tu tratamiento.</p>
        </div>
        <div className={styles.serviceItem}>
          <i className="fas fa-spa"></i>
          <h3>Treatments</h3>
          <p>Tratamientos rejuvenecedores para el cuidado de tus manos.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;