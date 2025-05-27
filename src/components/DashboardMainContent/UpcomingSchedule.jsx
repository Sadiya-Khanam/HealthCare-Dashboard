import React from "react";
import styles from "./UpcomingSchedule.module.css";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import upcomingAppointments from "../../data/upcoming"; // Import the data

const UpcomingSchedule = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>The Upcoming Schedule</h2>

      {Object.entries(appointmentsByDay).map(([day, appointments]) => (
        <div key={day} className={styles.dayGroup}>
          <h3 className={styles.dayTitle}>{`On ${day}`}</h3>
          {appointments.map((appt) => (
            <SimpleAppointmentCard
              key={appt.id}
              title={appt.title} // Pass the title
              time={appt.time}
              icon={appt.icon}   // Pass the emoji as the icon prop
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;