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
  const androidDownloadLink = 'https://m.zjuqsc.com/get/download_apk.php';

  return (
    <div className={styles.SubNavbar}>
      <img src='/Mobile/mobile_flat.svg' className={styles.logo} />
      <div className={styles.title}>Mobile</div>
      <div className={styles.about} onClick={() => scrollToAnchor('top')}>
        关于
      </div>
      <div
        className={styles.feedback}
        onClick={() => scrollToAnchor('feedback')}>
        反馈
      </div>
      <Link href={androidDownloadLink}>
        <div className={styles.download}>下载</div>
      </Link>
    </div>
  );
}
export default SubNavbar;
