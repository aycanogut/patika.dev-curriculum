import React from "react";
import "./TodoHeader.css";

function TodoHeader(props) {
  return <h1 className='display-3'>{props.name}</h1>
}

export default TodoHeader;
