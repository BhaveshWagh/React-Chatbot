// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
const TodoList = () => {
  const [todos, setTodos] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodo = res.data;
      setTodos(responseTodo);
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   setTodos(data.message);
    //   console.log("**data", data);
    // });
  }, []);

  return (
    <React.Fragment>
      {todos &&
        todos.slice(0,5).map((todo) => {
          const { id, title } = todo;
          return (
            <div key={id}>
            <ul>
              <li>{title}</li>
            </ul>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default TodoList;
