import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Todos() {
  const [todos, setTodos] = useState();

  return (
    <div className="container">
      <h1>todos</h1>
      <Form />
      <List />
    </div>
  );
}
