import type { NextPage } from 'next';

export interface IEventsProps {
}

const events: NextPage<IEventsProps> = () => {
  return (
    <section>
      <h1 className="text-white text-3xl font-semibold text-center">Recent Events</h1>
    </section>
  );
};
export default events;
