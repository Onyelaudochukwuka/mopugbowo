import  React, { FC } from 'react';

export interface ILoaderProps {
}

const Loader: FC<ILoaderProps> = (props) => {
  return (
    <section>
      <div className="w-8 h-8 bg-light "></div>
      <div className="w-8 h-8 bg-light "></div>
      <div className="w-8 h-8 bg-light "></div>
    </section>
  );
}
export default Loader;