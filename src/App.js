import Forms from "./components/Forms";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import { useReducer } from "react";
import { reducer, initiacValue } from "./hooks/reducer";

import "./App.css";

function App() {
	const [state, dispatch] = useReducer(reducer, initiacValue)




	return (
		<div className="main">
			<p className="title">TODO List</p>
			<div className="Container">
				<Forms dispatch={dispatch} />
				<ToDoList Todos={state} dispatch={dispatch} />
				<Footer todo={state} delCompleted={() => dispatch({ type: "delCompleted" })} />
			</div>
		</div>
	);
}
export default App;
