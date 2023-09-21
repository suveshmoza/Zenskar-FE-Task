import buttonImg from '../assets/button.png';
import textImg from '../assets/text.png';
import dropdownImg from '../assets/dropdown.png';
import tableImg from '../assets/table.png';

const componentListData = [
	{
		type: 'textInput',
		title: 'Text Input',
		description: 'Supports Markdown or HTML.',
		imgSrc: textImg,
	},
	{
		type: 'button',
		title: 'Button',
		description: 'Trigger actions like run queries, export data etc.',
		imgSrc: buttonImg,
	},
	{
		type: 'dropdown',
		title: 'Dropdown',
		description: 'Select from a set of options, with a dropdown.',
		imgSrc: dropdownImg,
	},
	{
		type: 'table',
		title: 'Table',
		description: 'Display tabular data with pagination.',
		imgSrc: tableImg,
	},
];

export default componentListData;
