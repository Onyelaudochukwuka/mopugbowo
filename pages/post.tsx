import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import { PostCard } from "../components";
import Loading from "../components/Loading";
import { BlogPost } from "../models/blog";
import { getPosts } from "../utils/services";
import { TypeAnimation } from 'react-type-animation';
export interface IblogProps {
  posts: any;
}
const blog: NextPage<IblogProps> = ({ posts }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  
  return (
    <section>
      <Loading  toggle={loading} />
      {
        !!posts
      ?
        posts?.length > 0
          ?
          <div className="flex flex-col">
            {posts.map((post: BlogPost) => (<PostCard {...post} />))}
          </div>
          : 
          
          :
          <p>No Post Found</p>
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