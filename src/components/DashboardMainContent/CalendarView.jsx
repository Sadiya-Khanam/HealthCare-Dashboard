import React from "react";
import styles from "./CalendarView.module.css";
import UpcomingSchedule from './UpcomingSchedule';
import { calendarViewDays, calendarViewTimes, appointmentsData } from '../../data/appointments';

const CalendarView = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.monthText}>October 2021</span>
        <div className={styles.headerRight}>
          <div className={styles.profilePic}>JD</div>
          <button className={styles.addButton} aria-label="Add event">+</button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className={styles.calendarGrid}>
        {calendarViewDays.map((day, index) => (
          <div key={index} className={styles.dayColumn}>
            <div className={styles.dayLabel}>{day}</div>
            <div className={styles.slots}>
              {calendarViewTimes.map((time, idx) => {
                const isSelected =
                  (day === "Tues 26" && time === "09:00") ||
                  (day === "Thurs 28" && time === "11:00") ||
                  (day === "Sat 30" && time === "12:00") ||
                  (day === "Sat 30" && time === "09:00");

                return (
                  <div
                    key={idx}
                    className={`${styles.timeSlot} ${isSelected ? styles.selected : ""}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Appointment cards below calendar */}
      <div className={styles.appointments}>
        {appointmentsData.map((appt, index) => {
          let cardStyle = styles.card;
          if (appt.title === "Dentist") {
            cardStyle = `${cardStyle} ${styles.cardDentist}`;
          } else if (appt.title === "Physiotherapy Appointment") {
            cardStyle = `${cardStyle} ${styles.cardPhysio}`;
          }

          return (
            <div key={index} className={cardStyle}>
              <div className={styles.cardTitle}>
                {appt.title}
                {appt.emoji && <span className={styles.titleEmoji}>{appt.emoji}</span>}
              </div>
              <div className={styles.cardTime}>{appt.time}</div>
              {appt.doctor && <div className={styles.cardDoctor}>{appt.doctor}</div>}
            </div>
          );
        })}
      </div>

      {/* Upcoming Schedule component */}
      <div className={styles.upcomingScheduleWrapper}>
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default CalendarView;