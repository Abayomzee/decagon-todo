import React from "react";
import Typography from "Components/Atom/Typography";
import UserMessage from "Components/Molecules/UserMessage";
import "./style.css";

interface UserMessagesProps {}
const UserMessages: React.FC<UserMessagesProps> = () => {
  // Variable
  const messages = [
    {
      id: "1",
      image: "user-1.png",
      name: "Chris Webber",
      msg: "Hi Michael! How are You?",
    },
    {
      id: "2",
      image: "user-2.png",
      name: "Kelvin Durant ",
      msg: "Do you need that design?",
    },
  ];

  // Data to render
  return (
    <div className="usmsg-wrapper">
      <Typography as="h3" className="hd-5 mb-20" text="Messages" />

      {messages.map((message) => (
        <UserMessage
          key={message.id}
          image={message.image}
          name={message.name}
          msg={message.msg}
        />
      ))}
    </div>
  );
};

export default UserMessages;
