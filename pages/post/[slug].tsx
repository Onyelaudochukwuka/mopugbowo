import type { NextPage } from 'next'
import React, { useState } from "react";
import { BlogPost } from "../../models/blog";
import { fetchPost } from "../../utils/services";
export interface IslugProps {
  slug: string;
}

const slug: NextPage<IslugProps> = ({ slug }) => {
  const [data, setData] = useState<{ success: boolean, data: BlogPost[] }>({ success: false , data: []}); ;
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
  useState(() => {
    fetchPost(slug)
      .then((res) => {
        console.log(res);
        setData(res);
      }
      )
  }, [slug]);
  console.log(data);
  return (
    <section>
      
      {
        data.success === true
      ?
        data.data.length > 0
      ?
        data.data.post.map((typeObj, index) => {
        const { type, children } = typeObj;

        const child = children.map((item, itemindex) => !!item.type ? getContentFragment(index, item.children.map((item, itemIndex) => getContentFragment(itemindex, item?.text, item)), typeObj, item.type) : getContentFragment(itemindex, !!item.text ? item.text : "", item));

          return getContentFragment(index, child, typeObj, type);
        })
        :
        <p>No Post in this category</p>
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