import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <p className={styles.description}>
        Ofrecemos una variedad de servicios para embellecer tus uñas y darte la mejor experiencia.
      </p>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h3>Manicura</h3>
          <p>Manicura completa con los mejores productos para el cuidado de tus uñas.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Pedicura</h3>
          <p>Pedicura relajante y de alta calidad para tus pies.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Diseños de Uñas</h3>
          <p>Uñas artísticas y personalizadas para cualquier ocasión.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Extensiones de Uñas</h3>
          <p>Extensiones de uñas duraderas con un acabado natural o glamuroso.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;