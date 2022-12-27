import React, { FC, FormEvent, useEffect, useMemo, useState } from "react";
import { Editor } from "../components";

import { BlogPost } from "../models/blog";
import { postBlogPost } from "../utils/services";
import PopUp from "../components/PopUp";
import Loading from "../components/Loading";
import { Failed } from "../components/icon";
import FailedPopUp from "../components/FailedPopUp";
import { useCreatePostMutation } from "../utils/services/ApiConnection";
import moment from "moment";
import dynamic from "next/dynamic";
export interface IadminProps {}

export const parser = (arg: string): string => {
  var string: string = arg?.replace(" ", "-");
  return arg?.indexOf(" ") > -1 ? parser(string) : string?.toLowerCase();
};
const DynamicComponentWithNoSSR = dynamic(
  async () => import("../components/Editor"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Admin: FC<IadminProps> = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState<string>("");
  const [excerptInput, setExcerptInput] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [blogPost, setBlogPost] = useState<any>({
    date,
    post: value,
    title: "",
    excerpt: "",
    image_url: imageUrl,
    slug: "",
  });
  console.log(date);
  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();
  useEffect(() => {
    setBlogPost((prev: any) => ({
      ...prev,
      date,
      post: value,
      title: input,
      excerpt: excerptInput,
      slug: parser(input),
      image_url: imageUrl,
    }));
  }, [input, value, excerptInput]);
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);
  useEffect(() => {
    if (isSuccess) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }, [isSuccess]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== "passwordmopc") return;
    createPost(blogPost);
  };
  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto flex flex-col gap-6">
      <PopUp
        toggle={submitted}
        close={() => setSubmitted(false)}
        message="Post Created"
      />
      <FailedPopUp
        toggle={failed}
        message={message}
        close={() => setFailed(false)}
      />
      <Loading toggle={loading} />
      <div className="">
        <label className="text-white text-2xl font-bold">Title:</label>
        <input
          required
          name="heading"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type={"text"}
          className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white text-2xl font-bold">Excerpt:</label>
        <textarea
          required
          value={excerptInput}
          onChange={(e) => setExcerptInput(e.target.value)}
          className="p-6 rounded-md"
        ></textarea>
      </div>
      <div className="flex gap-4">
        <div className="">
          <label className="text-white text-2xl font-bold">ImageUrl:</label>
          <input
            required
            name="heading"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type={"text"}
            className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
        </div>
        <div>
          <label className="text-white text-2xl font-bold">Password:</label>
          <input
            type="date"
            onChange={(e) => {
              setDate(new Date(e.target.value).getTime());
            }}
            className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
        </div>
      </div>
      <div className="">
        <label className="text-white text-2xl font-bold">Password:</label>
        <input
          required
          name="heading"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"text"}
          className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div>
        <p className="text-white text-2xl font-bold">Details:</p>
        <DynamicComponentWithNoSSR {...{ value, setValue }} />
      </div>
      <button
        type="submit"
        className="p-6 px-8 bg-curves text-white w-fit cursor-pointer rounded-md text-xl hover:bg-primaryLight transition-colors duration-500 ease-in font-bold"
      >
        Submit
      </button>
    </form>
  );
};
export default Admin;
