function Footer({ todo, delCompleted }) {

	const completedSize = todo.filter((elem) => elem.isCompleted).length;
	return (
		<div className="footer">
			<p className="count">
				{completedSize} of {todo.length}
			</p>
			<button className="removAll" onClick={delCompleted}>
				Delete completed
			</button>
		</div>
	);
}

export default Footer;
