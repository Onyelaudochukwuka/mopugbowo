import React, { FC } from 'react'
import  Image from 'next/image';
import { logo } from '../public';
import Link from "next/link";
const content = ["Home", "About Us", "Blog", "Contact Us","Give"]
const Navbar:FC = (props:any) => {
  return (
    <nav className="bg-curves w-full flex flex-1 p-4 justify-between items-center px-[8.33%] fixed z-50">
      <span className="w-12 "><Image src={logo} /></span>
      <div className="flex justify-between basis-6/12 mr-[8.33%] text-white font-bold items-center">
        {
          content.map((value) => <span className="relative before:absolute before:-bottom-2 before:w-full before:left-0 before:h-1 before:bg-white before:scale-x-0 before:origin-right before:transition-[transform] before:duration-300 hover:before:scale-100 hover:before:origin-left cursor-pointer">{value}</span>
          )
        }
      </div>
    </nav>
  )
}


export default Navbar