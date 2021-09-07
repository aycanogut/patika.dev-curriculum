import { useState } from 'react'

function Input() {

  const [form, setForm] = useState({name: '', surname: ''});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };

  return (
    <div>
      <hr />
      <br />
      <h1>Input State</h1>

      Name <br />
      <input name='name' value={form.name} onChange={onChangeInput} />
      <br />
      Surname <br />
      <input name='surname' value={form.surname} onChange={onChangeInput} />
      <br />
      <h1>{form.name} {form.surname}</h1>
    </div>
  )
}

export default Input
