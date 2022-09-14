import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import { BlogPost } from "../../models/blog";
import { fetchPost } from "../../utils/services";
export interface IslugProps {
  slug: string;
}

const slug: NextPage<IslugProps> = ({ slug }) => {
  const [data, setData] = useState<BlogPost>(
    {
        "_id": "6321c1bc12a5be54300ef278",
        "date": 1663156666654,
        "image_url": "",
        "title": "Testing",
        "excerpt": "fbdbfhdffbfbhdf",
        "slug": "testing",
        "post": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "This is editable ",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27a",
                "children": []
              },
              {
                "text": "rich",
                "type": "",
                "bold": true,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27b",
                "children": []
              },
              {
                "text": " text, ",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27c",
                "children": []
              },
              {
                "text": "much",
                "type": "",
                "bold": false,
                "code": false,
                "italic": true,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27d",
                "children": []
              },
              {
                "text": " better than a ",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27e",
                "children": []
              },
              {
                "text": "<textarea>",
                "type": "",
                "bold": false,
                "code": true,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef27f",
                "children": []
              },
              {
                "text": "!",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef280",
                "children": []
              }
            ],
            "_id": "6321c1bc12a5be54300ef279"
          },
          {
            "type": "paragraph",
            "children": [
              {
                "text": "Since it's rich text, you can do things like turn a selection of text ",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef282",
                "children": []
              },
              {
                "text": "bold",
                "type": "",
                "bold": true,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef283",
                "children": []
              },
              {
                "text": ", or add a semantically rendered block quote in the middle of the page, like this:",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef284",
                "children": []
              }
            ],
            "_id": "6321c1bc12a5be54300ef281"
          },
          {
            "type": "block-quote",
            "children": [
              {
                "text": "A wise quote.",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef286",
                "children": []
              }
            ],
            "_id": "6321c1bc12a5be54300ef285"
          },
          {
            "type": "paragraph",
            "children": [
              {
                "text": "Try it out for yourself!",
                "type": "",
                "bold": false,
                "code": false,
                "italic": false,
                "underline": false,
                "_id": "6321c1bc12a5be54300ef288",
                "children": []
              }
            ],
            "_id": "6321c1bc12a5be54300ef287"
          }
        ]
    }
  ); ;
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
  useEffect(() => {
    fetchPost(slug)
      .then((res) => { console.log(res.data); setData(res.data); })
      .catch((err) => console.log(err));
  }, [slug]);
  useEffect(() => {
    console.log(data, "data");
  }, [data]);
  return (
    <section>
      
      {
        !!data
      
      ?
        data.post.map((typeObj, index) => {
        const { type, children } = typeObj;

        const child = children.map((item, itemindex) => !!item.type ? getContentFragment(index, item.children.map((item, itemIndex) => getContentFragment(itemindex, item?.text, item)), typeObj, item.type) : getContentFragment(itemindex, !!item.text ? item.text : "", item));

          return getContentFragment(index, child, typeObj, type);
        })
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