import Image from "next/image";
import React, { FC, useId } from 'react'
import { slide1, slide2, slide3, leftArrow, rightArrow } from "../public";
const images = [slide3, slide1, slide3];
const Slides: FC = () => {
  const Id = useId()
  return (
    <>
      <div className="flex mt-24 justify-center items-center">
      {images.map((img, i) => <span key={Id + i} className={`${i % 2 !== 1 ? `scale-75 shadow-[0px_-2px_15px_7.5px_rgba(0,0,0,0.25)] ${(i + 1) % 3 !== 0 ? `translate-x-36` : `-translate-x-36`}` : `scale-125 z-20 shadow-[0px_-2px_25px_12.5px_rgba(0,0,0,0.25)]`} w-1/2 h-fit`}><Image src={img} layout={"responsive"} /></span>
          )}
    </div>
    </>
  )
}

export default Slides