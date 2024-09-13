import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Pérez',
      text: '¡Me encantó el servicio! Mis uñas quedaron espectaculares, muy recomendadas.',
      image: '/images/user1.jpg',
    },
    {
      name: 'Lucía González',
      text: 'El trato fue excelente, y los diseños son únicos. Volveré sin duda.',
      image: '/images/user2.jpg',
    },
    {
      name: 'Carla Fernández',
      text: 'Un ambiente relajante y profesional. ¡Amo mis uñas nuevas!',
      image: '/images/user3.jpg',
    },
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <h2 className={styles.title}>Testimonios de Clientes</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialItem}>
            <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.text}>"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;