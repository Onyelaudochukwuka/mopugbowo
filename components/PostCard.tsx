import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import  React, { FC } from 'react';
import { BlogPost } from "../models/blog";

export interface IPostCardProps {
}

const PostCard: FC<BlogPost> = ({ date, excerpt, image_url, post, title, slug }) => {
    return (
      <Link href={`/post/${slug}`}>
            <div className="bg-primaryLight text-white shadow-lg rounded-lg p-0 lg:pb-24 pb-8 mb-8 w-3/4 m-auto">
          <div className="relative overflow-hidden shadow-md pb-80 mb-6">
              <div
                  className="object-top relative h-80 w-full object-cover rounded-t-lg lg:rounded-lg" >
              <Image src={image_url} 
                      layout="responsive"
                      objectFit="scale-down"
                      width={30}
                      height={30}
                    alt={title} />
                  </div>
          </div>

          <h1 className="transition duration-700 text-center mb-8 cursor-pointer
      hover:text-blue-600 text-3xl font-semibold capitalize">
              <Link href={`/post/${slug}`}>{title.toLowerCase()}</Link>
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            
              <div className="font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 fill-curves" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                      {moment(date).format('MMM DD, YYYY')};
                  </span>
              </div>
          </div>
          <p className="text-center text-lg text-white font-normal px-4 lg:px-20 mb-8" >{excerpt}</p>
          <div className="text-center">
                    <Link href={`/post/${slug}`}>
                        <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-light hover:bg-[#FFEAFF] text-lg rounded-full text-primaryLight font-bold px-8 py-3 cursor-pointer">
                      Continue reading
                  </span>
              </Link>
          </div>
            </div>
        </Link>
  );
}
export default PostCard;