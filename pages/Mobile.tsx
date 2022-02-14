import type { NextPage } from 'next';

import React from 'react';
import Footer from '../components/Footer';
import Outliner from '../components/Outliner';
import Head from 'next/head';
import GifSwitching from '../components/gifSwitching';
import Top from '../components/Mobile/Top';
import SubNavbar from '../components/Mobile/SubNavbar';
import Func from '../components/Mobile/Func';
import Feedback from '../components/Feedback';
import QA from '../components/Mobile/QA';

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <Head>
        <title>浙江大学求是潮</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>

      {/* //todo: 待header上传 */}

      <SubNavbar />
      <Top />
      <Func />
      <GifSwitching />

      {/* //todo: 等mobile QA */}
      <QA />

      <Feedback />

      <Footer />

      <Outliner
        nameAndId={[
          { name: '下载', id: 'top' },
          { name: '基本介绍', id: 'func' },
          { name: '使用技巧', id: 'usage' },
          { name: 'Q&A', id: 'QA' },
        ]}
      />
    </div>
  );
};

export default Home;
