const componentTypes = ['button', 'textInput', 'dropdown', 'table'];
export const defaultData = {
	button: {
		val: 'Drag Me!',
	},
	textInput: {
		val: 'Write something!',
	},
	dropdown: {
		listValues: ['Toyota', 'Honda', 'Ford', 'Mercedes', 'BMW'],
	},
	table: {
		row: 4,
		col: 4,
		tableHead: ['S.No', 'Name', 'Age', 'Section'],
		entries: [
			[1, 'Andrew', 21, 'A'],
			[2, 'Jake', 20, 'B'],
			[3, 'John', 22, 'C'],
			[4, 'Andy', 21, 'D'],
		],
	},
};
export default componentTypes;
