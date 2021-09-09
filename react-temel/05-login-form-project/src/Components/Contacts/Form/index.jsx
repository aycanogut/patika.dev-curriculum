import React, { useState, useEffect } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

// eslint-disable-next-line react/prop-types
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="fullName">
        <input
          type="text"
          name="fullName"
          onChange={onChangeInput}
          placeholder="Full Name"
          value={form.fullName}
        />
      </label>
      <label htmlFor="phoneNumber">
        <input
          type="text"
          name="phoneNumber"
          onChange={onChangeInput}
          placeholder="Phone"
          value={form.phoneNumber}
        />
      </label>
      <label htmlFor="btn">
        <button name="btn">Add Contact</button>
      </label>
    </form>
  );
}

export default Form;
