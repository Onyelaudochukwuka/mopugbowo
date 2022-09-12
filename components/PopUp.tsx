import  React, { FC } from 'react';
import { Success, Close } from "./icon";

export interface IPopUpProps {
}

const PopUp: FC<IPopUpProps> = (props) => {
  return (
    <section className="flex bg-black/40 fixed inset-0 w-full h-full z-50 items-center justify-center">
      <div className="bg-white w-3/4 h-3/4 relative flex items-center justify-center flex-col">
        <Close className="w-8 h-8 absolute top-4 right-4 cursor-pointer" />
        <p><Success /> </p>
        <p className="text-xl font-bold">Post Created</p>
      </div>
    </section>
  );
}
export default PopUp;