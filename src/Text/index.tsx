import React from 'react';
import type { TextProps } from './props.type';

const Text: React.FC<TextProps> = (props) => {
  return <span>{props.children}</span>;
};

export default Text;
