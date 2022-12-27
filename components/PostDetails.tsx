/* eslint-disable react/no-danger */
import React, { FC } from 'react';

import moment from 'moment';
import Image from 'next/image';

import { BlogPost } from '../models/blog';
import { PropTypes } from '../typescript';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPostDetailsProps { }

const PostDetails: FC<PropTypes<IPostDetailsProps, BlogPost>> = ({
  post, image_url, title, date,
}) => {
  return (
    <div className="bg-primaryLight text-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 lg:w-3/4 w-10/12 mx-auto">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <div
          className="object-top relative h-80 w-full object-cover rounded-t-lg lg:rounded-lg"
        >
          <Image
            src={image_url}
            layout="responsive"
            objectFit="scale-down"
            width={30}
            height={30}
            alt={title}
          />
        </div>
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="font-medium text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-6 inline mr-2 fill-curves" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(date).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 lg:text-5xl text-3xl font-bold text-center">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </div>
  );
};
export default PostDetails;
