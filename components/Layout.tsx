import Head from "next/head";
import React, { Component, FC, PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren<any>) => {
  return (
      <div className="min-h-screen">
      <Head>
          <meta name="author" content="Onyela Udochukwuka"/>
            <meta name="description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
              <meta name="keywords" content="Ministry Of Perfection"/>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                  <meta property="og:image" content="./logo - Copy.png"/>
                    <meta property="og:description" content="Ministry Of Perfection - Ugbowo; Stay up-to-date with Our programmes and Event"/>
                      <meta property="og:title" content="Ministry Of Perfection Church - Ugbowo"/>
                        <title>Ministry Of Perfection Church - Ugbowo</title>
                        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
      {children}
    </div>
  )
}

export default Layout;