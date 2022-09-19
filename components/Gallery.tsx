import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5 } from "../public";

const Gallery = () => {
    const [isSmallMobile, setIsSmallMobile] = useState<boolean>(false);
    const [isLargeMobile, setIsLargeMobile] = useState<boolean>(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth > 920) {
                setIsSmallMobile(false);
                setIsLargeMobile(false);
            }
            else if (window.innerWidth > 720 && window.innerWidth < 920) {
                setIsLargeMobile(true);
                setIsSmallMobile(false);
            }
            else {
                setIsSmallMobile(true)
                setIsLargeMobile(false);
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <section>
            <h1 className="text-center relative text-bold text-text font-bold tracking-widest text-2xl before:absolute before:w-24 before:h-1 before:rounded-full  before:bg-text before:mt-8 before:origin-left before:transition-[transform] before:duration-300 hover:before:scale-x-125  cursor-pointer mb-8">Gallery</h1>
            <Swiper
                slidesPerView={isSmallMobile ? 1 : isLargeMobile ? 2 : 3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Image src={ Gallery1 } layout="fill" className="z-20"  objectFit="scale-down" /> </SwiperSlide>
                <SwiperSlide><Image src={ Gallery2 } layout="fill" className="z-20"  objectFit="scale-down" /> </SwiperSlide>
                <SwiperSlide><Image src={ Gallery3 } layout="fill" className="z-20"  objectFit="scale-down" /> </SwiperSlide>
                <SwiperSlide><Image src={ Gallery4 } layout="fill" className="z-20"  objectFit="scale-down" /> </SwiperSlide>
                <SwiperSlide><Image src={ Gallery5 } layout="fill" className="z-20"  objectFit="scale-down" /> </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default Gallery;
