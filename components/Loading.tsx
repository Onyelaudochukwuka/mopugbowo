import  React, { FC } from 'react';

export interface ILoadingProps {
}

const Loading: FC<ILoadingProps> = (props) => {
  return (
    <section className={`${true ? `scale-100` : `scale-0`} transition-transform duration-500 ease-in flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center`}>
      
    </section>
  );
}
export default Loading;