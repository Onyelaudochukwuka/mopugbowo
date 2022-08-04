import React, { FC } from 'react'
import  Image  from 'next/image';
import { wave1 } from "../public";
import Slides from "./Slides";

const Sermons:FC = () => {
  return (
    <section className="box-border block">
      <div className="z-20 absolute w-full p-8">
        <h1 className="text-center text-bold text-white font-bold tracking-widest text-xl after:content-[''] after:absolute after:w-24 after:h-1 after:rounded-full  after:bg-white after:right-1/2 after:mt-8 ">Weekly Sermons</h1>
      <Slides/>
    </div>
      <span className="-z-50 w-full block  absolute"><Image src={wave1} layout={"responsive"} /></span>
    </section>
  )
}

export default Sermons