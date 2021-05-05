import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  const lineThrough = (e) => {
    e.target.className != 'line-through' ? e.target.className = 'line-through' : e.target.className = null;
  } 

  return  <div>
            <div className='d-flex align-items-center justify-content-between'>
              <div onClick={lineThrough}>{content}</div>
              <button value={id} onClick={props.removeItem} className='btn btn-danger'>Sil</button>
            </div>
          </div>;
}

export default Todo;
