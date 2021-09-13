import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  return (
    <header>
      <h1>Contacts</h1>

      <input
        type="text"
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullName}, {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default List;
