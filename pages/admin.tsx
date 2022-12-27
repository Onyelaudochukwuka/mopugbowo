import React, {
  FC, FormEvent, useEffect, useState,
} from 'react';

import dynamic from 'next/dynamic';

import FailedPopUp from '../components/FailedPopUp';
import Loading from '../components/Loading';
import PopUp from '../components/PopUp';
import { useCreatePostMutation } from '../utils/services/ApiConnection';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IadminProps {}

export const parser = (arg: string): string => {
  const string: string = arg?.replace(' ', '-');
  return arg?.includes(' ') ? parser(string) : string?.toLowerCase();
};
const DynamicComponentWithNoSSR = dynamic(
  async () => import('../components/Editor'),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const Admin: FC<IadminProps> = () => {
  const [value, setValue] = useState('');
  const [input, setInput] = useState<string>('');
  const [excerptInput, setExcerptInput] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [message] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [date, setDate] = useState<number>(0);
  const [blogPost, setBlogPost] = useState<any>({
    date,
    post: value,
    title: '',
    excerpt: '',
    image_url: imageUrl,
    slug: '',
  });
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== 'passwordmopc') return;
    void createPost(blogPost);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 mx-auto flex flex-col gap-6 mt-24"
    >
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
        <label htmlFor="heading-input">
          <span className="text-white text-2xl font-bold">Title:</span>
          <input
            required
            name="heading"
            id="heading-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label htmlFor="excerpt-input">
          <span className="text-white text-2xl font-bold">Excerpt:</span>
          <textarea
            id="excerpt-input"
            required
            value={excerptInput}
            onChange={(e) => setExcerptInput(e.target.value)}
            className="p-6 rounded-md"
          />
        </label>
      </div>
      <div className="flex gap-4">
        <div className="">
          <label htmlFor="image-input">
            <span className="text-white text-2xl font-bold">ImageUrl:</span>
            <input
              required
              name="heading"
              id="image-input"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            />
          </label>
        </div>
        <div>
          <label htmlFor="date-input">
            <span className="text-white text-2xl font-bold">Password:</span>
            <input
              type="date"
              id="date-input"
              onChange={(e) => {
                setDate(new Date(e.target.value).getTime());
              }}
              className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            />
          </label>
        </div>
      </div>
      <div className="">
        <label
          htmlFor="password-input"
          className="text-white text-2xl font-bold"
        >
          <span>Password:</span>
          <input
            required
            name="heading"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            id="password-input"
          />
        </label>
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
