import React from "react";
import styles from "./AnatomySection.module.css";
import bodyImage from "../../assets/human-anatomy.jpg";

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bodyWrapper}>
        <img src={bodyImage} alt="Human Anatomy" className={styles.bodyImage} />

        <div className={`${styles.label} ${styles.heart}`}>❤️ Healthy Heart</div>
        <div className={`${styles.label} ${styles.leg}`}>🦵 Healthy Leg</div>
      </div>


    </div>
  );
};

export default AnatomySection;
