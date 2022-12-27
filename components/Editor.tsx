import React, { FC } from "react";

import ReactQuill from "react-quill";

export interface IEditorProps {
  value: string;
  setValue: (value: string) => void;
}
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const Editor: FC<IEditorProps> = ({ value, setValue }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="bg-white"
      modules={modules}
      formats={formats}
    />
  );
};
export default Editor;
