import React from 'react';
import styles from './Header.module.css';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
        <FaBell className={styles.bellIcon} />
      </div>
    </header>
  );
};

export default Header;
