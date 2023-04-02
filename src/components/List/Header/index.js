import { useState, useEffect } from 'react'
import "../../List/styles.css"

const initialFormValues = { isChecked: false, taskName: "" }
//default değer olarak false alıp değerleri bi obje olarak dışarda tutup daha sonra state içine yerleştiriyoruz.
function Header({ addTask, tasks }) {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)

  }, [tasks])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  //event ekledik
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.taskName === "") {
      return false;
    }
    addTask([...tasks, form]);

  }
  //eğer boş task gelirse eklenmemesi gerektiğini söyledik.
  return (
    <form onSubmit={onSubmit}>
      <div className='header'>
        <h1>todos</h1>
        <input name='taskName' className="new-todo" placeholder='What needs to be done?' value={form.taskName} onChange={onChangeInput} autoFocus />
      </div>
      <div>
        <button className='btn'>Add Task</button>
      </div>
    </form>
  )
}

export default Header