import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PhoneNavbar.module.css';
import qscIcon from '/public/mobilePhone/navbar/qscIcon.png';
import menuIcon from '/public/mobilePhone/navbar/menu.png';
import closeIcon from '/public/mobilePhone/navbar/close.png';
import toTopIcon from '/public/mobilePhone/navbar/toTop.svg';
import { useEffect } from 'react';
type navElementLink = {
  name: string;
  link: string;
};
type detailInfo = {
  name: string;
  english: string;
  list: navElementLink[];
};
export default function PhoneNavbar(): JSX.Element {
  const detailList: detailInfo[] = [
    {
      name: '产品',
      english: 'product',
      list: [
        {
          name: 'Mobile手机站',
          link: '#phoneMobile',
        },
        {
          name: 'Box云u盘',
          link: 'https://www.qsc.zju.edu.cn/box/',
        },
      ],
    },
    {
      name: '部门',
      english: 'video',
      list: [
        {
          name: '部门介绍',
          link: '#',
        },
        {
          name: '加入我们',
          link: '#',
        },
      ],
    },
    {
      name: '视频',
      english: 'Video',
      list: [
        {
          name: '公众号',
          link: '#',
        },
        {
          name: 'Bilibili频道',
          link: '#',
        },
      ],
    },
    {
      name: '军训',
      english: 'Military Training',
      list: [],
    },
  ];
  let displayDetail = false;
  function changeDisplay(): void {
    displayDetail = !displayDetail;
    if (displayDetail) {
      document.getElementById('detaillist')!.style.display = 'none';
      // document.getElementById("menuIcon")!.src =
      document.getElementById('menuIcon')!.style.display = '';
      document.getElementById('closeIcon')!.style.display = 'none';
    } else {
      document.getElementById('detaillist')!.style.display = 'block';
      document.getElementById('menuIcon')!.style.display = 'none';
      document.getElementById('closeIcon')!.style.display = '';
    }
  }
  useEffect(() => {
    changeDisplay();
  }, []);
  function toTopFunc(): void {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    window.scrollBy(0, -top);
  }
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.qscicon}>
          <Image src={qscIcon} width={155} height={58} />
        </div>
        <div
          className={styles.menuicon}
          onClick={() => {
            changeDisplay();
          }}
          id='menuIcon'>
          <Image src={menuIcon} width={24} height={24} />
        </div>
        <div
          className={styles.menuicon}
          onClick={() => {
            changeDisplay();
          }}
          id='closeIcon'>
          <Image src={closeIcon} width={24} height={24} />
        </div>
        <ul className={styles.detaillist} id='detaillist'>
          {detailList.map((value, index) => {
            return (
              <li key={index.toString()} className={styles.item}>
                <div>
                  <div>{value.name}</div>
                  <div>{value.english}</div>
                </div>
                <div className={styles.linklist}>
                  {value.list.map((value, index) => {
                    return (
                      <div
                        className={styles.linklistitem}
                        key={index.toString()}>
                        <Link href={value.link}>
                          <a>{value.name}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.toTop}>
          <Image src={toTopIcon} height={55} width={55} onClick={toTopFunc} />
        </div>
      </header>
    </>
  );
}
