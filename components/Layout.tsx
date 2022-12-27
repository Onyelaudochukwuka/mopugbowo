import React, { FC, ReactNode } from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <meta name="author" content="Onyela Udochukwuka" />
        <meta name="description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event" />
        <meta name="keywords" content="Ministry Of Perfection,ministry,perfection,church,ugbowo,Paul Abass" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event" />
        <meta property="og:title" content="Ministry Of Perfection Church - Ugbowo" />
        <title>Ministry Of Perfection Church - Ugbowo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="./logo.png" type="image/png" sizes="16x16" />
      </Head>
      <section className="flex flex-col gap-8 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
