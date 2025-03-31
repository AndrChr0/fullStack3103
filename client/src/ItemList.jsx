import { useState, useEffect } from "react";
import ListItem from "./components/ListItem";

function ItemList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []);
  
  console.log("state variabel", todos);

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos.map((todo, index) => (
          <ListItem
            key={index}
            completed={todo.completed}
            titleText={todo.title}
          />
        ))}
    </>
  );
}

export default ItemList;
