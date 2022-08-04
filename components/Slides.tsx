import Image, { StaticImageData } from "next/image";
import React, { FC, useId, useState } from 'react'
import { slide1, slide2, slide3, leftArrow, rightArrow } from "../public";
type Images = StaticImageData[];
const Slides: FC = () => {
  const [images, setImages] = useState<Images>([slide3, slide1, slide3]);
  const Id = useId();

  return (
    <div className="flex w-full items-center justify-center mt-24">
      <span className="w-16 h-16 block translate-x-56 z-10 cursor-pointer"
        onClick={()=>{
          setImages((prev)=>{
            const newArr = [...prev];
            const [a, b] = newArr;
            newArr.splice(0, 2, b, a);
            return newArr;
          })
        }}
      ><Image src={leftArrow} layout={"responsive"}/></span>
      <div className="flex justify-center items-center w-full">
        {images.map((img, i) => <span key={Id + i} className={`${i % 2 !== 1 ? `scale-75 shadow-[0px_0px_15px_7.5px_rgba(0,0,0,0.25)] hover:shadow-[0px_0px_20px_10px_rgba(0,0,0,0.25)] ${(i + 1) % 3 !== 0 ? `translate-x-36` : `-translate-x-36`}` : `scale-125 z-20 shadow-[0px_0px_25px_12.5px_rgba(0,0,0,0.25)] hover:shadow-[0px_0px_40px_20px_rgba(0,0,0,0.25)]`} w-1/2 h-fit block transition-all duration-500 ease-in`}><Image src={img} layout={"responsive"} /></span>
          )}
      </div>
      <span className="w-16 h-16 -translate-x-56 block cursor-pointer"
        onClick={() => {
          setImages((prev) => {
            const newArr = [...prev];
            const [a, ...[c, d]] = newArr;
            newArr.splice(newArr.length - 2,  2, d, c);
            return newArr;
          })
        }}
      ><Image src={rightArrow} layout={"responsive"} /></span>
    </div>
  )
}

export default Slides