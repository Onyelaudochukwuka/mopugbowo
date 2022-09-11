import { motion } from "framer-motion"
import React, { FC } from 'react'

const Hero: FC = () => {
  const { div: Div } = motion;
  return (
    <Div
      initial={{ y: '-20%' }}
      animate={{ y: 0 }}
      className="h-screen bg-background bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col text-white font-bold gap-4 relative">
      <p className="lg:text-3xl font-extrabold text-center text-lg">Church Is Not Just The Physical Building<br/> But It Is The Ground And Pillar Of Truth.</p>
      <a href="" className="bg-light p-3 px-5 text-sm lg:text-base rounded-full shadow-[0px_6px_10px_5px_rgba(223,172,22,0.25)] drop-shadow-[3px_4px_8px_rgba(223,172,22,0.25),_-3px_-3px_7px_rgba(223,172,22,0.73),_3px_3px_5px_light hover:bg-light/75 transition-[background] duration-500 ease-in hover:shadow-[0px_6px_10px_5px_rgba(223,172,22,0.25)] drop-shadow-[3px_4px_8px_rgba(223,172,22,0.25),_-3px_-3px_7px_rgba(223,172,22,0.73),_3px_3px_5px_rgba(223,172,22,0.288)] relative cursor-pointer"> Watch Sermon </a>
    </Div>
  )
}

export default Hero