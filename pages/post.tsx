import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { PostCard } from "../components";
import Loading from "../components/Loading";
import { BlogPost } from "../models/blog";
import { getPosts } from "../utils/services";
import { TypeAnimation } from "react-type-animation";
import { useGetPostsQuery } from "../utils/services/ApiConnection";


export interface IblogProps {
  posts: any;
  loading: boolean;
}
const blog: NextPage<IblogProps> = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  const { data: posts, isLoading: loading, refetch } = useGetPostsQuery({
    pollingInterval: 3000
  });
  console.log(posts, loading);
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Loading toggle={loading} />
      {!!posts && posts?.length > 0 ? (
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
export default blog;