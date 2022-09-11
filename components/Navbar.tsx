import React, { FC, useEffect, useId, useState } from 'react'
import  Image from 'next/image';
import { logo } from '../public';
import Link from "next/link";
import { useScroll } from "framer-motion";
import { useRouter } from "next/router";
const content = ["Home", "About Us", "Blog", "Contact Us","Give"]
const Navbar: FC = () => {
  const [yDistance, setYDistance] = useState<number>(0);
  const [dropDown, setDropDown] = useState<boolean>(false);
  useEffect(() => {
    const Interval = setInterval(() => setYDistance(scrollY), 1000);
    return () => {
      clearInterval(Interval)
    }
  },[])

  const Id: string = useId();
  const { route } = useRouter();
  console.log(route)
  return (
    <nav className={`${yDistance > 100 ? `bg-curves` : `bg-transparent` } transition-colors duration-500 ease-in w-full flex flex-1 p-4 justify-between items-center px-[8.33%] ${route !== `/` ? `relative` :`fixed`} z-40`}>
      <span className="w-12 "><Image src={logo} /></span>
      <div className={`flex justify-between lg:flex-row lg:basis-6/12 lg:mr-[8.33%] text-white font-bold items-center ${dropDown ? `scale-100 bg-curves items-center py-12` : `scale-0`} lg:bg-transparent lg:py-0 lg:scale-100 origin-top-left  transition-transform duration-700 ease-in z-50  h-[90vh] w-full lg:w-auto lg:h-auto inset-0 lg:relative absolute top-24 lg:top-auto flex-col`}>
        {
          content.map((value:string,index:number) => <span key={Id + index} className="relative before:absolute before:-bottom-2 before:w-full before:left-0 before:h-1 before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-100 hover:before:origin-left before:rounded-full cursor-pointer">{value}</span>
          )
        }
      </div>
      <div className="relative lg:hidden"
        onClick={() => setDropDown(prev => !prev)}
        
      >
        <span className="block w-16 h-1.5 relative bg-white rounded-full cursor-pointer before:w-16 before:h-1.5 before:bg-white before:rounded-full  before:absolute before:bottom-3 after:w-16 after:h-1.5 after:bg-white after:rounded-full  after:absolute after:top-3"></span>
      </div>
    </nav>
  )
}


export default Navbar