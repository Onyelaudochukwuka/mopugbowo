import  React, { FC, useEffect, useMemo, useState } from 'react';
import { Editor } from "../components";
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';
import { BlogPost } from "../models/blog";
import { initialValue } from "../components/Editor";

export interface IadminProps {
}

const admin: FC<IadminProps> = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const [input, setInput] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [blogPost, setBlogPost] = useState<BlogPost>({ date: Date.now(), post: initialValue, title: "" });
  useEffect(() => {
    setBlogPost(prev => ({ ...prev, date: Date.now(), post: editor.children, title: input }));
    console.log(blogPost);
    console.log(editor.children);
  },[input, editor, toggle])
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-6">
      <div className="">
        <label className="text-white text-2xl font-bold">Title:</label>
        <input value={input} onChange={(e) => setInput(e.target.value)} type={"text"} className="py-2 px-4 outline-none w-full rounded-sm focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
      </div>
      <div>
      <p className="text-white text-2xl font-bold">Details:</p>
        <Editor {...{ editor, setToggle }} />
      </div>
      <span className="p-6 px-8 bg-curves text-white w-fit cursor-pointer rounded-md text-xl hover:bg-primaryLight transition-colors duration-500 ease-in font-bold">Submit</span>
    </div>
  );
}
export default admin;