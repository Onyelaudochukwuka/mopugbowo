import React, { FC, useId } from 'react'
import  Image from 'next/image';
import { logo } from '../public';
import Link from "next/link";
const content = ["Home", "About Us", "Blog", "Contact Us","Give"]
const Navbar: FC = (props: any) => {
  const Id: string = useId();
  return (
    <nav className="bg-curves w-full flex flex-1 p-4 justify-between items-center px-[8.33%] fixed z-50">
      <span className="w-12 "><Image src={logo} /></span>
      <div className="lg:flex justify-between basis-6/12 mr-[8.33%] text-white font-bold items-center hidden">
        {
          content.map((value:string,index:number) => <span key={Id + index} className="relative before:absolute before:-bottom-2 before:w-full before:left-0 before:h-1 before:bg-white before:scale-x-0 before:origin-right before:transition-[transform] before:duration-300 hover:before:scale-100 hover:before:origin-left cursor-pointer">{value}</span>
          )
        }
      </div>
      <div className="relative lg:hidden">
        <span className="block w-16 h-1.5 relative bg-white rounded-full cursor-pointer before:w-16 before:h-1.5 before:bg-white before:rounded-full  before:absolute before:bottom-3 after:w-16 after:h-1.5 after:bg-white after:rounded-full  after:absolute after:top-3"></span>
      </div>
    </nav>
  )
}


export default Navbar