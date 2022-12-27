import React, { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { christmas } from '../public';

import { Close } from './icon';

export interface IEventsPopUpProps {
  toggle: boolean
  close: () => void
  message: string
  link: string
}

const EventsPopUp: FC<IEventsPopUpProps> = ({
  toggle,
  close,
  message,
  link,

}) => {
  return (
    <section
      className={`${
        toggle ? 'scale-100' : 'scale-0'
      } transition-transform duration-500 ease-in flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center`}
    >
      <div className="bg-white lg:w-fit w-10/12 p-4 h-fit relative flex items-center justify-center flex-col gap-3">
        <Close
          onClick={() => close()}
          className="w-8 h-8 absolute top-4 right-4 cursor-pointer"
        />
        <div className="h-64 w-64 mx-auto">
          <Image src={christmas} layout="responsive" />
        </div>
        <p className="lg:text-xl capitalize font-bold text-center">
          {message.toLowerCase()}
        </p>
        <Link href={`/${link}`}>
          <span className="px-5 rounded-full py-2 bg-primaryLight text-white cursor-pointer">Events</span>
        </Link>
      </div>
    </section>
  );
};
export default EventsPopUp;
