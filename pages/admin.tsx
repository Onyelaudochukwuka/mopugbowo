import  React, { FC, useEffect, useMemo } from 'react';
import { Editor } from "../components";
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';

export interface IadminProps {
}

const admin: FC<IadminProps> = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  useEffect(() => {
    console.log(editor);
  },[])
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-6">
      <div className="">
        <label className="text-white text-2xl font-bold">Title:</label>
        <input type={"text"} className="py-2 px-4 outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"/>
      </div>
      <div>
      <p className="text-white text-2xl font-bold">Details:</p>
        <Editor {...{ editor }} />
      </div>
      <span className="p-6 px-8 bg-curves text-white w-fit cursor-pointer rounded-md text-xl hover:bg-primaryLight transition-colors duration-500 ease-in font-bold">Submit</span>
    </div>
  );
}
export default admin;