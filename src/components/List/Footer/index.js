import React, { useState, useEffect } from 'react'


function Footer({ tasks, filteredTasks, clearCompleted }) {
  const buttons = [
    {
      name: 'All',
      selected: false
    },
    {
      name: 'Active',
      selected: false
    },
    {
      name: 'Completed',
      selected: false
    },
  ]
  //buttonlar ve özelliklerimizi burada tutarız.
  const [buttonL, setButtonL] = useState(buttons);

  const [status, setStatus] = useState({});



  const handleCheck = (done, i) => {
    const newTasks = [...buttonL];
    newTasks.forEach((btn, index) => {
      if (index === i) {
        btn.selected = true;
      } else {
        btn.selected = false;
      }
    });
    setButtonL(newTasks);
    filteredTasks(done.name);
  }

  //döngüyle diziyi gezeriz ve seçilen indexle eşleşme durumuna göre görüntülenen taskları filtreleriz.

  useEffect(() => {
    const newStatus = {};
    buttonL.forEach((btn, index) => {
      newStatus[index] = btn.selected ? "selected" : "";
    });
    setStatus(newStatus);
  }, [buttonL]);

  //selected özelliğine bağlı olarak durumu güncelleriz.
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{tasks.length} </strong>
          items left
        </span>

        <ul className="filters">
          {buttonL.map((btn, bn) => (
            <li key={bn} >
              <a href="#/" className={status[bn]} onClick={() => handleCheck(btn, bn)}>{btn.name}</a>
            </li>
          ))}
        </ul>

        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    </div>
  )
}

export default Footer

