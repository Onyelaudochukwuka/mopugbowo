import React, { FC, useId } from 'react';
import Image, { StaticImageData } from "next/image";
import { footerimg, facebook, twitter, instagram, logo } from "../public";
const socials:StaticImageData[] = [facebook, twitter, instagram];
const Footer: FC = () => {
  const Id = useId();
  return (
    <section className="box-border block bg-dark h-max  relative">
      <div className="absolute z-50 text-white bottom-24 w-full flex flex-col gap-12 items-center self-end mt-auto">
        <div className="flex justify-between w-3/4 mx-auto font-semibold">
          <span>Home</span>
          <span>What We Believe</span>
          <span>Sermons</span>
          <span>Locations</span>
          <span>Contact</span>
        </div>
        <div className="flex items-center justify-between w-3/12">{socials.map((icon: StaticImageData, i: number) => <span key={Id + i} className="w-10 h-10 block"><Image src={icon} layout="responsive" /></span>)}</div>
        <p>&copy;2020 Ministry Of Perfection CHurch  All Right Reserved</p>
        <span className="block w-12 h-12">
          <Image src={logo} layout="responsive"/>
        </span>

      </div>
      <span className="w-full block"><Image src={footerimg} layout={"responsive"} /></span>
      </section>
  )
}

export default Footer