import  React, { FC } from 'react';

export interface ILoaderProps {
}

const Loader: FC<ILoaderProps> = (props) => {
  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
}
export default Loader;