import React from 'react';
import styles from './Func.module.css';

type func = {
  name: string;
  imgpath: string;
};

function Func(): JSX.Element {
  const funcs: func[] = [
    {
      name: '教师评分查询',
      imgpath: '/Enroll/teacher.svg',
    },
    {
      name: '课程排序功能',
      imgpath: '/Enroll/sort.svg',
    },
    {
      name: '课程冲突判断',
      imgpath: '/Enroll/collision.svg',
    },
    {
      name: '可选课程高亮',
      imgpath: '/Enroll/highlight.svg',
    },
    {
      name: '列表自动加载',
      imgpath: '/Enroll/list.svg',
    },
    {
      name: '小课表显示',
      imgpath: '/Enroll/table.svg',
    },
  ];
  return (
    <div className={`page-part ${styles.Func}`} id='func'>
      <p className={styles.title}>教务系统功能增强</p>
      <p className={styles.subtitle}>基于查老师等第三方评分数据</p>
      <div className={styles.funcs}>
        {funcs.map((value, index) => (
          <div className={styles.card + ` color${index}`} key={index}>
            <img src={value.imgpath} className={styles.icon} />
            <p className={styles.name}>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Func;
