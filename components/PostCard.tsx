import moment from "moment";
import Image from "next/image";
import  React, { FC } from 'react';
import { BlogPost } from "../models/blog";

export interface IPostCardProps {
}

const PostCard: FC<BlogPost> = ({ date, excerpt, image_url, post, title }) => {
  return (
    <section>
          <p>{moment(date).fromNow()}</p>
          <p>{title}</p>
          <p>{excerpt}</p>
          <Image src={image_url} alt={title} width={300} height={300} />
    </section>
  );
}
export default PostCard;