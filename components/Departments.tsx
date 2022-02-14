import React from 'react';
import styles from './Departments.module.css';

type department = {
  name: string;
  desc: string;
};

export default function Departments(): JSX.Element {
  const departments: department[] = [
    {
      name: '产品运营部门',
      desc: '我们是全校唯一的产品经理团队\n用户新需求的敏锐捕捉者\n求是潮产品的首席运营官\n脑洞打开的新产品创造者\n我们承办一年一度的网络文化节\n各种精彩线上线下活动大咖讲座\n只有想不到没有做不到',
    },
    {
      name: '视频团队',
      desc: '我们出现在全校大型活动的最前线，用镜头绘制属于每一个人的精彩，用话筒讲述出一个个动人的故事。\n我们是新闻搬运工，但不只是记录；我们有最完整的拍摄体系，依靠专业的硬件、硬核的软件和精良的后期处理技术制作原创短片。\n我们还拥有最高水平的主持人团队，台前带动全场，幕后专业配音。',
    },
    {
      name: '摄影部门',
      desc: '我们是浙江大学最专业的学生摄影团队，也是白日梦想家\n我们有最全的摄影干货和最具想象力的伙伴\n我们不只记录色彩和光线的碰撞，而是用快门定格无限的想象',
    },
    {
      name: '技术研发中心',
      desc: '我们是求是潮头号硬核编码玩家，最专业的工程师团队\n我们探索最新的技术与开发方案，部署并运维求是潮所有的线上项目\n我们拥有全浙大最快的精品网络，方便的VPN，内部私人服务器与gitlab代码仓库、充足的显示器和专属线上版本管理实验室',
    },
    {
      name: '设计视觉中心',
      desc: '这里是一个优质的作品输出平台，你的设计将会出现在成千上百人的眼前\n我们承担着大型校园活动的主视觉设计，包揽潮内所有线上产品和线下活动的设计工作\n我们有独具特色的内训和一对一导师制，不只做设计也一起出门看设计',
    },
    {
      name: '推广策划中心',
      desc: '我们运营着最潮的公众号\n拥有最多的校内粉丝 最亲民的讨论板块 推荐ZJUer最关心的话题\n我们有最硬核的线下活动\n高校自媒体线上交流 知名媒体人讲座 校内博主沙龙 “记录者”摄影比赛共同构成的记者节',
    },
    {
      name: '人力资源部门',
      desc: '作为部门间的纽带与办公室的核心\n我们负责办公室日常运营、全站纳新财务管理、策划组织站内活动以及潮文化建设\n全员大会、全站内训、求是新晚的幕后都有我们活跃的身影',
    },
    {
      name: '新闻资讯中心',
      desc: '这里是媒体实务的新平台\n这里有自由创作的大空间\n这里是求是潮新闻资讯中心，但这里远远不止有新闻\n专题、声音、人物、101夜，我们是拒绝沉默的发声者，富有温度的发现者，也是最忠实的记录者',
    },
  ];
  return (
    <div className={`page-part ${styles.pages}`} id='department'>
      <div className={styles.departments}>
        {departments.map((value, index) => (
          <div key={index.toString()} className={styles.department}>
            <img src={`/departments/${index}.svg`} className={styles.title} />
            <div className={styles.desc}>{value.desc}</div>
          </div>
        ))}
        <img src='/departments/logo.svg' className={styles.logo} />
      </div>
    </div>
  );
}
