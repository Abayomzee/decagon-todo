import React from "react";
import Image from "Components/Atom/Image";

// Stlye
import "./style.css";
import Typography from "Components/Atom/Typography";

interface UserProps {
  image: string;
  name?: string;
  msg?: string;
}
const UserMessage: React.FC<UserProps> = (props) => {
  // Props
  const { image, name, msg } = props;

  // Data to render
  return (
    <div className="usr-wrapper">
      <div className="usr-image">
        <Image src={image} defaultPath />
      </div>
      <div>
        <Typography as="h4" className="hd-6" text={name} />
        <Typography as="prg-1" className="hd-6" text={msg} />
      </div>
    </div>
  );
};

export default UserMessage;
