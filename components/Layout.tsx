import { NextPage } from "next";
import Head from "next/head";
import React, { FC, PropsWithChildren } from 'react'
import Navbar from "./Navbar";

const Layout = ({children}:PropsWithChildren<any>) => {
  return (
      <div className="min-h-screen bg-dark">
      <Head>
          <meta name="author" content="Onyela Udochukwuka"/>
            <meta name="description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
              <meta name="keywords" content="Ministry Of Perfection,ministry,perfection,church,ugbowo,Paul Abass"/>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                  <meta property="og:image" content="./logo - Copy.png"/>
                    <meta property="og:description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
                      <meta property="og:title" content="Ministry Of Perfection Church - Ugbowo"/>
                        <title>Ministry Of Perfection Church - Ugbowo</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;