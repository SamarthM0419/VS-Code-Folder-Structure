import React, { useState } from "react";

const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span onClick={() => setIsExpanded((prev) => !prev)}>
              {isExpanded ? "- " : "+ "}
            </span>
          )}
          <span>{node.name}</span>

          {isExpanded && node.children && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};

export default List;
