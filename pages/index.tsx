import type { NextPage } from 'next';
import React from 'react';
import Departments from '../components/Departments';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Video from '../components/Video';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>浙江大学求是潮</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <Navbar />
      <Landing />
      <Product />
      <Video />
      <Departments />
      <Footer />
    </>
  );
};

export default Home;
