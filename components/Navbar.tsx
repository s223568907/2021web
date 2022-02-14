import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

type navElement = {
  name: string;
  href: string;
};

export default function Navbar(): JSX.Element {
  const navList: navElement[] = [
    {
      name: '产品',
      href: '#product',
    },
    {
      name: '视频',
      href: '#video',
    },
    {
      name: '部门',
      href: '#department',
    },
    {
      name: '军训',
      href: 'https://junxun.zjuqsc.com',
    },
  ];
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/navbar/qsclogo_white.png' width={168} height={40} />
      </div>
      <div className={styles.list}>
        {navList.map((value, index) => (
          <Link href={value.href} key={index.toString()}>
            <a>{value.name}</a>
          </Link>
        ))}
      </div>
    </header>
  );
}
