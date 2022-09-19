import React, { FC } from "react";

export interface ILoadingProps {
  toggle: boolean;
}

const Loading: FC<ILoadingProps> = ({ toggle }) => {
  return (
    <section
      className={`${
        toggle ? `translate-x-0` : `-translate-x-full`
      } transition-transform duration-500 ease-in flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center`}
    >
      <div className="flex flex-col rounded-full w-36 h-36 justify-between animate-spin">
        <div className="w-6 h-6 rounded-full bg-curves relative  self-center"></div>

        <div className="flex justify-between">
          <div className="w-6 h-6 rounded-full bg-curves relative self-start"></div>
          <div className="w-6 h-6 rounded-full bg-curves relative self-end"></div>
        </div>
        <div className="w-6 h-6 rounded-full bg-curves relative self-center"></div>
      </div>
    </section>
  );
};
export default Loading;
