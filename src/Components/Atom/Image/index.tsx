import React from "react";

interface ImageProps {
  alt?: string;
  src: string;
  className?: string;
  defaultPath?: boolean;
}

const Image: React.FC<ImageProps> = (props) => {
  // Props
  const { alt, defaultPath, src } = props;

  //   Datta to render
  return defaultPath ? (
    <img src={`/assets/images/${src}`} alt={alt ? alt : ""} />
  ) : (
    <img {...props} alt={alt ? alt : ""} />
  );
};

export default Image;
