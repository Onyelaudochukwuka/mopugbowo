import React, { FC, useId } from 'react';
import Image from "next/image";
import { footerimg, facebook, twitter, instagram } from "../public";
const socials = [facebook, twitter, instagram];
const Footer: FC = (props: any) => {
  const Id = useId();
  return (
    <section className="box-border block bg-dark h-max max-h-screen min-h-[90vh] relative">
      <div className="absolute z-50 text-white bottom-0 w-full">
        <div className="flex justify-between w-3/4 mx-auto font-semibold">
          <span>Home</span>
          <span>What We Believe</span>
          <span>Sermons</span>
          <span>Locations</span>
          <span>Contact</span>
        </div>
        <div>
          {
            socials.map((icon)=><Image src={icon} />)
}
        </div>
      </div>
      <span className="w-full block"><Image src={footerimg} layout={"responsive"} /></span>
      </section>
  )
}

export default Footer