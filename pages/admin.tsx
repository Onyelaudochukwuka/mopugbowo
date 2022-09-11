import  React, { FC } from 'react';
import { Editor } from "../components";

export interface IadminProps {
}

const admin: FC<IadminProps> = (props) => {
  return (
    <div>
      <div>
        <label>Title:</label>
        <input type={"text"}  className=""/>
      </div>
      <Editor />
    </div>
  );
}
export default admin;