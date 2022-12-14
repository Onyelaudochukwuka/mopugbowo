import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="h-screen bg-background bg-[position:40%] lg:bg-center bg-cover bg-no-repeat flex justify-center items-center flex-col text-text font-bold gap-4 relative">
      <p className="lg:text-3xl font-extrabold text-center text-lg">
        Church Is Not Just The Physical Building
        <br />
        {' '}
        But It Is The Ground And Pillar Of Truth.
        <br />
        <span className="text-base"> 1 Timothy 3:15</span>
      </p>
      <a
        href="https://www.youtube.com/@MinistryofPerfectionChurch"
        className="bg-light text-primaryLight p-3 px-5 text-sm lg:text-base rounded-full  hover:bg-light/75 transition-[background] duration-500 ease-in relative cursor-pointer"
      >
        {' '}
        Watch Sermon
        {' '}
      </a>
    </div>
  );
};

export default Hero;
