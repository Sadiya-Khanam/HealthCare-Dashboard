import React from 'react';
import styles from './Sidebar.module.css';
import { FaChartBar, FaHistory, FaCalendarAlt, FaClipboardList, FaStethoscope, FaUserMd, FaComments, FaQuestionCircle, FaCog } from 'react-icons/fa';
import navigationLinks from '../../data/navigation';
import { Link } from 'react-router-dom';

const iconMap = {
  Dashboard: FaChartBar,
  History: FaHistory,
  Calendar: FaCalendarAlt,
  Appointments: FaClipboardList,
  Statistics: FaChartBar,
  Chat: FaComments,
  Support: FaQuestionCircle,
  Setting: FaCog,
};

const Sidebar = () => {
  const generalLinks = navigationLinks.slice(0, 5);
  const toolsLinks = navigationLinks.slice(5);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        <span className={styles.health}>Health</span><span className={styles.care}>Care</span>
      </div>

      <h2 className={styles.header}>General</h2>
      <nav>
        <ul className={styles.navList}>
          {generalLinks.map(link => {
            const Icon = iconMap[link.text];
            return (
              <li
                key={link.id}
                className={`${styles.navItem} ${link.text === 'Dashboard' ? styles.active : styles.inactive}`}
                aria-label={link.text}
              >
                <Link to={link.path} className={styles.navLink}>
                  {Icon && <Icon className={styles.icon} />}
                  <span className={styles.label}>{link.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <h2 className={styles.header}>Tools</h2>
      <nav>
        <ul className={styles.navList}>
          {toolsLinks.map(link => {
            const Icon = iconMap[link.text];
            return (
              <li
                key={link.id}
                className={`${styles.navItem} ${styles.inactive}`}
                aria-label={link.text}
              >
                <Link to={link.path} className={styles.navLink}>
                  {Icon && <Icon className={styles.icon} />}
                  <span className={styles.label}>{link.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;