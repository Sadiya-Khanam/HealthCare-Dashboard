import React from 'react';
import styles from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <DashboardMainContent />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;