import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>2</strong>
        items left
      </span>

      <ul class="filters">
        <li>
          <a class="selected">All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>

      <button class="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
