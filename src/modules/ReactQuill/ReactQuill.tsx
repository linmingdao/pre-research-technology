import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "tetris-ui/dist/index.css";
import "react-quill/dist/quill.snow.css";
import { TitleLayout } from "tetris-ui";

const Quill: React.FC = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
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

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <TitleLayout hasBack title="ReactQuill">
      <ReactQuill
        style={{ height: 500 }}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </TitleLayout>
  );
};

export default Quill;
