import React, { useEffect, useState } from 'react'


function Main({ tasks, deleteSelected }) {

  const [newTaskList, setNewTaskList] = useState(tasks);
  const [status, setStatus] = useState({});
  useEffect(() => {
    setNewTaskList(tasks)

  }, [tasks]);
  useEffect(() => {
    const newStatus = {};
    newTaskList.forEach((task, index) => {
      newStatus[index] = task.isChecked ? "completed" : "";
    });
    setStatus(newStatus);
  }, [newTaskList]);

  //döngü ile kontrol ederek newTaskList dizisindeki görevlerin tamamlanma durumuna göre  güncelleme yapıyoruz.
  const handleCheck = (index, name) => {
    const newTasks = [...newTaskList];
    newTasks[index].isChecked = !newTasks[index].isChecked;
    setNewTaskList(newTasks);
  }
  //orjinal diziyi güncellememek için bunu bir newTasks değişkenine atarız. Daha sonra isChecked özelliği güncellenir. Yani
  // isChecked özelliği true ise şimdi false olarak ayarlanır, tersi de geçerlidir.
  const deleteTask = (index) => {
    deleteSelected(index);
  }
  //seçilen indexteki taskı siler
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {newTaskList && newTaskList.map((task, index) => (
            <li key={index} className={status[index]}>
              <div className="view">
                <input id={index} checked={task.isChecked} className="toggle" type="checkbox" onChange={() => handleCheck(index)} />
                <label htmlFor={index}>{task.taskName}</label>
                <button className="destroy" onClick={() => deleteTask(index, task.taskName)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Main