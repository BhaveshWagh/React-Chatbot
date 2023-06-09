import React from "react";
// import { botMessage } from "react-chatbot-kit/build/src/components/Chat/chatUtils";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleTodos = () => {
    const botMessage = createChatBotMessage("Here's a few todo's", {
      widget: "todoList",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
// another way when u use class based
  // const handleOptions = () => {
  //   const botMessage = this.createChatBotMessage("choose ur language", {
  //     widget: "options",
  //   });
  // this.addMessageToState(message)}

  // addMessageToState = (message)=>{ 
  //   this.setState((prev) => ({
  //     ...prev,Angel
  //     messages: [...prev.messages, botMessage],
  //   }));
  // };}


  const handleJavaScriptQuiz = (props) => {
    // props.actionProvider.handleJavaScriptQuiz();
    const botMessage = createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );
    setState((prev) => ({
      ...prev,
      message: [...prev.message, botMessage]
    }));
  }



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleTodos,
            handleJavaScriptQuiz,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
