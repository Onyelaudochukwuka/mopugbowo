import  React, { FC } from 'react';
import Success from "./icon/Success";

export interface IPopUpProps {
}

const PopUp: FC<IPopUpProps> = (props) => {
  return (
    <section className="flex fixed inset-0 w-full h-full z-50 items-center justify-center">
      <div className="bg-white w-3/4 h-3/4 flex items-center justify-center flex-col">
        <Close
        <p className="text-xl font-bold"><Success /> </p>
        <p>Post Created</p>
      </div>
    </section>
  );
}
export default PopUp;