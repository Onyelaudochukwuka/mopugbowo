import React, { FC } from 'react'
import  Image  from "next/image";

const Contact:FC = () => {
  return (
    <section className="p-3 flex flex-col gap-8">
      <h1 className="text-center text-bold text-white font-bold tracking-widest text-2xl before:content-[''] before:absolute before:w-24 before:h-1 before:rounded-full  before:bg-white before:mt-8 ">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.107868914145!2d5.604486662757621!3d6.380075390984419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb4f67723b60b2ea!2sMinistry%20Of%20Perfection%20-%20Ugbowo!5e0!3m2!1sen!2sng!4v1653662210346!5m2!1sen!2sng"
        className="m-auto w-4/5 h-[500px]" loading="lazy" />
      <div className="flex">
        <span>
          <Image />
          <h3></h3>
          <p></p>
        </span>
      </div>
    </section>
  )
}

export default Contact