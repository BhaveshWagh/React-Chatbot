import React from "react";
import config from "./config";
const MessageParser = ({ children, actions }) => {
  //   const { initialMessages } = config;
  const parse = (message) => {
    const lowercase = message.toLowerCase();
    const lower = message.toLowerCase();

    console.log();
    if (lowercase.includes("hello")) {
      actions.handleHello();
      //   console.log("hi");
      //   console.log(initialMessages);
      //   console.log(actions.handleHello);
    }
    if (lower.includes("todo")) {
      actions.handleTodos();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
