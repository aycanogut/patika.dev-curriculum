import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  return (
          <div className='d-flex align-items-center'>
            <div>{content}</div>
            <button value={id}  className='btn btn-danger ml-auto' onClick={props.removeItem}>Sil</button>
          </div>
          );
}

export default Todo;
