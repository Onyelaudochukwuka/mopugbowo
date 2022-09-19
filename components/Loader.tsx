import  React, { FC } from 'react';

export interface ILoaderProps {
}

const Loader: FC<ILoaderProps> = (props) => {
  return (
    <section>
      <div className="w-8 h-8 bg-light animate1"></div>
      <div className="w-8 h-8 bg-light animate2"></div>
      <div className="w-8 h-8 bg-light animate3"></div>
    </section>
  );
}
export default Loader;