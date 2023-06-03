import "./App.css";
import React, { useState,useEffect } from "react";
import { marked } from "marked";
import jsonData from "./data.json";
import DocsComponent from "./DocsComponent";

const App = () => {
  // const url = "https://www.markdownguide.org/api/v1/basic-syntax.json";
  const [code, setCode] = useState("");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState(true);
  const [third, hideThird] = useState(false);
  const data = jsonData;

  // let docsData = {
  //  "name"        : "Italic",
  // "description" : "To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.",
  // }
  // const [docs, setDocs] = useState(docsData);

  // I tried to fetch data from given url but it gives error saying 'http://localhost:3000'
  //  has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  // const genDocs= () => {
  //   hideThird(true);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setDocs(data);
  //     });
  // };

  const openMD = () => {
    console.log(0);
    hideThird(false);
    hidePreview(true);
  };

  const genDocs = () => {
    hideThird(true);
  };

  const openPreview = () => {
    console.log(0);
    hideThird(false);
    hidePreview(false);
  };

  const handleChange = (e) => {
    const value =e.target.value;
    setCode(value);
    setCompiled(marked.parse(e.target.value));
    localStorage.setItem('myCode', value);
    console.log(value);
  };
  useEffect(() => { 
    const storedData = localStorage.getItem('myCode');
    setCompiled(marked.parse(storedData));
    if (storedData) {
      setCode(storedData);
    }
  }, []);

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={genDocs} className="btn">
            Docs
          </button>
          <button onClick={openPreview}>Preview</button>
        </div>
        {third ? (
          <div className="custom">
            <DocsComponent data={data.basic_syntax}/>
          </div>
        ) : hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <textarea readOnly value={compiled} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
