import React from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  // Puedes reemplazar estas imágenes con enlaces reales de tus diseños de uñas.
  const images = [
    '/images/nail1.jpg',
    '/images/nail2.jpg',
    '/images/nail3.jpg',
    '/images/nail4.jpg',
    '/images/nail5.jpg',
    '/images/nail6.jpg',
  ];

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.title}>Galería de Diseños</h2>
      <p className={styles.description}>
        Explora algunos de nuestros diseños más populares.
      </p>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.gridItem}>
            <img src={image} alt={`Nail design ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;