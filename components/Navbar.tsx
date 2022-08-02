import React, { FC } from 'react'
import  Image from 'next/image';
import { logo } from '../public';
import Link from "next/link";
const Navbar:FC = (props:any) => {
  return (
    <nav className="bg-curves w-full flex flex-1 p-4 justify-between items-center px-[8.33%] fixed">
      <span className="w-12 "><Image src={logo} /></span>
      <div className="flex justify-between basis-6/12 mr-[8.33%] text-white font-bold items-center">
        <span>Home</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Contact Us</span>
        <span>Give</span>
      </div>
    </nav>
  )
}


export default Navbar