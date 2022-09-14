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
export interface IadminProps {
}

export const parser = (arg: string): string => {
  var string = arg?.replace(' ', '-');
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

  const [blogPost, setBlogPost] = useState<BlogPost>({ date: Date.now(), post: initialValue, title: "", excerpt: "" , image_url: imageUrl, slug: "" });
  useEffect(() => {
    setBlogPost(prev => ({ ...prev, date: Date.now(), post: editor.children, title: input, excerpt: excerptInput, slug: parser(input), image_url: imageUrl }));
  }, [input, editor, toggle, excerptInput]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    postBlogPost(blogPost)
    .then((res) => {
      setLoading(false);
      setSubmitted(true);
    })
    .catch ((err) => {
      setLoading(false);
      console.log(err)
});
  }
  return (
    <form
    onSubmit={handleSubmit}
      className="w-3/4 mx-auto flex flex-col gap-6">
      <PopUp toggle={submitted} close={() => setSubmitted(false)} />
      <Loading toggle={loading} />
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