import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;
  return <div onClick='{props.lineThrough}' class='d-flex align-items-center'>
          <div>{content}</div>
          <button onClick='{props.removeItem}' class='btn btn-danger ml-auto'>Sil</button>
         </div>;
}

export default Todo;
