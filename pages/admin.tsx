import  React, { FC, FormEvent, useEffect, useMemo, useState } from 'react';
import { Editor } from "../components";
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { withHistory } from 'slate-history';
import { createEditor, Node } from 'slate';
import { BlogPost } from "../models/blog";
import { initialValue } from "../components/Editor";
import { postBlogPost } from "../utils/services";
import PopUp from "../components/PopUp";
import Loading from "../components/Loading";
import { Failed } from "../components/icon";
import FailedPopUp from "../components/FailedPopUp";
import { useCreatePostMutation } from "../utils/services/ApiConnection";
export interface IadminProps {
}

export const parser = (arg: string): string => {
  var string:string = arg?.replace(' ', '-');
  return arg?.indexOf(' ') > -1 ? parser(string) : string?.toLowerCase();
}
const admin: FC<IadminProps> = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const [input, setInput] = useState<string>("");
  const [excerptInput, setExcerptInput] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [blogPost, setBlogPost] = useState<any>({ date: Date.now(), post: initialValue, title: "", excerpt: "", image_url: imageUrl, slug: "" });
  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();
  useEffect(() => {
    setBlogPost((prev:any) => ({ ...prev, date: Date.now(), post: editor.children, title: input, excerpt: excerptInput, slug: parser(input), image_url: imageUrl }));
  }, [input, editor, toggle, excerptInput]);
  useEffect(() => {
    if(isLoading) {
      setLoading(true);

    } else {
      setLoading(false);
    }
  }, [isLoading]);
  useEffect(() => {
    if(isSuccess) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  },[isSuccess]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost(blogPost); 
  }
  return (
    <form
    onSubmit={handleSubmit}
      className="w-3/4 mx-auto flex flex-col gap-6">
      <PopUp toggle={submitted} close={() => setSubmitted(false)} message="Post Created" />
      <FailedPopUp toggle={failed} message={message} close={() => setFailed(false)} />
      <Loading toggle={loading}  />
      <div className="">
        <label className="text-white text-2xl font-bold">Title:</label>
        <input required name="heading" value={input} onChange={(e) => setInput(e.target.value)} type={"text"} className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
      </div>
      <div className="flex flex-col">
        <label className="text-white text-2xl font-bold">Excerpt:</label>
        <textarea required value={excerptInput} onChange={(e) => setExcerptInput(e.target.value)}
          className="p-6 rounded-md">

        </textarea>
      </div>
      <div>

      <p className="text-white text-2xl font-bold">Details:</p>
        <Editor {...{ editor, setToggle }} />
      </div>
      <button type="submit" className="p-6 px-8 bg-curves text-white w-fit cursor-pointer rounded-md text-xl hover:bg-primaryLight transition-colors duration-500 ease-in font-bold">Submit</button>
    </form>
  );
}
export default admin;