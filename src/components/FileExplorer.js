import React, { useState } from "react";
import json from "../data.json";
import "../App.css";
import List from "./List";

const FileExplorer = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>File Folder Explorer</h1>
      <List list={data} />
    </div>
  );
};

export default FileExplorer;
