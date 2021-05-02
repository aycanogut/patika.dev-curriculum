import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {

  const lineThrough = (e) => {
    e.target.ClassList.add('line-through')
  }
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item" onClick={props.lineThrough}>
              <TodoItem {...todo} key={todo.id} lineTrough={props.removeItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

