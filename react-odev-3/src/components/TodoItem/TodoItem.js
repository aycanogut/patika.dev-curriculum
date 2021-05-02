import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  const lineThrough = (e) => {
    e.target.className != 'line-through' ? e.target.className = 'line-through' : e.target.className = '';
  }


  return (
          <div className='d-flex align-items-center'>
            <div onClick={lineThrough}>{content}</div>
            <button value={id}  className='btn btn-danger ml-auto' onClick={props.removeItem}>Sil</button>
          </div>
          );
}

export default Todo;
