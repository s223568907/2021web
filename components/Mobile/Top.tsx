// import exp from 'node:constants';
import React, { useState } from 'react';
import styles from './Top.module.css';
import Image from 'next/image';
import Link from 'next/link';

import android_svg from '../../public/Mobile/android.svg';
import ios_svg from '../../public/Mobile/ios.svg';
import qrcode_and from '../../public/Mobile/QRcode.png';
const qrcode_ios = qrcode_and;
//todo import qrcode_ios from '../../public/Mobile/QRcode_ios.png' 待给出二维码

function Top(): JSX.Element {
  const androidDownloadLink = 'https://m.zjuqsc.com/get/download_apk.php';
  const iosDownloadLink =
    'https://itunes.apple.com/cn/app/qiu-shi-chao-mobile/id583334920';

  return (
    <header className={`page-part ${styles.Top}`} id='top'>
      <img src='/Mobile/mobile-cover.svg' className={styles.printer} />
      <div className={styles.intro}>
        <div className={styles.title}>Mobile</div>
        <div className={styles.subtitle}>专为浙大学生开发的校园内一站式App</div>
      </div>
      <Link href={androidDownloadLink}>
        <div className={styles.android}>
          <Image src={android_svg} height={64} width={64} />
          <div className={styles.box}>
            <div className={styles.install}>安卓 \ 鸿蒙OS</div>
            <div className={styles.version}>version 3.121.21</div>
          </div>
        </div>
      </Link>
      <Link href={iosDownloadLink}>
        <div className={styles.ios}>
          <Image src={ios_svg} height={64} width={64} />
          <div className={styles.box}>
            <div className={styles.install}>苹果 iOS \ iPad OS</div>
            <div className={styles.version}>version 3.121.21</div>
          </div>
        </div>
      </Link>

      {/* 悬浮二维码 */}
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={`${styles.slide} ${styles.slide1}`}>
            <div className={styles.content}>
              <Image src={qrcode_and} height={512} width={512} />
              <p>扫码/点击下载</p>
            </div>
          </div>
          <div className={`${styles.slide} ${styles.slide2}`}>
            <div className={styles.content}>
              <Image src={qrcode_ios} height={512} width={512} />
              <p>前往App Store</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Top;
