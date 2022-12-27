import React, { FC } from 'react';

import moment from 'moment';
import Image, { StaticImageData } from 'next/image';
import Countdown, { CountdownRendererFn } from 'react-countdown';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEventProps {
  title: string
  date: string
  time: string
  description: string
  image: StaticImageData
  timeLeft: number
}

const Renderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: any & { completed: boolean }) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (completed) {
    // Render a completed state
    return null;
  }
  // Render a countdown
  return (
    <span className="text-3xl font-bold">
      {days}
      :
      {hours}
      :
      {minutes}
      :
      {seconds}
    </span>
  );
};
const Event: FC<IEventProps> = ({
  timeLeft,
  title,
  date,
  time,
  description,
  image,
}) => {
  return (
    <div className="flex items-center justify-center lg:w-10/12 w-11/12 bg-white p-3 rounded-md shadow-xl gap-4">
      <div className="basis-1/2">
        <Image src={image} layout="responsive" />
      </div>
      <div className="basis-1/2 flex flex-col justify-between h-full lg:text-center">
        <Countdown date={timeLeft} renderer={Renderer} />
        <div>
          <h2 className="lg:text-xl text-lg font-bold">{title}</h2>
          <p className="text-base font-bold">{moment(date).format('Do MMMM, YYYY')}</p>
          <p className="font-bold">{time}</p>
          <p className="hidden">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Event;
