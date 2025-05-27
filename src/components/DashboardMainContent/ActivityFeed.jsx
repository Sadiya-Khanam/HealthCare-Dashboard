import React from 'react';
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', value: 30 },
    { day: 'Tues', value: 80 },
    { day: 'Wed', value: 50 },
    { day: 'Thurs', value: 20 },
    { day: 'Fri', value: 90 },
    { day: 'Sat', value: 10 },
    { day: 'Sun', value: 70 },
  ];

  const maxValue = Math.max(...activityData.map(item => item.value)) || 100; 

  return (
    <div className={styles.activityContainer}>
      <div className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>Activity</h2>
        <p className={styles.chartSubtitle}>3 appointments this week</p>
      </div>
      <div className={styles.barChart}>
        {activityData.map(item => (
          <div key={item.day} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{
                height: `${(item.value / maxValue) * 100}%`,
              }}
            ></div>
            <div className={styles.dayLabel}>{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
