import React from 'react';
import styles from './PhoneFooter.module.css';

type content = {
  title: string;
  content?: desc[];
};
type desc = {
  name: string;
  href?: string;
};
export default function PhoneFooter(): JSX.Element {
  const contents: content[] = [
    {
      title: '版权所有',
      content: [
        {
          name: '浙江大学求是潮网站',
        },
        {
          name: '浙江大学党委学生工作部',
          href: 'http://www.xgb.zju.edu.cn/',
        },
        {
          name: '浙ICP备05074421号-1',
          href: 'https://beian.miit.gov.cn/',
        },
        {
          name: '©2000-2021求是潮',
        },
      ],
    },
    {
      title: '友情链接',
      content: [
        {
          name: '浙江大学',
          href: 'http://www.zju.edu.cn/',
        },
        {
          name: '学生工作部',
          href: 'http://www.xgb.zju.edu.cn/',
        },
        {
          name: 'CC98',
          href: 'http://www.cc98.org/',
        },
        {
          name: '飘渺水云间',
          href: 'http://www.zju88.org/',
        },
        {
          name: '缘网',
          href: 'http://luckweb.057101.com/',
        },
        {
          name: 'NexusHD',
          href: 'http://www.nexushd.org/',
        },
        {
          name: '浙江大学广播电视台',
          href: 'http://www.zjubtv.com/',
        },
        {
          name: '中国大学生在线',
          href: 'http://www.univs.cn/',
        },
      ],
    },
    {
      title: '旗下产品',
      content: [
        {
          name: 'Mobile 求是潮手机站',
          href: 'http://m.zjuqsc.com/get/',
        },
        {
          name: 'Box 云优盘',
          href: 'http://box.zjuqsc.com/',
        },
        {
          name: 'Enroll 选课助手',
          href: 'https://enroll.zjuqsc.com/',
        },
      ],
    },
    {
      title: '关于我们',
      content: [
        { name: '设计：李猹' },
        { name: '程序：喵刀 suse 夸克 数据库' },
        { name: '产品：胸毛' },
        { name: 'Powered by 求是潮工作团队' },
      ],
    },
  ];
  return (
    <div className={styles.PhoneFooter}>
      <img src='/footer/qsclogo.png' className={styles.logo} />
      <div className={styles.desc}>
        {contents.map((value, index) => (
          <div key={index.toString()} className={styles.about}>
            <div className={styles.title}>{value.title}</div>
            <div className={styles.content}>
              {value.content?.map((v, i) => (
                <div className={styles.list} key={i.toString()}>
                  {v.href ? (
                    <a href={v.href} target='_blank' rel='noreferrer'>
                      {v.name}
                    </a>
                  ) : (
                    v.name
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
