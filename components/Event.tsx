import React, { FC } from 'react';

import Countdown, { CountdownRendererFn } from 'react-countdown';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEventProps {}

const Renderer: CountdownRendererFn = ({
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
    <span>
      {hours}
      :
      {minutes}
      :
      {seconds}
    </span>
  );
};
const Event: FC<IEventProps> = () => {
  return <Countdown date={Date.now() + 5000} renderer={Renderer} />;
};
export default Event;
