import React from 'react';

const Text: React.FC<{ children: string }> = (props) => {
  return <span>{props.children}</span>;
};

export default Text;
