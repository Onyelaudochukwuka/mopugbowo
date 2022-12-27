import React, { FC } from 'react';

import Countdown from 'react-countdown';

export interface IEventProps {}

const renderer = ({
  hours, minutes, seconds, completed,
}: Record<string, number>) => {
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
const Event: FC<IEventProps> = (props) => {
  return <section>Event</section>;
};
export default Event;
