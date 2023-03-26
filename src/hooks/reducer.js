
export const initiacValue = [
	{
		id: Math.random(),
		text: "Learn HTML",
		isCompleted: true,
	},
	{
		id: Math.random(),
		text: "Learn CSS",
		isCompleted: true,
	},
	{
		id: Math.random(),
		text: "Learn JS",
		isCompleted: true,
	},
	{
		id: Math.random(),
		text: "Learn React",
		isCompleted: true,
	},
	{
		id: Math.random(),
		text: "Learn Redux",
		isCompleted: false,
	},
]

export const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return addNew(state, action.payload.submit)

		case "delete":
			return filtered(state, action.payload.id);

		case "delCompleted":
			return filteredCompleted(state)

		case "change":
			return changeUpdate(state, action.payload.id, action.payload.isCompleted)

		default:
			break;
	}



}


function filtered(arr, id) {
	const tmp = arr.filter((elem) => elem.id !== id)
	return tmp
}

function filteredCompleted(arr) {
	const tmp = arr.filter((elem) => elem.isCompleted !== true)
	return tmp
}

function addNew(arr, input) {
	return [...arr, {
		id: Math.random(),
		text: input,
		isCompleted: false,
	}];
}

function changeUpdate(arr, id, isComp) {
	const tmp = [...arr]
	tmp.forEach(elem => {
		if (elem.id === id) {
			elem.isCompleted = isComp
		}
	})
	return tmp
}

