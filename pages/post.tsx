import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import { PostCard } from "../components";
import { BlogPost } from "../models/blog";
import { getPosts } from "../utils/services";

export interface IblogProps {
  posts: any;
}

const blog: NextPage<IblogProps> = ({ posts }) => {
  return (
    <section>
      {
        posts.length > 0
          ?
          <div className="flex flex-col">
            {posts.map((post: BlogPost) => (<PostCard {...post} />))}
          </div>
          : 
          "Loading..."
      }
    </section>
  );
}
blog.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  const data = await getPosts();
  return { slug, posts: data.data };
}
export default blog;