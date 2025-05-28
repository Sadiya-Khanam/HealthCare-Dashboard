/*import React from 'react';
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

export default ActivityFeed;*/

import React from 'react';
import styles from './ActivityFeed.module.css';

const ActivityFeed = () => {
  // Multiple data points per day
  const activityData = [
    { day: 'Mon', values: [20, 10, 5] },
    { day: 'Tues', values: [30, 25, 25] },
    { day: 'Wed', values: [15, 20, 10] },
    { day: 'Thurs', values: [10, 5, 5] },
    { day: 'Fri', values: [35, 30, 25] },
    { day: 'Sat', values: [5, 2, 3] },
    { day: 'Sun', values: [25, 30, 15] },
  ];

  // Flatten all values to find the max
  const maxValue = Math.max(...activityData.flatMap(d => d.values)) || 100;

  return (
    <div className={styles.activityContainer}>
      <div className={styles.chartHeader}>
        <h2 className={styles.chartTitle}>Activity</h2>
        <p className={styles.chartSubtitle}>3 appointments on this week</p>
      </div>

      <div className={styles.barChart}>
        {activityData.map(item => (
          <div key={item.day} className={styles.barWrapper}>
            <div className={styles.barGroup}>
              {item.values.map((val, i) => (
                <div
                  key={i}
                  className={styles.bar}
                  style={{
                    height: `${(val / maxValue) * 100}%`
                  }}
                ></div>
              ))}
            </div>
            <div className={styles.dayLabel}>{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;


