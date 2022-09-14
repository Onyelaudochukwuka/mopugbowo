import  React, { FC } from 'react';
import { Success, Close } from "./icon";

export interface IPopUpProps {
  toggle: boolean;
  close: () => void;
}

const FailedPopUp: FC<IPopUpProps> = ({ toggle, close }) => {
  return (
    <section className={`${toggle ? `scale-100`: `scale-0`} transition-transform duration-500 ease-in flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center`}>
      <div className="bg-white w-3/4 h-3/4 relative flex items-center justify-center flex-col">
        <Close
          onClick={() => close()}
          className="w-8 h-8 absolute top-4 right-4 cursor-pointer" />
        <p><Success /> </p>
        <p className="text-xl font-bold">Post Created</p>
      </div>
    </section>
  );
}
export default FailedPopUp;