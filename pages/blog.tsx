import type { NextPage } from 'next'
import { useEffect } from "react";
import { getPosts } from "../utils/services";

export interface IblogProps {
}

const blog: NextPage<IblogProps> = () => {
  useEffect(() => {
    getPosts()
    .then((res) => {
      console.log(res);
    }
    )
      .catch((err) => {
        console.log(err);
      }
      );
  }, [])
  return (
    <section>
      blog
    </section>
  );
}
export default blog;