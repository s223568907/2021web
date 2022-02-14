import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductNavbar.module.css';

type navElement = {
  name: string;
  href: string;
};

export default function ProductNavbar(): JSX.Element {
  const navList: navElement[] = [
    {
      name: 'Mobile',
      href: '',
    },
    {
      name: 'Enroll',
      href: '',
    },
    {
      name: 'Box',
      href: '',
    },
    {
      name: 'Rop',
      href: '',
    },
  ];

  const handerenter = (index: number) => {
    const move = document.getElementsByClassName(styles.move)[0] as HTMLElement;
    const left: string = (index * 17.5 + 1).toString();
    move.style.left = left + '%';
  };
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <a href='https://www.qsc.zju.edu.cn'>
          <Image src='/Mobile/logo-qsc.svg' width={168} height={40} />
        </a>
      </div>
      <a className={styles.shape}></a>
      <a className={styles.product}>&nbsp;产品PRODUCT</a>

      <div className={styles.list}>
        {navList.map((value, index) => (
          <Link href={value.href} key={index.toString()}>
            <a className={styles.button} onClick={() => handerenter(index)}>
              {value.name}
            </a>
          </Link>
        ))}
        <a className={styles.move}> </a>
        <a className={styles.notify}>Notify(敬请期待)</a>
      </div>
    </header>
  );
}
