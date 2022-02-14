import React from 'react';
import styles from './Landing.module.css';

type ImgProps = {
  name: string;
  src: string;
  className: string;
  width: number;
  height: number;
};

export default function Landing(): JSX.Element {
  const imgSrc = '/home/';
  const landingPageImg: ImgProps[] = [
    {
      name: 'slogan',
      src: `${imgSrc}slogan.svg`,
      className: styles.slogan,
      width: 20,
      height: 6,
    },
    {
      name: 'organization',
      src: `${imgSrc}qsc.svg`,
      className: styles.organization,
      width: 6,
      height: 18,
    },
    {
      name: 'gravitation',
      src: `${imgSrc}gravitation.svg`,
      className: styles.gravitation,
      width: 32,
      height: 8,
    },
    {
      name: 'activity_1',
      src: `${imgSrc}activity_1.svg`,
      className: styles.activity_1,
      width: 40,
      height: 16,
    },
    {
      name: 'activity_2',
      src: `${imgSrc}activity_2.svg`,
      className: styles.activity_2,
      width: 20,
      height: 20,
    },
    {
      name: 'activity_3',
      src: `${imgSrc}activity_3.svg`,
      className: styles.activity_3,
      width: 40,
      height: 16,
    },
  ];
  return (
    <div className={`page-part ${styles.root}`} id='landing'>
      {landingPageImg.map((value: ImgProps, index: number) => {
        return (
          <div
            key={index.toString()}
            className={`${styles.picContainer} ${value.className}`}>
            <img
              src={value.src}
              style={{ width: `${value.width}vw`, height: `${value.height}vw` }}
            />
          </div>
        );
      })}
    </div>
  );
}
