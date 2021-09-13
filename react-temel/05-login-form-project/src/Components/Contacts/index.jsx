import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Aycan",
      phoneNumber: "123432",
    },
    {
      fullName: "Selin",
      phoneNumber: "76543",
    },
    {
      fullName: "Elvan",
      phoneNumber: "395982",
    },
  ]);

  useEffect(() => {}, [contacts]);

  return (
    <div className="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
