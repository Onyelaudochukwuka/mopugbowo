import moment from "moment";
import Image from "next/image";
import  React, { FC } from 'react';
import { BlogPost, ChildSchema } from "../models/blog";
import { PropTypes } from "../typescript";

export interface IPostDetailsProps {
}

const PostDetails: FC<PropTypes<IPostDetailsProps, BlogPost>> = ({ post, image_url, title, date }) => {
  const getContentFragment = (index: number, text: any, obj: any, type?: string) => {
    let modifiedText: any = text;

    if (obj.bold) {
      modifiedText = <strong>{text}</strong>
    }

    if (obj.code) {
      modifiedText = <code className="font-mono p-[3px] bg-[rgb(238,238,238)]">{text}</code>
    }

    if (obj.italic) {
      modifiedText = <em>{text}</em>
    }

    if (obj.underline) {
      modifiedText = <u>{text}</u>
    }



    switch (type) {
      case 'block-quote':
        return (
          <blockquote className="italic text-[rgb(170,170,170)] pl-[10px] border-l-2 border-solid border-[rgb(221,221,221)]">
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </blockquote>
        )
      case 'bulleted-list':
        return (
          <ul className="list-disc p-6">
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </ul>
        )
      case 'heading-one':
        return (
          <h1 className="text-xl font-bold">
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </h1>
        )
      case 'heading-two':
        return (
          <h2 className="text-lg font-bold">
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </h2>
        )
      case 'list-item':
        return (
          <li>
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </li>
        )
      case 'numbered-list':
        return (
          <ol className="list-decimal p-6">
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </ol>
        )
      case 'paragraph':
        return (
          <p>
            {modifiedText.map((item: JSX.Element, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)}
          </p>
        )
      default:
        return modifiedText
    }
  };
  return (
    <div className="bg-primaryLight text-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 lg:w-3/4 w-10/12 mx-auto">
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
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="font-medium text-primaryLight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-light fill-light w-6 inline mr-2 fill-curves" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            <span className="align-middle">{moment(date).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 lg:text-5xl text-3xl font-bold text-center">{title}</h1>
        {post.map((typeObj, index) => {
          const { type, children } = typeObj;

          const child = children.map((item: ChildSchema, itemindex: number) => !!item.type ? getContentFragment(index, !!item.children ? item.children.map((item, itemIndex) => getContentFragment(itemindex, item?.text, item)) : item.text, typeObj, item.type) : getContentFragment(itemindex, !!item.text ? item.text : "", item));

          return getContentFragment(index, child, typeObj, type);
        })
        }
        </div>
      </div>
  );
}
export default PostDetails;