function Item({ todo, deleteItem, changeCheked }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        className="chkbox"
        checked={todo.isCompleted}
        onChange={(event) =>
          changeCheked({ ...todo, isCompleted: event.target.checked })
        }
      />
      <p className="item_name">{todo.text}</p>
      <button className="remove" onClick={() => deleteItem(todo.id)}>
        X
      </button>
    </div>
  );
}

export default Item;
