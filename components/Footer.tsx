import React, { FC } from 'react';
import Image from "next/image";
import { footerimg } from "../public";
const Footer:FC = (props:any) => {
  return (
    <section className="box-border block bg-dark h-max max-h-screen min-h-[90vh]">
      <span className="w-full block  absolute"><Image src={footerimg} layout={"responsive"} /></span>
      <div className="relative z-50 mt-auto bottom-0 text-white translate-y-[90vh] ">
          <p>Hiii</p>
      </div>
      </section>
  )
}

export default Footer