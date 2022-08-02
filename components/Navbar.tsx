import React, { FC } from 'react'
import  Image from 'next/image';
import { logo } from '../public';
const Navbar:FC = (props:any) => {
  return (
    <nav className="">
      <span className="w-8 h-8"><Image src={logo} /></span>
    </nav>
  )
}


export default Navbar