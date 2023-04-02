import { useState } from 'react'
import Header from './Header'
import Main from "./Main"
import Footer from "./Footer"


function List() {

  const [tasks, setTasks] = useState([
    {
      isChecked: true,
      taskName: 'Learn JavaScript',
    },
    {
      isChecked: false,
      taskName: 'Learn React',
    },
    {
      isChecked: false,
      taskName: 'Have a life!'
    }
  ])
  //default olarak gelecek olan tasklarımızı bu state içinde tutuyoruz.

  const [filterText, setFilterText] = useState('All');

  let filteredTasks = tasks.filter((task) => {
    if (filterText === 'All') {
      return task;
    } else if (filterText === 'Active') {
      return task.isChecked === false
    } else {
      return task.isChecked === true;
    }
  })
  //burada bir filtreleme işlemi yapıyoruz. Başlangıç değerini All kabul edip diğer değerleri kontrol ediyoruz.
  // Eğer filterText All ise filtreleme yapmadan tüm taskları döndürür. 
  //Eğer filterText Active ise yalnızca işaretlenmemiş taskları döndürür. 
  //Eğer filterText Completed ise yalnızca işaretlenmiş taskları döndürür.


  const deleteCompleted = () => {
    const completedTasks = tasks.filter((task) => !task.isChecked)
    setTasks(completedTasks);
  }
  //tamamlanmış olan görevleri silmek için kullanırız

  const clickedBtn = (filterBtn) => {
    setFilterText(filterBtn);
  }

  const deleteSelected = (deleteValue) => {
    let getItems = [...tasks]
    getItems.splice(deleteValue, 1);
    setTasks(getItems);
  }

  //seçilen indexteki görevleri sileriz.

  return (
    <div>
      <section className="todoapp">
        <Header addTask={setTasks} tasks={tasks} />
        <Main tasks={filteredTasks} deleteSelected={deleteSelected} />
        <Footer tasks={tasks} filteredTasks={clickedBtn} clearCompleted={deleteCompleted} />
      </section>


    </div>
  )
}
//componentlere gereken bilgileri aktarıyoruz.
export default List
