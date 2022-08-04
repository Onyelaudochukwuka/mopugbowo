import React, { FC } from 'react'
import  Image  from 'next/image';
import { wave1 } from "../public";

const Sermons:FC = () => {
  return (
    <section className="box-border block">
      <span className="-z-10 w-full block"><Image src={wave1} layout={"responsive"} /></span>
      <div className="-translate-y-[35rem]">
        <h1 className="text-center text-bold text-white font-bold tracking-widest text-xl after:content-[''] after:absolute after:w-24 after:h-1 after:rounded-full  after:bg-white after:right-1/2 after:mt-8 ">Weekly Sermons</h1>
      
    </div>
      </section>
  )
}

export default Sermons