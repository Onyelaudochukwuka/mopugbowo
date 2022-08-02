import Head from "next/head";
import React, { Component, PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren<Component>) => {
  return (
      <div className="min-h-screen">
      <Head>
        
      </Head>
      {children}
    </div>
  )
}

export default Layout;