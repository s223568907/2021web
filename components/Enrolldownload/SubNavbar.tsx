import React from 'react';
import styles from './SubNavbar.module.css';
import Link from 'next/link';

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

function SubNavbar(): JSX.Element {
  return (
    <div className={styles.SubNavbar}>
      <img src='/Enroll/enroll-logo.svg' className={styles.logo} />
      <div className={styles.title}>Enroll</div>
      <Link href='/Enroll'>
        <div className={styles.about} onClick={() => scrollToAnchor('Top')}>
          关于
        </div>
      </Link>
      <Link href='/Enroll'>
        <div
          className={styles.feedback}
          onClick={() => scrollToAnchor('Feedback')}>
          反馈
        </div>
      </Link>

      <Link href='/Enrolldownload'>
        <div className={styles.download}>下载</div>
      </Link>
    </div>
  );
}
export default SubNavbar;
