import Image from "next/image"
import React, { FC } from 'react'
import { pastor } from "../public"
const About:FC = () => {
  return (
    <section className="flex">
      <span className="w-1/3 block basis-1/3"><Image src={pastor} layout={"responsive"} /></span> 
      <div className="w-full basis-2/3">
        <h1 className="text-center text-bold text-white font-bold tracking-widest text-xl before:content-[''] before:absolute before:w-24 before:h-1 before:rounded-full  before:bg-white  before:mt-8">About US</h1>
        <div>
          <h2>Why We Exist</h2>
          <p>Our mission is to bring total salvation and transformation to all men by teaching and preaching the undiluted word of God across the world.</p>
        </div>
      </div>
    </section>
  )
}

export default About