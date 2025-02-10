



import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

function EditingPara() {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  const handleChange1 = (value) => {
    setContent1(value);
  };

  const handleChange2 = (value) => {
    setContent2(value);
  };

  return (
    <div className=" grid grid-cols-2 w-full gap-8  font-sans">

      <div>
        <h2 className='text-gray-700'>Product Details:</h2>
        <ReactQuill
          value={content1}
          onChange={handleChange1}
          placeholder="Start typing here..."
          modules={modules}
          formats={formats}
          className="bg-white  p-4 shadow-md border rounded-lg"
        />
      </div>
      <div>
        <h2 className='text-gray-700'>About the Product:</h2>
        <ReactQuill
          value={content2}
          onChange={handleChange2}
          placeholder="Start typing here too..."
          modules={modules}
          formats={formats}
          className="bg-white p-4 shadow-md border rounded-lg"
        />
        
      </div>
    </div>
  );
}

export default EditingPara;
