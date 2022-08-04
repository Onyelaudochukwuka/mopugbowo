import Image from "next/image";
import React, { FC, useId } from 'react'
import { slide1, slide2, slide3 } from "../public";
const images = [slide2, slide1, slide3];
const Slides: FC = () => {
  const Id = useId()
  return (
      <div className="flex">
      {images.map((img,i) =>  <Image key={Id + i} src={img}/>
          )}
    </div>
  )
}

export default Slides