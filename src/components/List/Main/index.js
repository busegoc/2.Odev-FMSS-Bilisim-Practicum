import React, { useEffect, useState } from 'react'

function Main({ tasks, deleteSelected }) {

  const [newTaskList, setNewTaskList] = useState(tasks);
  const [status, setStatus] = useState({});

  useEffect(() => {
    setNewTaskList(tasks);
  }, [tasks]);

  useEffect(() => {
    const newStatus = {};
    newTaskList.forEach((task, index) => {
      newStatus[index] = task.isChecked ? "completed" : "";
    });
    setStatus(newStatus);
  }, [newTaskList]);

  const handleCheck = (index) => {
    const newTasks = [...newTaskList];
    newTasks[index].isChecked = !newTasks[index].isChecked;
    setNewTaskList(newTasks);
  };

  const deleteTask = (index) => {
    deleteSelected(index);
  };

  const selectAll = () => {
    const selectedList = [...newTaskList];
    const updatedList = selectedList.map((item) => ({ ...item, isChecked: true }));
    setNewTaskList(updatedList);
  };

  const handleInputValue = (e, index) => {
    const newTasks = [...newTaskList];
    newTasks[index].taskName = e.target.value;
    setNewTaskList(newTasks);
  };

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={selectAll} className='cursor'  >
          Mark all as complete
        </label>

        <ul className="todo-list">
          {newTaskList && newTaskList.map((task, index) => (
            <li key={index} className={status[index]}>
              <div className="view">
                <input
                  id={index}
                  checked={task.isChecked}
                  className="toggle"
                  type="checkbox"
                  onChange={() => handleCheck(index)}
                />
                <input
                  type="text"
                  value={task.taskName}
                  onChange={(e) => handleInputValue(e, index)}
                />
                <button
                  className="destroy"
                  onClick={() => deleteTask(index)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;