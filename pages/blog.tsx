import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import { PostCard } from "../components";
import { BlogPost } from "../models/blog";
import { getPosts } from "../utils/services";

export interface IblogProps {
}

const blog: NextPage<IblogProps> = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => {
      setPosts(res.data);
      console.log(res);
    }
    )
      .catch((err) => {
        console.log(err);
      }
      );
  }, [])
  console.log(posts);
  return (
    <section>
      {
        posts.length > 0
      ?
        posts.map((post: BlogPost) => (<PostCard {...post} />))
          : 
          "Loading..."
      }
    </section>
  );
}
export default blog;