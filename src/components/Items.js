function Item({ todo, dispatch }) {

	const changeCheked = (event) => {
		dispatch({ type: "change", payload: { isCompleted: event.target.checked, id: todo.id } })
	}

	const deleteItem = () => {
		dispatch({ type: "delete", payload: { id: todo.id } })
	}

	return (
		<div className="item">
			<input
				type="checkbox"
				className="chkbox"
				id="chkbox"
				checked={todo.isCompleted}
				onChange={changeCheked}
			/>
			<p className="item_name">{todo.text}</p>
			<button className="remove" onClick={deleteItem}>
				X
			</button>
		</div>
	);
}

export default Item;
