import Item from "./Items";

function ToDoList({ Todos, dispatch }) {
	return (
		<div className="list">
			{Todos.map((elem) => (
				<Item
					key={elem.id}
					todo={elem}
					dispatch={dispatch}
				/>
			))}
		</div>
	);
}

export default ToDoList;
