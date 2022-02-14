// import exp from 'node:constants';
import React from 'react';
import styles from './Top.module.css';
import Link from 'next/link';

function Top(): JSX.Element {
  return (
    <header className={`page-part ${styles.Top}`} id='Top'>
      <img src='/Enroll/printer.png' className={styles.printer} />
      <div className={styles.intro}>
        <div className={styles.title}>Enroll</div>
        <div className={styles.subtitle}>浙大彩票选课系统唯一合法外挂</div>
      </div>
      <Link href='/Enrolldownload'>
        <div className={styles.download}>
          <img src='/Enroll/enroll-logo.svg' className={styles.icon} />
          <div className={styles.box}>
            <div className={styles.install}>立即安装</div>
            <div className={styles.version}>version 5.29</div>
          </div>
        </div>
      </Link>
    </header>
  );
}
export default Top;
