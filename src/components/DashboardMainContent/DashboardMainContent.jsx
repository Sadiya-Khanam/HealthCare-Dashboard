import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import healthIndicators from '../../data/healthStatus'; 
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';
import styles from './DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Top Row: Anatomy + Health Cards + Calendar */}
      <div className={styles.topRow}>
        <div className={styles.anatomyWrapper}>
         <AnatomySection />
          <ActivityFeed />
        </div>
        <div className={styles.healthCardsWrapper}>
          <HealthStatusCards indicators={healthIndicators} /> {/* Pass the prop */}
        </div>
        <div className={styles.calendarWrapper}>
        <CalendarView />
        </div>
      </div>

     
    </div>
  );
};

export default DashboardMainContent;