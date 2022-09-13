import  React, { FC } from 'react';
import { BlogPost } from "../models/blog";

export interface IPostCardProps {
}

const PostCard: FC<BlogPost> = ({ date, excerpt, image_url, post, title }) => {
  return (
    <section>
      
    </section>
  );
}
export default PostCard;