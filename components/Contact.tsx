import React, { FC, useId } from 'react';

import Image, { StaticImageData } from 'next/image';

import { location, mail, phone } from '../public';

type ContactDetails = Array<{
  icon: StaticImageData
  heading: string
  content: string
}>;
const contactDetails: ContactDetails = [
  {
    icon: location,
    heading: 'Our Address',
    content: '11 Akugbe street off Uwasota Benin City, Edo State, Nigeria',
  },
  {
    icon: mail,
    heading: 'Email',
    content: 'minperfectugbowo@gmail.com',
  },
  {
    icon: phone,
    heading: 'Call Us',
    content: '(+234) 802 328 2085',
  },

];
const Contact: FC = () => {
  const Id = useId();
  return (
    <section className="p-3 flex flex-col gap-8" id="contact-us">
      <h1 className="text-center relative text-bold text-text font-bold tracking-widest text-2xl before:absolute before:w-24 before:h-1 before:rounded-full  before:bg-text before:mt-8 before:origin-left before:transition-[transform] before:duration-300 hover:before:scale-x-125  cursor-pointer">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.107868914145!2d5.604486662757621!3d6.380075390984419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb4f67723b60b2ea!2sMinistry%20Of%20Perfection%20-%20Ugbowo!5e0!3m2!1sen!2sng!4v1653662210346!5m2!1sen!2sng"
        className="mx-auto w-4/5 h-[500px]"
        loading="lazy"
      />
      <div className="flex justify-around gap-12 w-11/12 mx-auto lg:flex-row flex-col">
        {contactDetails.map(({ icon, heading, content }, i) => (
          <span key={Id + i} className="flex flex-col items-center justify-center gap-2 lg:p-3 p-12 bg-curves basis-1/5 w-full flex-1 text-center text-text rounded-lg shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
            <span className="block w-12 h-12">
              <Image src={icon} layout="responsive" />
              {' '}
            </span>
            <h3 className="font-semibold text-lg">{heading}</h3>
            <p className="font-semibold text-base mt-4">{content}</p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Contact;
