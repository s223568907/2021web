import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
//import styles from '../styles/Home.module.css'
import Browsers from '../components/Enrolldownload/Browsers';
import SubNavbar from '../components/Enrolldownload/SubNavbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>选课助手下载</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <SubNavbar></SubNavbar>
      <Browsers></Browsers>
    </>
  );
};

export default Home;
