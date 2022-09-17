import React, { FC } from 'react'
import  Image  from 'next/image';
import { wave1 } from "../public";
import Slides from "./Slides";

const Sermons:FC = () => {
  return (
    <section className="box-border block bg-dark h-max max-h-screen min-h-[90vh] relative">
      <span className="w-full block  absolute"><Image src={wave1} layout={"responsive"} /></span>
      <div className="z-20 relative w-full p-8">
        <h1 className="text-center text-bold text-text font-bold tracking-widest text-2xl before:content-[''] before:absolute before:w-24 before:h-1 before:rounded-full  before:bg-text before:mt-8  before:origin-left before:transition-[transform] before:duration-300 hover:before:scale-x-125 ">Weekly Sermons</h1>
      <Slides/>
    </div>
    </section>
  )
}

export default Sermons