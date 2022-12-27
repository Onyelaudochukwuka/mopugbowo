/* eslint-disable react/no-unused-prop-types */
import React, {
  FC, useState,
} from 'react';

import { useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '../public';

interface Content {
  text: string
  link: string
  inHome: boolean
}
const content: Content[] = [
  { text: 'Home', link: '#home', inHome: true },
  { text: 'About Us', link: '#about-us', inHome: true },
  { text: 'Events', link: 'events', inHome: false },
  { text: 'Blog', link: 'post', inHome: false },
  { text: 'Contact Us', link: '#contact-us', inHome: true },
  { text: 'Give', link: 'donate', inHome: false },
];
const Navbar: FC = () => {
  const [yDistance, setYDistance] = useState<number>(0);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const { scrollY } = useScroll();
  scrollY.onChange((y) => setYDistance(y));
  return (
    <nav
      className={`${
        yDistance > 30 ? 'bg-curves' : 'bg-transparent'
      } transition-colors duration-500 ease-in w-full flex flex-1 p-4 justify-between items-center px-[8.33%] fixed top-0 z-40`}
    >
      <span className="w-12 ">
        <Image src={logo} />
      </span>
      <div
        className={`flex justify-between lg:flex-row lg:basis-6/12 lg:mr-[8.33%] text-text font-bold items-center ${
          dropDown ? 'scale-100 bg-curves items-center py-12' : 'scale-0'
        } lg:bg-transparent lg:py-0 lg:scale-100 origin-top-left  transition-transform duration-700 lg:transition-none lg:duration-0 ease-in z-50  h-[90vh] w-full lg:w-auto lg:h-auto inset-0 lg:relative absolute top-24 lg:top-auto flex-col`}
      >
        {content.map(({ text, link, inHome }: Content) => (inHome ? (
          <a href={`/${link}`} onClick={() => setDropDown(false)}>
            {' '}
            <span
              key={text}
              className="relative before:absolute before:-bottom-2 before:w-full before:left-0 before:h-1 before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-100 hover:before:origin-left before:rounded-full cursor-pointer"
            >
              {text}
            </span>
          </a>
        ) : (
          <Link key={text} href={`/${link}`}>
            <span
              onClick={() => setDropDown(false)}
              className="relative before:absolute before:-bottom-2 before:w-full before:left-0 before:h-1 before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-100 hover:before:origin-left before:rounded-full cursor-pointer"
              aria-hidden="true"
            >
              {text}
            </span>
          </Link>
        )))}
      </div>
      <div
        className="relative lg:hidden"
        onClick={() => setDropDown((prev) => !prev)}
        aria-hidden="true"
      >
        <span
          className={`block w-10 h-1 relative bg-white rounded-full cursor-pointer before:w-8 before:h-1 before:bg-white before:rounded-full  before:absolute before:bottom-3 after:w-8 after:h-1 after:right-0 before:right-0 after:bg-white after:rounded-full  after:absolute after:top-3 transition-colors duration-300 ease-in-out after:transition-transform after:duration-500 after:ease-in before:transition-transform before:duration-500 before:ease-in ${
            dropDown ? 'before:rotate-45 bg-transparent after:-rotate-45 before:top-0 after:top-0' : ''
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
