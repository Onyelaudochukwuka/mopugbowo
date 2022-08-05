import { NextPage } from "next";
import Head from "next/head";
import React, { FC, PropsWithChildren } from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}:PropsWithChildren<any>) => {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
          <meta name="author" content="Onyela Udochukwuka"/>
            <meta name="description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
              <meta name="keywords" content="Ministry Of Perfection,ministry,perfection,church,ugbowo,Paul Abass"/>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
                  <meta property="og:image" content="./logo - Copy.png"/>
                    <meta property="og:description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
                      <meta property="og:title" content="Ministry Of Perfection Church - Ugbowo"/>
                        <title>Ministry Of Perfection Church - Ugbowo</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap');
        </style>
    
      </Head>
      <Navbar />
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;