import React, { useState } from 'react';
import styles from './Browsers.module.css';
import Link from 'next/link';

type browser = {
  name: string;
  intro: string;
  imgpath: string;
  url: string;
};
const browsers: browser[] = [
  {
    name: 'Firefox',
    intro: '',
    imgpath: '/Enrolldownload/Firefox.svg',
    url: '',
  },
  {
    name: 'Chrome',
    intro: '*访问Chrome Web Store 需科学上网 否则请移步手动安装',
    imgpath: '/Enrolldownload/Chrome.svg',
    url: '',
  },
  {
    name: 'Edge(Chromium)',
    intro: '*不支持旧版本 Edge 您可能需要更新至最新版本',
    imgpath: '/Enrolldownload/Edge.svg',
    url: '',
  },
  {
    name: '360极速浏览器',
    intro: '',
    imgpath: '/Enrolldownload/360极速浏览器.svg',
    url: '',
  },
  {
    name: '360安全浏览器',
    intro: '',
    imgpath: '/Enrolldownload/360安全浏览器.svg',
    url: '',
  },
  {
    name: 'QQ浏览器',
    intro: '',
    imgpath: '/Enrolldownload/QQ浏览器.svg',
    url: '',
  },
  {
    name: '猎豹浏览器',
    intro: '*crx文件也可在此下载',
    imgpath: '/Enrolldownload/猎豹浏览器.svg',
    url: '',
  },
  {
    name: '手动安装',
    intro: '*您可能需要以开发者模式 挂载手动安装包',
    imgpath: '/Enrolldownload/manual.svg',
    url: '',
  },
];
const oldbrowsers: browser[] = [
  {
    name: 'Firefox',
    intro: '',
    imgpath: '/Enrolldownload/Firefox.svg',
    url: '',
  },
  {
    name: '搜狗浏览器',
    intro: '',
    imgpath: '/Enrolldownload/搜狗浏览器.svg',
    url: '',
  },
  {
    name: '手动安装',
    intro: '*您可能需要以开发者模式 挂载手动安装包',
    imgpath: '/Enrolldownload/manual.svg',
    url: '',
  },
];
function Browsers(): JSX.Element {
  const [fold, setFold] = useState(0);
  const foldfunction = () => {
    if (fold)
      return (
        <>
          <div className={styles.subtitle + ' ' + styles.oldversion}>
            V 4.29 （仅适用于旧教务系统）&nbsp; &nbsp;
            <img
              src='/Enrolldownload/Vector.svg'
              onClick={() => setFold(0)}
              className={styles.fold}
            />
          </div>
          <div className={styles.platforms}>
            {oldbrowsers.map((value, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.block}>
                  <img src={value.imgpath} className={styles.icon} />
                  <p className={styles.name}>{value.name}</p>
                  <p className={styles.intro}>{value.intro}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    else
      return (
        <div className={styles.subtitle + ' ' + styles.oldversion}>
          V 4.29 （仅适用于旧教务系统）&nbsp; &nbsp;
          <img
            src='/Enrolldownload/Vector.svg'
            onClick={() => setFold(1)}
            className={styles.unfold}
          />
        </div>
      );
  };

  return (
    <div className={styles.Platform}>
      <p className={styles.title}>让我们开始吧</p>
      <p className={styles.subtitle}>支持桌面端 Chromium 内核 / 双核浏览器</p>
      <div className={styles.subtitle + ' ' + styles.newversion}>
        V 5.3 （最新版本）
      </div>
      <div className={styles.platforms}>
        {browsers.map((value, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.block}>
              <img src={value.imgpath} className={styles.icon} />
              <p className={styles.name}>{value.name}</p>
              <p className={styles.intro}>{value.intro}</p>
            </div>
          </div>
        ))}
      </div>
      {foldfunction()}
      <div className={styles.bottom}>
        没有您的浏览器？请尝试
        <Link href={browsers[7].url}>
          <span className={styles.blue}> 手动安装 </span>
        </Link>
        或者换用支持的 Chromium 内核 / 双核浏览器 如遇到安装问题，请
        <Link href='/Enroll'>
          <span className={styles.blue}> 查看Q&A </span>
        </Link>
        或
        <Link href='/Enroll'>
          <span className={styles.blue}> 加入反馈群 </span>
        </Link>
      </div>
    </div>
  );
}
export default Browsers;
