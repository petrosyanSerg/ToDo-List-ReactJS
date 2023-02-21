import Item from "./Items";

function ToDoList({ toDoList, deleteItem, changeCheked }) {
  return (
    <div className="list">
      {toDoList.map((elem) => (
        <Item
          key={elem.id}
          todo={elem}
          deleteItem={deleteItem}
          changeCheked={changeCheked}
        />
      ))}
    </div>
  );
}

export default ToDoList;
