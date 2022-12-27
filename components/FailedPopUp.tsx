import React, { FC } from 'react';

import { Close, Failed } from './icon';

export interface IPopUpProps {
  toggle: boolean
  close: () => void
  message?: string
}

const FailedPopUp: FC<IPopUpProps> = ({ toggle, close, message }) => {
  return (
    <section className={`${toggle ? 'scale-100' : 'scale-0'} transition-transform duration-500 ease-in flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center`}>
      <div className="bg-white w-3/4 h-3/4 relative flex items-center justify-center flex-col">
        <Close
          onClick={() => close()}
          className="w-8 h-8 absolute top-4 right-4 cursor-pointer"
        />
        <p>
          <Failed />
          {' '}
        </p>
        <p className="text-xl font-bold">{ message }</p>
      </div>
    </section>
  );
};
FailedPopUp.defaultProps = {
  message: 'Failed to send message',
};
export default FailedPopUp;
