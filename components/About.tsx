import Image from "next/image"
import React, { FC } from 'react'
import { pastor } from "../public"
const About:FC = () => {
  return (
    <section className="flex">
      <span className="w-1/3 block"><Image src={pastor} layout={"responsive"} /></span> 
      <div>
        
      </div>
    </section>
  )
}

export default About