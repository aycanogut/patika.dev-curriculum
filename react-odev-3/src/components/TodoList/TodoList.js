import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <div>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              <TodoItem {...todo} key={todo.id} removeItem={props.removeItem}/>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
