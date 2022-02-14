import React from 'react';
import styles from './Platform.module.css';

type platform = {
  name: string;
  intro: string;
  imgpath: string;
};

function Platform(): JSX.Element {
  const platforms: platform[] = [
    {
      name: 'Windows',
      intro: '*Windows 下多内核浏览器需要使用"极速模式"，即使用 Chromium 内核',
      imgpath: '/Enroll/windows.svg',
    },
    {
      name: 'macOS',
      intro: '*暂不支持 Safari ，请安装 Firefox 或 Chromium 内核浏览器',
      imgpath: '/Enroll/macos.svg',
    },
    {
      name: 'Linux',
      intro: '需要浏览器具有 WebExtension API 支持',
      imgpath: '/Enroll/linux.svg',
    },
  ];
  return (
    <div className={`page-part ${styles.Platform}`} id='platform'>
      <p className={styles.title}>全平台支持</p>
      <p className={styles.subtitle}>
        使用Chrome Extension Api开发，兼容大部分浏览器
      </p>
      <div className={styles.platforms}>
        {platforms.map((value, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.block}>
              <img src={value.imgpath} className={styles.icon} />
              <p className={styles.name}>{value.name}</p>
              <p className={styles.intro}>{value.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Platform;
