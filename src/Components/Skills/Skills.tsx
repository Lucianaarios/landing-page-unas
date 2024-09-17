import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Habilidades para Cuidar Tus Uñas</h2>
      <div className={styles.skillList}>
        <div className={styles.skillItem}>
          <h3>Manicura Profesional</h3>
          <p>Ofrecemos los mejores tratamientos para fortalecer y embellecer tus uñas.</p>
        </div>
        <div className={styles.skillItem}>
          <h3>Diseños Creativos</h3>
          <p>Desde lo clásico hasta lo más vanguardista en decoración de uñas.</p>
        </div>
        <div className={styles.skillItem}>
          <h3>Cuidado de Cutículas</h3>
          <p>El cuidado adecuado de las cutículas para una apariencia pulida y saludable.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;