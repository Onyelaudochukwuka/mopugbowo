import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';

import { motion } from 'framer-motion';

import { useCreateCommentMutation } from '../utils/services/ApiConnection';

import PopUp from './PopUp';

export interface ICommentsFormProps {
  slug: string
}

const CommentsForm: FC<ICommentsFormProps> = ({ slug }) => {
  const [error, setError] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState(localStorage.getItem('name') ?? '');
  const [email, setEmail] = useState(localStorage.getItem('email') ?? '');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [createComment] = useCreateCommentMutation();
  const { p: P } = motion;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  useEffect(() => {
    setShowSuccessMessage(false);
  }, []);
  const handleCommentSubmission = (): void => {
    if ((name.length > 0) && (email.length > 0) && (message.length > 0) && regex.test(email)) {
      const obj = {
        name, email, comment: message, slug,
      };
      setLoading(true);
      setShowSuccessMessage(false);
      void createComment({ ...obj, date: Date.now() }).then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        setLoading(false);
      });
      if (checked) {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
      }
    } else {
      setError(true);
      setTimeout(
        () => {
          setError(false);
        },
        5000,
      );
    }
  };
  return (
    <div className="bg-primaryLight text-white shadow-lg rounded-lg p-8 pb-12 mb-8 lg:w-3/4 w-10/12  mx-auto">
      <PopUp
        toggle={showSuccessMessage}
        close={() => setShowSuccessMessage(false)}
        message="Comment Created"
      />
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave A Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          className="p-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          className="py-2 px-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="py-2 px-4 outline-none placeholder-gray-600 w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label htmlFor="storeData">
            <input
              type="checkbox"
              onChange={(event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked)}
              id="storeData"
            />
            <span className="cursor-pointer ml-2">
              Save my-email and name for the next time I comment.
            </span>
          </label>
        </div>
      </div>
      <P
        className="text-sm text-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: error ? 1 : 0 }}
      >
        All fields are required.
      </P>
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:-translate-y-1 inline-block bg-light text-lg text-black font-bold rounded-full px-8 py-3 cursor-pointer"
          disabled={loading && true}
        >
          {!loading ? (
            'Post Comment'
          ) : (
            <div className="text-sm flex display-row">
              <svg
                className="animate-spin w-6 h-6 fill-black"
                viewBox="0 0 26.349 26.35"
              >
                <g>
                  <g>
                    <circle cx="13.792" cy="3.082" r="3.082" />
                    <circle cx="13.792" cy="24.501" r="1.849" />
                    <circle cx="6.219" cy="6.218" r="2.774" />
                    <circle cx="21.365" cy="21.363" r="1.541" />
                    <circle cx="3.082" cy="13.792" r="2.465" />
                    <circle cx="24.501" cy="13.791" r="1.232" />
                    <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05C6.902,18.996,5.537,18.988,4.694,19.84z" />
                    <circle cx="21.364" cy="6.218" r="0.924" />
                  </g>
                </g>
              </svg>
              <span className="my-auto align-middle font-bold">
                Processing...
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
export default CommentsForm;
