import React, { FC } from 'react';

import moment from 'moment';

import { useGetCommentsQuery } from '../utils/services/ApiConnection';

export interface ICommentsProps {
  slug: string
}

const Comments: FC<ICommentsProps> = ({ slug }) => {
  const { data: comments } = useGetCommentsQuery(slug, {
    pollingInterval: 3000,
  });
  return (
    <section>
      {(comments?.length ?? 0) > 0 && (
        <div className="bg-primaryLight text-white shadow-lg lg:w-3/4 w-10/12 mx-auto  rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments?.length}
            {' '}
            Comment
            {(comments?.length ?? 0) > 1 && 's'}
          </h3>
          {comments?.map(({
            date, email, name, comment,
          }) => (
            <div className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{name}</span>
                {' '}
                on
                {' '}
                {moment(date).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line">{email}</p>
              <p className="whitespace-pre-line text-white w-full">{comment}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default Comments;
