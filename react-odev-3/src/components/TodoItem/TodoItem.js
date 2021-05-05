import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  //line through
  const lineThrough = (e) => {
    e.target.className != 'line-through' ? e.target.className = 'line-through' : e.target.className = null; 
  }

  return (
    <div className='d-flex align-items-center justify-content-between w-100'>
      <div onClick={lineThrough}>{content}</div>;
      <button value={id} onClick={props.removeItem} className='btn btn-danger'>Sil</button>
    </div>
    )
}

export default Todo;
