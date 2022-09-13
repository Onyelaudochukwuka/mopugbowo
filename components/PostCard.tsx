import moment from "moment";
import Image from "next/image";
import  React, { FC } from 'react';
import { BlogPost } from "../models/blog";

export interface IPostCardProps {
}

const PostCard: FC<BlogPost> = ({ date, excerpt, image_url, post, title }) => {
  return (
      <section className="flex flex-col">
        <Image src={image_url} alt={title} width={300} height={300} />
          <div className="flex flex-col text-white">
          <p>{moment(date).fromNow()}</p>
          <p>{title}</p>
          <p>{excerpt}</p>
          </div>
    </section>
  );
}
export default PostCard;