import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { FC, useId, useRef, useState } from 'react'
import { pastor, about1, about2, about3 } from "../public";
import Card from "./Card";
interface About {
  icon: StaticImageData,
  data: Data,
}
const about: About[] = [{
  icon: about1,
  data: {
    heading: "Experience Koinonia",
    details: "We enjoy fellowship together every week at any of our several locations all over the country. join us this weekend at a location close to you.",
    link: "Plan A Visit"
  }
},
  {
  icon:about2,
  data: {
    heading: "Make Jesus Known",
    details: "It is our dream to take the name of Jesus Christ to every corner of the world in both speech and deeds. Help us make that dream a reality",
    link: "Give"
  }
},
{
  icon:about2,
  data: {
    heading: "Labour With Us",
    details: "The harvest is many and new labourers are stepping forward in their numbers. Join us for an opportunity to serve God with your time and strength",
    link: "Serve"
  }
}];
export interface Data{
  heading: string;
  details: string;
  link: string;
}

const About: FC = () => {
  const Id = useId();
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<Data>({ heading: "", details: "", link: "" });
  const imageContainerEl = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(imageContainerEl, { once: false,
    margin: "75% 100px 75% 0px"
  })
  const useSetShow = (): void => {
    return setShow((state) => !state);
  };
  const { span: Span } = motion;
  console.log(isInView)
  return (
    <section className="mt-24">
      <Card changeState={useSetShow} data={data} className={`${show ? `scale-100` : `scale-0 select-none`} transition-[transform] duration-300 origin-center ease-in`} />
      <div className="flex justify-around lg:flex-row items-center flex-col">
        <Span 
          initial={{
            x: "-100vw",
            opacity: 0
            }}
          animate={{
            x: isInView ? 0 : "-100vw" ,
            opacity: isInView ? 1 : 0
          }}
          transition={{delay: 0, type: "spring", stiffness: 140, bounce: 200}}
          className="lg:h-1/3 block lg:basis-1/3 lg:w-full w-3/4 h-auto"><Image src={pastor} layout={"responsive"} /></Span> 
      <div className="w-full basis-1/3 text-left text-white flex flex-col gap-3 p-6 lg:p-0">
          <h1 className="text-white font-bold tracking-widest text-2xl before:content-[''] before:absolute before:w-16 before:h-1 before:rounded-full  before:bg-white  before:mt-8  before:origin-left before:transition-[transform] before:duration-300 hover:before:scale-x-125 w-fit cursor-pointer" ref={imageContainerEl}>About US</h1>
        <div>
          <h2 className="text-white font-semibold tracking-widest text-xl">Why We Exist</h2>
          <p>Our mission is to bring total salvation and transformation to all men by teaching and preaching the undiluted word of God across the world.</p>
        </div>
      </div>
      </div>
      <div className="flex lg:justify-evenly lg:w-3/4 ml-auto relative right-0 lg:-translate-y-10 w-full justify-between p-6">
        {about.map(({ icon, data }:About, i) => <span key={Id + i} className="w-full h-full block cursor-pointer" onClick={() => { 
          useSetShow();
          setData(data);
           }}
          tabIndex={5} onBlur={useSetShow}
           ><Image src={icon} layout={"responsive"} /></span>)}
      </div>
    </section>
  )
}

export default About