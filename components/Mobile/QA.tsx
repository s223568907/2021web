import React from 'react';
import style from './QA.module.css';

let hide = true;

function showOrHide(title: string) {
  const d = document.getElementById('d' + title) as HTMLElement;

  //如果其属性是隐藏的，将其变为显示
  if (hide) {
    d.style.display = 'contents';
    //hide变为false
    hide = false;
    //反之，将其属性变为隐藏
  } else {
    d.style.display = 'none';
    //hide变为true
    hide = true;
  }
}

function QA(this: any) {
  return (
    <div className={`page-part ${style.qa}`} id='QA'>
      <div className={style.Box}>
        <div className={style.box} onClick={() => showOrHide('1')}>
          01 登录相关问题
          <div className={style.new} id='d1'>
            <p>Q:为什么登录时会一直提醒登录超时?</p>
            <p>A:可以登录教务网进行秋学期教师评教后，尝试再次登录;</p>
            <p></p>
            <p>Q:登录时提醒返回数据为空怎么办?</p>
            <p>A:可能是某个服务端口不太稳定，可以稍等片刻再次尝试;</p>
            <p></p>
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('2')}>
          02 网络错误相关问题
          <div className={style.new} id='d2'>
            <p className={style.content}></p>
            <p>Q:如何解决网络错误?</p>
            <p>
              A:当你遇到网络错误时，可以点击旁边的“尝试修复”，再次刷新，即可解决大部分的网络错误;
            </p>
            <p></p>
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('3')}>
          03 课程教务网相关问题
          <div className={style.new} id='d3'>
            <p className={style.content}>Q:我的课表栏怎么空了?</p>
            <p>
              A:求是潮的数据来源于浙江大学教务管理系统，出现这种情况很可能是因为教务网连接的数据不太稳定，比如正在进行新一学期的筛课，等选课筛选结束后，应该可以稳定显示；
            </p>
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('4')}>
          04 其他类型
          <div className={style.new} id='d4'>
            <p className={style.content}></p>
            <p>
              建议扫描二维码添加“求是潮产品反馈交流群”，直接将您的问题反馈到交流群中。
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QA;
