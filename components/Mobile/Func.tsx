import React from 'react';
import styles from './Func.module.css';

type func = {
  name: string;
  imgpath: string;
  color: string;
};

export default function Func(): JSX.Element {
  const funcs: func[] = [
    {
      name: '一键查看课表',
      imgpath: '/Mobile/calendar.svg',
      color: '#707BC3',
    },
    {
      name: '空余教室查看',
      imgpath: '/Mobile/home.svg',
      color: '#56A28A',
    },
    {
      name: '定义个性待办',
      imgpath: '/Mobile/todo.svg',
      color: '#5E99AE',
    },
    {
      name: '考试场次提醒',
      imgpath: '/Mobile/alarm-clock.svg',
      color: '#D2962C',
    },
    {
      name: '链接教务网站',
      imgpath: '/Mobile/link.svg',
      color: '#B872BB',
    },
    {
      name: '绩点直观显示',
      imgpath: '/Mobile/5_0.svg',
      color: '#918380',
    },
  ];
  return (
    <div className={`page-part ${styles.Func}`} id='func'>
      <p className={styles.title}>校园内一站式App</p>
      <p className={styles.subtitle}>专为浙大学生开发</p>
      <div className={styles.funcs}>
        {funcs.map((value, index) => (
          <div
            className={styles.card}
            style={{ backgroundColor: value.color }}
            key={index}>
            <img src={value.imgpath} className={styles.icon} />
            <p className={styles.name}>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
