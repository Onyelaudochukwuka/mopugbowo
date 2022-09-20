import type { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from "react";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetails from "../../components/PostDetails";
import { BlogPost, ChildSchema } from "../../models/blog";
import { fetchPost } from "../../utils/services";
import { useGetPostQuery } from "../../utils/services/ApiConnection";
export interface IslugProps {
  slug: string;
}

const slug: NextPage<IslugProps> = ({ slug }) => {
  const { data, isLoading } = useGetPostQuery(slug);
  const getContentFragment = (index: number, text: any, obj: any, type?:string) => {
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
    <section>
      
      {
        !!data
      
          ?
          <>
            <PostDetails {...data} />
            <CommentsForm {...{ slug }}  />
            <Comments {...{ slug }} />
          </>
        :
        <p>No Post in this category</p>
      }
  
     
      
        
    </section>
  );
}
slug.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
}
export default slug;