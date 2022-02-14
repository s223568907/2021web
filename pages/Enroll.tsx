import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
//import styles from '../styles/Home.module.css'
import Top from '../components/Enroll/Top';
import Func from '../components/Enroll/Func';
import Platform from '../components/Enroll/Platform';
import SubNavbar from '../components/Enroll/SubNavbar';
import Outliner from '../components/Outliner';
import FeedbackEn from '../components/Enroll/FeedbackEn';
import Footer from '../components/Footer';
import QA from '../components/Enroll/QA';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enroll选课助手</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <SubNavbar></SubNavbar>
      <Top></Top>
      <Func></Func>
      <Platform></Platform>
      <QA></QA>
      <FeedbackEn></FeedbackEn>
      <Footer></Footer>

      <Outliner
        nameAndId={[
          { name: '下载', id: 'Top' },
          { name: '基本介绍', id: 'func' },
          { name: '平台支持', id: 'platform' },
          { name: 'Q&A', id: 'QA' },
        ]}
      />
    </>
  );
};

export default Home;
