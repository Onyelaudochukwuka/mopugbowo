import React from 'react';

import type { NextPage } from 'next';

import { PostCard } from '../components';
import Loading from '../components/Loading';
import { BlogPost } from '../models/blog';
import { useGetPostsQuery } from '../utils/services/ApiConnection';

export interface IblogProps {
  posts: any
  loading: boolean
}
const Blog: NextPage<IblogProps> = () => {
  const { data: posts, isLoading: loading } = useGetPostsQuery({
    pollingInterval: 3000,
  });
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Loading toggle={loading} />
      {!(posts == null) && posts?.length > 0 ? (
        <div className="flex flex-col w-full">
          {posts.map((post: BlogPost) => (
            <PostCard {...post} />
          ))}
        </div>
      ) : (
        <p className="w-fit mx-auto">No Post Found</p>
      )}
    </section>
  );
};
export default Blog;
