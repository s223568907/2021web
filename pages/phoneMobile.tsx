import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import PhoneNavbar from '../components/PhoneMobile/PhoneNavbar';
import Download from '../components/PhoneMobile/PhoneDownload';
import MobileInfo from '../components/PhoneMobile/PhoneMobileInfo';
import GifSwitchingWrapper from '../components/PhoneMobile/GifSwitchingWrapper';
import PhoneFooter from '../components/PhoneMobile/PhoneFooter';
import QA from '../components/PhoneMobile/QA';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>浙江大学求是潮</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <PhoneNavbar />
      <Download />
      <MobileInfo />
      <GifSwitchingWrapper />
      <QA />
      <PhoneFooter />
    </>
  );
};

export default Home;
