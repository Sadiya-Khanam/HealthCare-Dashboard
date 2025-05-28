import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{title}</h4>
          {icon && <span className={styles.titleEmoji}>{icon}</span>}
        </div>
        {time && <span className={styles.time}>{time}</span>}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
