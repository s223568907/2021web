import React from 'react';
import styles from './Product.module.css';
import Link from 'next/link';

type product = {
  id: string;
  desc: string;
  href: string;
};

export default function Product(): JSX.Element {
  const products: product[] = [
    {
      id: 'Box',
      desc: 'Box求是潮云U盘\n无需登录，网页一键上传下载。\n存储时间&提取码自定义，\n小文件高效轻量化传输工具',
      href: '',
    },
    {
      id: 'Enroll',
      desc: 'Enroll选课助手\n支持全平台，兼容大部分浏览器\n可选高亮、课程排序、冲突判断、\n列表自动加载、小课表显示等多种功能\n全方面提升选课体验',
      href: 'Enroll',
    },
    {
      id: 'Mobile',
      desc: 'Mobile求是潮手机站\n专为浙大学生开发的一站式App，\n支持多平台，有强大的日程管理功能，\n教务网自动导入课表与手动添加事项相结合\n更有倒计时提醒、绩点分制转换等便捷工具，\n集众多校园网站入口为一体',
      href: 'Mobile',
    },
    {
      id: 'ROP',
      desc: 'ROP求是潮开放纳新平台\n面向浙江大学所有社团\n及学生组织的校内纳新平台，\n自动发送短信、安排面试场次等功能，\n使纳新工作不再繁琐',
      href: '',
    },
    {
      id: 'Notify',
      desc: 'Notify是一款校内网站信息自动抓取整理推送的应用。\n针对各学院网站信息庞杂、不同网站信息归类不一难以查找、当代学生较不适应web端查看实时信息的问题,求是潮网络工作室正在开发Notify，计划于2021年暑假前后正式上线。',
      href: '',
    },
    {
      id: 'newbie',
      desc: '新生手册是求是潮每年专门为新生打造的攻略手册。\n2020新生手册共分报到、生活、学习三大版块，每个版块下又细分七个小版块，还附有紫金港导览地图，丰富的信息资源给到新生全方位的帮助。',
      href: '',
    },
  ];

  const handleEnter = (value: product) => {
    const imageElement = document.getElementById(value.id) as HTMLImageElement;
    imageElement.src = `/products/${value.id}_title_white.svg`;
  };
  const handleLeave = (value: product) => {
    const imageElement = document.getElementById(value.id) as HTMLImageElement;
    imageElement.src = `/products/${value.id}_title.svg`;
  };
  return (
    <div className={`page-part ${styles.pages}`} id='product'>
      <div className={styles.products}>
        <img src='/products/products.svg' className={styles.logo} />
        {products.map((value, index) => (
          <Link href={value.href} key={index}>
            <div
              key={index.toString()}
              className={styles.product}
              onMouseEnter={() => handleEnter(value)}
              onMouseLeave={() => handleLeave(value)}>
              <img src={`/products/${value.id}.png`} className={styles.icon} />
              <img
                src={`/products/${value.id}_title.svg`}
                id={value.id}
                className={styles.title}
              />
              <div className={styles.desc}>{value.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
