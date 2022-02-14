import React from 'react';
import styles from './Video.module.css';

type video = {
  name: string;
  href: string;
};

export default function Video(): JSX.Element {
  const publicity: video[] = [
    {
      name: '宣传片 | BOUNCE OF 2020! x 新年狂欢夜',
      href: 'https://www.bilibili.com/video/BV12y4y1m7ih',
    },
    {
      name: '宣传片 | 聚焦 x 新年狂欢夜',
      href: 'https://www.bilibili.com/video/BV1Ry4y1i7Fm',
    },
    {
      name: '宣传片 | 浙大一分钟 x 新年狂欢夜',
      href: 'https://www.bilibili.com/video/BV1Rt4y1k7wW',
    },
  ];
  const originality: video[] = [
    {
      name: 'Vlog | in ZJU',
      href: 'https://www.bilibili.com/video/BV1YK411376E',
    },
    {
      name: 'MG动画 | 高效管理你的Bug | Bugzilla | 沟通技巧 x QSC/Group1',
      href: 'https://www.bilibili.com/video/BV17a411F7P6',
    },
    {
      name: '潮 | Project Initialized',
      href: 'https://www.bilibili.com/video/BV1qK411V7b5',
    },
  ];
  return (
    <div className={`page-part ${styles.pages}`} id='video'>
      <div className={styles.videos}>
        <div className={styles.video}>
          <img src='/videos/publicity.png' className={styles.image} />
          <img className={styles.icon} src='/videos/icon.png' />
          <div className={styles.title}>宣传片</div>
          <div className={styles.list}>
            {publicity.map((value, index) => (
              <div key={index.toString()}>
                <a href={value.href}>{value.name}</a>
              </div>
            ))}
          </div>
          <a
            className={styles.more}
            href='https://space.bilibili.com/104427247'
            target='_blank'
            rel='noreferrer'>
            查看更多
          </a>
        </div>
        <div className={styles.video}>
          <img src='/videos/originality.png' className={styles.image} />
          <img className={styles.icon} src='/videos/icon.png' />
          <div className={styles.title}>原创</div>
          <div className={styles.list}>
            {originality.map((value, index) => (
              <div key={index.toString()}>
                <a href={value.href}>{value.name}</a>
              </div>
            ))}
          </div>
          <a
            className={styles.more}
            href='https://space.bilibili.com/104427247'
            target='_blank'
            rel='noreferrer'>
            查看更多
          </a>
        </div>
        <img src='/videos/logo.svg' className={styles.logo} />
      </div>
    </div>
  );
}
