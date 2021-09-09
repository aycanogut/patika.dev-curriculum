import React from "react";

// eslint-disable-next-line react/prop-types
function List({ contacts }) {
  return (
    <header>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.fullName}, {contact.phoneNumber}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default List;
