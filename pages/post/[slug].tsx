import React from 'react';

import type { NextPage } from 'next';

import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import PostDetails from '../../components/PostDetails';
import { useGetPostQuery } from '../../utils/services/ApiConnection';

export interface IslugProps {
  slug: string
}

// eslint-disable-next-line react/prop-types
const Slug: NextPage<IslugProps> = ({ slug }) => {
  const { data } = useGetPostQuery(slug);
  return (
    <section>

      {
        (data != null)

          ? (
            <>
              <PostDetails {...data} />
              <CommentsForm {...{ slug }} />
              <Comments {...{ slug }} />
            </>
          )
          : <p>No Post in this category</p>
      }

    </section>
  );
};
Slug.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
};
export default Slug;
