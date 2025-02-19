import React, { useState } from "react";
import json from "../data.json";
import "../App.css";

const FileExplorer = () => {
  const [data, setData] = useState(json);

  return (
    <div>
      <h1>File Folder Explorer</h1>
      <div className="container">
        {data.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
