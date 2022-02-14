import React from 'react';
import Image from 'next/image';
import style from './QA.module.css';
import h1_png from '../../public/Mobile/QA/help-3.6b0dbc27.png';
import h2_png from '../../public/Mobile/QA/help-4.5c92ee86.png';
import cs_png from '../../public/Mobile/QA/cs.png';
import w_jpg from '../../public/Mobile/QA/w2.jpg';
import w2_jpg from '../../public/Mobile/QA/w.jpg';

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
          01 这个插件有什么功能?
          <div className={style.new} id='d1'>
            <h3>一句话介绍</h3>
            <p>浙大彩票（加删除线）选课系统唯一合法外挂</p>
            <h3>基本介绍</h3>
            <p>
              教师评分查询：自动获取「ZJU学习帝」旗下「查老师」服务数据，口碑评价一键可查
            </p>
            <p>
              课程排序功能：教师评分排序，上课时间、地点分类，只需点击列表项目箭头
            </p>
            <p>
              课程冲突判断：自动根据已选课程，判断、标记选课冲突，节约选课时间
            </p>
            <p>可选课程高亮：自动判断可选课程，绿色高亮标出，方便做出选择</p>
            <p>
              列表自动加载：滚轮丝滑衔接，自动加载当前页面的剩余部分，无需手动点击
            </p>
            <p>
              小课表显示：教务系统选课期间，选课页面右上角透明小课表，不为遮挡困扰
            </p>
            <p></p>
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('2')}>
          02 插件支持哪些浏览器?
          <div className={style.new} id='d2'>
            <p className={style.content}></p>
            <p>
              选课助手使用 Chrome Extension API ，并保留了对 WebExtension API
              的支持，能兼容大部分浏览器。
            </p>
            <p>
              选课助手在 Windows, macOS, Linux 上均能正常运行，没有兼容性问题。
            </p>
            <p>目前通过兼容性测试的浏览器有</p>
            <li>Firefox (推荐)</li>
            <li>Google Chrome</li>
            <li>Edge(Chromium)2021年1月16日开始推送的新版本</li>
            <li>猎豹浏览器</li>
            <li>360极速浏览器</li>
            <li>360安全浏览器</li>
            <li>QQ浏览器</li>
            <li>其他 Chromium 内核的浏览器</li>
            <p>目前不支持的浏览器有</p>
            <li>Safari (苹果用户请安装Firefox)</li>
            <li>遨游浏览器</li>
            <li>Internet Explorer</li>
            <li>Edge(HTML)2021年1月16日推送前的旧版本</li>
            <p>这些浏览器已停止更新，故不再保证兼容性的有</p>
            <li>枫树极速浏览器</li>
            <li>百度浏览器</li>
            <p>
              其中，Edge浏览器需要注意内核版本（一般已更新内核，旧请及时更新）。如果您还有安装问题，可以加入安
              装答疑QQ群：557339512
            </p>
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('3')}>
          03 这个插件有什功能?
          <div className={style.new} id='d3'>
            <p className={style.content}>
              选课助手适用于浙江大学教务系统，可查看老师在 ZJU
              学习帝上的评分，并通过优化算法查询课程余量及上
              课时间冲突情况，为您的选课提供方便。
            </p>
            <p>下面以Edge为例进行说明：</p>
            <p>设置菜单：可点击浏览器扩展工具栏的图标调出</p>
            <Image className={style.img} src={cs_png} alt='tab' />
            <p>如果发现插件某项功能不正常，请检查此设置菜单项是否全部开启。</p>
            <p>插件目前对于选课页面有效，绿色表示可选课程：</p>
            <Image className={style.img} src={w_jpg} />
            <p>选课助手5.0以上可以同时查询多位老师的评分：</p>
            <Image className={style.img} src={w2_jpg} alt='tab' />
          </div>
        </div>
        <div className={style.box} onClick={() => showOrHide('4')}>
          04 插件怎么安装？
          <div className={style.new} id='d4'>
            <p className={style.content}></p>
            <p>
              首先，请在浏览器中打开插件下载页面
              <a href='https://enroll.zjuqsc.com/download.html'>
                {' '}
                https://enroll.zjuqsc.com/download.html
              </a>
            </p>
            <li>
              Firefox:点击Firefox图标，稍等片刻，地址栏会出现安装提示，选择相应选项进行安装。
              如果浏览器较长时间没有反应，请检查您是否连接到互联网。
              如果您的校园网没有连接，可能需要手动安装：右键Firefox图标，选择链接另存为，下载xpi文件。之后在
              Firefox中点击右上角三横线，选扩展程序，将刚刚下载好的xpi文件拖入，然后选择安装。
            </li>
            <li>
              Chrome (Web Store): 您需要连接到国际互联网，单击下载页面中的
              Chrome 图标，然后选择添加至浏览 器
            </li>
            <li>
              Edge (Chromium): 单击下载页面中的 Edge 图标，然后选择“获取”。
            </li>
            <li>
              360 浏览器: 单击下载页面中的 360浏览器
              图标，在应用商店中进行安装。
            </li>
            <li>
              其他 Chromium 内核浏览器:{' '}
              <p>
                尝试点击猎豹浏览器按钮直接安装。如果安装失败，您可能需要进行手动安装。
              </p>
            </li>

            <p>如果您的安装过程中有问题，请加安装答疑QQ群：557339512</p>
          </div>
        </div>
        <div className={style.box} title='5' onClick={() => showOrHide('5')}>
          05 我安装了插件，为什么没有反应?
          <div className={style.new} id='d5'>
            <p className={style.content}></p>
            <p>
              您打开教务管理系统时，插件应该会自动启用。如果插件没有自动启用，请尝试更新您的浏览器版本。
            </p>
            <p>
              同时如果您使用的是 360
              浏览器、搜狗浏览器等多内核浏览器，请检查浏览器访问教务网时是否处于兼容模
              式，因为插件只能支持使用 Chromium 内核的极速模式。
            </p>
            <p>
              检查浏览器地址栏最右端的浏览模式（某些浏览器如猎豹浏览器请尝试在网页上单击鼠标右键，选择“切换到
              极速模式”），插件不能在有 e
              字样的兼容模式中使用。建议换成“极速模式”。
            </p>
            <Image className={style.img} src={h1_png} alt='' />
            <Image className={style.img} src={h2_png} alt='' />
            <p>
              若还不能正常使用，请尝试升级浏览器至最新官方版本，清除缓存。若仍不能正常使用，请加答疑QQ群：
              557339512。
            </p>
          </div>
        </div>
        <div className={style.box} title='6' onClick={() => showOrHide('6')}>
          06 关于旧选课系统的适配?
          <div className={style.new} id='d6'>
            <p className={style.content}>
              由于学校废止旧教务系统选课，因此我们决定终止对旧选课系统的支持。如果您有特殊需求，请打开下载页中
              的折叠部分，手动安装支持旧教务系统的4.29版本。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QA;
