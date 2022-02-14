import React from 'react';
import styles from './Function.module.css';

type product = {
  id: string;
  name: string;
  title: string;
  desc: string;
};

export default function Function(): JSX.Element {
  const products: product[] = [
    {
      id: '1',
      name: 'calendar',
      title: '一键查看课表',
      desc: '获取教务网个人课表\n方便查看课程',
    },
    {
      id: '2',
      name: 'home',
      title: '空余教室查看',
      desc: '查询教学区空余教室\n轻松寻找自习去处',
    },
    {
      id: '3',
      name: 'todo',
      title: '定义个性待办',
      desc: '获取教务网个人课表\n方便查看课程',
    },
    {
      id: '4',
      name: 'alarm-clock',
      title: '考试场次提醒',
      desc: '考前推送提醒\n合理规划复习',
    },
    {
      id: '5',
      name: 'link',
      title: '链接教务网站',
      desc: '直达教务系统\n查看课程情况',
    },
    {
      id: '6',
      name: '5_0',
      title: '绩点直观显示',
      desc: '直观显示绩点\n多种分制自由切换',
    },
  ];

  return (
    <div className={`page-part ${styles.pages}`} id='product'>
      <h1 className={styles.centertitle}>校园内一站式App</h1>
      <p className={styles.subtitle}>专为浙大学生开发</p>
      <div className={styles.products}>
        {products.map((value, index) => (
          <div className={styles.product} key={index.toString() + '0'}>
            <img
              key={index.toString()}
              src={`/Mobile/${value.name}.svg`}
              id={value.id}
              className={styles.icon}
            />
            <div className={styles.title} key={value.title}>
              {value.title}
            </div>
            <div className={styles.desc} key={value.desc}>
              {value.desc}{' '}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
