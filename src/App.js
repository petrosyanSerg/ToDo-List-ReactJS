import "./App.css";
import Forms from "./components/Forms";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: Math.random(),
      text: "Learn HTML",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);

  function onSubmitForm(event) {
    event.preventDefault();
    setToDos([
      ...toDos,
      {
        id: Math.random(),
        text: event.target.input.value,
        isCompleted: false,
      },
    ]);
    event.target.input.value = "";
  }

  function deleteItem(id) {
    setToDos(toDos.filter((elem) => elem.id !== id));
  }

  function changeCheked(newTodo) {
    setToDos(
      toDos.map((elem) => {
        if (elem.id === newTodo.id) {
          return newTodo;
        }
        return elem;
      })
    );
  }

  return (
    <div className="main">
      <p className="title">TODO List</p>
      <div className="Container">
        <Forms onSubmitForm={onSubmitForm} />
        <ToDoList
          toDoList={toDos}
          deleteItem={deleteItem}
          changeCheked={changeCheked}
        />
        <Footer todo={toDos} setTodo={setToDos} />
      </div>
    </div>
  );
}
export default App;
