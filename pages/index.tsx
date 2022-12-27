import React, { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import {
  About, Contact, Cta, EventsPopUp, Hero, Sermons,
} from '../components';
import Gallery from '../components/Gallery';

const Home: NextPage = () => {
  const [toggle, setTogle] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTogle(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <EventsPopUp {...{ toggle, close: () => setTogle(false) }} message="Merry Chrismas and a Prosperous New Year, Check Out Our UpCOming Events" link="/events" />
      <Hero />
      <Sermons />
      <Gallery />
      <About />
      <Contact />
      <Cta />
    </div>
  );
};

export default Home;
