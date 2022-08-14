import Image, { StaticImageData } from "next/image";
import React, { FC, useId, useState } from 'react'
import { pastor, about1, about2, about3 } from "../public";
import Card from "./Card";
const about: Data[] = [{
  data: {
    icon: about1,
    heading: "",
    details: "We enjoy fellowship together every week at any of our several locations all over the country. join us this weekend at a location close to you."
  }
}, about2, about2];
export interface Data{
  icon: StaticImageData,
  heading: string;
  details: string;
}
const About: FC = () => {
  const Id = useId();
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<Data>({ heading: "", details: "" });
  const useSetShow = (): void => {
    return setShow((state) => !state);
  };
  return (
    <section className="mt-24">
      <Card changeState={useSetShow} data={data} className={`${show ? `scale-100` : `scale-0`} transition-[transform] duration-300 origin-center ease-in`} />
    <div className="flex justify-around items-center">
      <span className="h-1/3 block basis-1/3"><Image src={pastor} layout={"responsive"} /></span> 
      <div className="w-full basis-1/3 text-left text-white flex flex-col gap-3">
          <h1 className="text-white font-bold tracking-widest text-2xl before:content-[''] before:absolute before:w-16 before:h-1 before:rounded-full  before:bg-white  before:mt-8  before:origin-left before:transition-[transform] before:duration-300 hover:before:scale-x-125 ">About US</h1>
        <div>
          <h2 className="text-white font-semibold tracking-widest text-xl">Why We Exist</h2>
          <p>Our mission is to bring total salvation and transformation to all men by teaching and preaching the undiluted word of God across the world.</p>
        </div>
      </div>
      </div>
      <div className="flex justify-evenly w-3/4 ml-auto relative right-0 -translate-y-10">
        {about.map((img,i) => <span key={Id + i} className="w-48 h-48 block cursor-pointer" onClick={useSetShow}><Image src={img} layout={"responsive"} /></span>)}
      </div>
    </section>
  )
}

export default About