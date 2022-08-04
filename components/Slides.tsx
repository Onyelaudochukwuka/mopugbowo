import Image from "next/image";
import React, { FC, useId } from 'react'
import { slide1, slide2, slide3 } from "../public";
const images = [slide3, slide1, slide3];
const Slides: FC = () => {
  const Id = useId()
  return (
      <div className="flex items-baseline">
      {images.map((img, i) => <span key={Id + i} className={`${i  % 2 !== 1 ? `scale-75 ${(i+1) % 3 !== 0 ? `translate-x-36` : `-translate-x-36` }` : `scale-150 z-20`}`}><Image src={img} /></span>
          )}
    </div>
  )
}

export default Slides