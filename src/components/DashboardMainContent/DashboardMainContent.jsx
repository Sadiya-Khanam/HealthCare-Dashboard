import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';
import healthIndicators from '../../data/healthStatus';
import styles from './DashboardMainContent.module.css';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Dashboard Header */}
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
      </div>

      {/* Main Grid */}
      <div className={styles.mainContentGrid}>
        {/* Left Column: Anatomy */}
        <div className={styles.gridItemAnatomy}>
          <AnatomySection />
        </div>

        {/* Right Column Top: Health Status Cards */}
        <div className={styles.gridItemHealthCards}>
          <HealthStatusCards indicators={healthIndicators} />
        </div>

        {/* Right Column Bottom: Calendar */}
        <div className={styles.gridItemCalendar}>
          <div className={styles.calendarHeader}>
            <div className={styles.timePeriod}>
              <button className={styles.timePeriodButton}>
                This Week <FaChevronDown className={styles.dropdownIcon} />
              </button>
            </div>
          </div>
          <CalendarView />
        </div>

        {/* Bottom Full Width: Activity Feed */}
        <div className={styles.activityFeedRow}>
          <div className={styles.activityHeader}>
            <h2>Activity</h2>
            <div className={styles.activityDetails}>
              <a href="/activity" className={styles.detailsLink}>
                Details <FaArrowRight className={styles.detailsArrow} />
              </a>
            </div>
          </div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
