import { createChatBotMessage } from "react-chatbot-kit";
// import BotAvatar from './components/BotAvatar';
import TodoList from "./components/TodoList";
import Options from "./components/Options/Options";
import Quiz from "./components/Quiz/Quiz";
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, What do you want to learn`,{
      widget:"options"
    }),
  ],
  botName: "Learning Bot",
 widgets:[
  { widgetName: "todoList",
  widgetFunc: (props) => <TodoList {...props } />}, 
  {
    widgetName:"options",
    widgetFunc:(props) => <Options {...props}/>
  }
,
{
  widgetName: "javascriptQuiz",
  widgetFunc: (props) => <Quiz {...props} />,
  props: {
    questions: [
      {
        question: "What is closure?",
        answer:
          "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
        id: 1,
      },
      {
        question: "Explain prototypal inheritance",
        answer:
          "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
        id: 2,
      },
    ],
  },
},
 ]
};

export default config;
