import React, { FC, PropsWithChildren } from "react";
import { Cancel } from "../public";
import { Data } from "./About";
const Card: FC<{ changeState: () => void; data: Data; className: string }> = ({
  changeState,
  data,
  className,
}) => {
  const { heading, details, link }: Data = data;
  return (
    <div
      className={`fixed inset-0 z-[99] flex justify-center items-center ${className}`}
    >
      <div className="bg-white lg:w-1/2 lg:h-1/2 w-11/12 h-fit m-auto flex flex-col items-center shadow-inner rounded-lg justify-center gap-4 px-12 py-6 lg:py-0  text-center relative">
        <Cancel
          className="w-8 h-8 absolute top-4 right-5 cursor-pointer"
          onClick={changeState}
        />
        <h1 className="text-2xl font-bold mt-8 lg:mt-0">{heading}</h1>
        <p className="font-semibold text-lg">{details}.</p>
        <a className="px-12 py-4 bg-curves rounded-full text-white font-bold cursor-pointer">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Card;
