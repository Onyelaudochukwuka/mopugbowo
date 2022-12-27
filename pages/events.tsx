import React from 'react';

import type { NextPage } from 'next';

import { Event } from '../components';
import { crossOverInvitation } from '../public';

const events: NextPage = () => {
  const eventsData = [
    {
      id: 1,
      title: 'Join Us for Our Cross Over Service',
      date: '2022-12-31',
      time: '9:00 PM',
      description: 'Join Us for Our Cross Over Service',
      image: crossOverInvitation,
      timeLeft: 1672516800000,
    },
  ];
  return (
    <section className="mt-24 flex flex-col gap-12">
      <h1 className="text-white text-3xl font-semibold text-center">
        Recent Events
      </h1>
      <div className="flex flex-col items-center justify-center">
        {eventsData.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};
export default events;
