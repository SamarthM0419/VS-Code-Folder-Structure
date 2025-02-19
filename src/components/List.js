import React from "react";

const List = ({ list }) => {
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          <span>{node.name}</span>
          {node.children && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};

export default List;
