import React, { useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import styles from './gifSwitchingForMobile.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type GIF = {
  detail: string;
};

export default function GifSwitching(): JSX.Element {
  const [slideIndex, setState] = useState(0);
  /*参数设定*/
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rows: 1,
    beforeChange: (current: number, next: number) => setState(next),
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  const gif: GIF[] = [
    {
      detail: '点击主页面“浙大通行码”可召唤蓝码；',
    },
    {
      detail: '长按APP图标可快捷打开通行码、登录ZJUWLAN和打开工具箱、课程表',
    },
    {
      detail: '蓝码、每日打卡等小工具可添加快捷方式至桌面',
    },
    {
      detail: '课程”界面点击右下角搜索按钮即可搜索并添加想要旁听的课程；',
    },
    {
      detail: '点击“课程表”页面右上角分享按钮可生成课表截图',
    },
    {
      detail: '可在手机桌面上添加求是潮小组件',
    },
    {
      detail: '可在设置-个性化处切换主题颜色',
    },
    {
      detail: '点击主页面“浙大通行码”可召唤蓝码',
    },
    {
      detail: '长按APP图标可快捷打开通行码、登录ZJUWLAN和打开工具箱、课程表',
    },
    {
      detail: '可在手机桌面上添加求是潮小组件',
    },
  ];
  /*为了在中间加类名没有把svg另外引入……*/
  function Button(): JSX.Element {
    return (
      <svg
        height='96'
        viewBox='0 0 96 96'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_d_442_1205)'>
          <path
            className={styles.back}
            d='M48 4C71.7482 4 91 23.2518 91 47C91 70.7482 71.7482 90 48 90C24.2518 90 5 70.7482 5 47C5 23.2518 24.2518 4 48 4Z'
            fill='#F9F9F9'></path>
          <path
            d='M40 59.24L51.7436 47L40 34.76L43.6154 31L59 47L43.6154 63L40 59.24Z'
            fill='#1373E6'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_442_1205'
            x='0'
            y='0'
            width='96'
            height='96'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feGaussianBlur stdDeviation='2.5' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0745098 0 0 0 0 0.45098 0 0 0 0 0.901961 0 0 0 0.1 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_442_1205'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_442_1205'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    );
  }
  /*定制左右按钮样式 */
  function LeftArrow(props: CustomArrowProps): JSX.Element {
    const { className, onClick } = props;
    return (
      <div className={`${className} ${styles.arrows}`} onClick={onClick}>
        <div className={styles.leftButton}>
          <Button />
        </div>
      </div>
    );
  }
  function RightArrow(props: CustomArrowProps): JSX.Element {
    const { className, onClick } = props;
    return (
      <div className={`${className} ${styles.arrows}`} onClick={onClick}>
        <div className={styles.rightButton}>
          <Button />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.leadIn}>
        <h1 className={styles.heading}>海量丰富功能</h1>
      </div>
      <div className={styles.typeChange}>
        <p>小技巧 for {slideIndex <= 6 ? 'Android' : 'iOS'}</p>
      </div>
      <div>
        <Slider {...settings} className={styles.Slider}>
          {gif.map((value, index) => (
            <div key={index + 1}>
              <img
                className={styles.gif}
                src={`/gifSwitching/${index + 1}.gif`}
              />
              {index == slideIndex ? (
                <div className={styles.desc}>
                  <div className={styles.detail}>{value.detail}</div>
                </div>
              ) : null}
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.index}>{slideIndex + 1}/10</div>
    </div>
  );
}
