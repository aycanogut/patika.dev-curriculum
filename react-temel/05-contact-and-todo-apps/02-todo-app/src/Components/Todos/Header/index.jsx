import React from "react";

function Header() {
  return (
    <Header>
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </form>
    </Header>
  );
}

export default Header;
