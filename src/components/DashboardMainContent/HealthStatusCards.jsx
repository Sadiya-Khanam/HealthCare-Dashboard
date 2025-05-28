import React from "react";
import styles from "./HealthStatusCards.module.css";
import healthIndicators from "../../data/healthStatus";

const HealthStatusCards = ({ indicators }) => {
  return (
    <div className={styles.container}>
      {indicators.map((indicator) => (
        <div key={indicator.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.emoji}>{indicator.emoji}</span>
            <div>
              <h4 className={styles.title}>{indicator.name}</h4>
              <p className={styles.date}>Date: {indicator.date}</p>
            </div>
          </div>
          <div className={styles.statusBar}>
            <div
              className={styles.filledBar}
              style={{
                width: `${indicator.progress}%`,
                backgroundColor:
                  indicator.status === 'good' ? '#3BE09B' :
                    indicator.status === 'average' ? '#FFA76B' :
                      indicator.status === 'low' ? '#FF6B6B' : '#ccc'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;