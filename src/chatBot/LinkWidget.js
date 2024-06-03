import React from "react";

const LinkWidget = ({ payload }) => {
  return (
    <div>
      <a href={payload.url} target="_blank" rel="noopener noreferrer">
        {payload.text}
      </a>
    </div>
  );
};

export default LinkWidget;
