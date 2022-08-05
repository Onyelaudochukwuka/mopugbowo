import React, { FC } from 'react'

const Hero:FC = () => {
  return (
    <div className="h-screen bg-background bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col text-white font-bold gap-4 relative">
      <p className="text-3xl font-extrabold text-center">Church Is Not Just The Physical Building<br/> But It Is The Ground And Pillar Of Truth.</p>
      <a href="" className="bg-light p-3 px-5 rounded-full shadow-[0px_6px_10px_5px_rgba(223,172,22,0.25)] drop-shadow-[3px_4px_8px_rgba(223,172,22,0.25),_-3px_-3px_7px_rgba(223,172,22,0.73),_3px_3px_5px_rgba(223,172,22,0.288)]"> Watch Sermon</a>
    </div>
  )
}

export default Hero