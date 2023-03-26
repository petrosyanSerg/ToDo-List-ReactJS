function Forms({ dispatch }) {
	function onSubmitForm(event) {
		event.preventDefault();
		dispatch({
			type: "add",
			payload: {
				submit: event.target.input.value
			}
		})
		event.target.input.value = "";
	}

	return (
		<div className="addBox">
			<form className="form" onSubmit={onSubmitForm}>
				<input
					id="input"
					type="text"
					className="inputText"
					placeholder="What will you do today?"
					required
				/>
				<button className="btnAdd">+</button>
			</form>
		</div>
	);
}
export default Forms;
