import buttonImg from '../../assets/button.png';
import textImg from '../../assets/text.png';
import dropdownImg from '../../assets/dropdown.png';
import tableImg from '../../assets/table.png';

const componentListData = [
	{
		title: 'Text Input',
		description: 'Supports Markdown or HTML.',
		imgSrc: textImg,
	},
	{
		title: 'Button',
		description: 'Trigger actions like run queries, export data etc.',
		imgSrc: buttonImg,
	},
	{
		title: 'Dropdown',
		description: 'Select from a set of options, with a dropdown.',
		imgSrc: dropdownImg,
	},
	{
		title: 'Table',
		description: 'Display tabular data with pagination.',
		imgSrc: tableImg,
	},
];

const ComponentList = () => {
	return (
		<>
			{componentListData.map((component, index) => (
				<div key={index}>
					<div className="h-12 w-full flex justify-center items-center rounded cursor-pointer">
						<div className="drop-shadow-[3px_4px_20px_rgba(160,184,199,0.537)]">
							<img
								className="h-12 w-12 rounded"
								src={component.imgSrc}
								alt={component.title}
							/>
						</div>
						<div className="h-12 flex flex-col justify-stretch  items-start pl-4">
							<h3 className="text-sm font-semibold leading-4">
								{component.title}
							</h3>
							<p className="text-[13px] text-[#707880] w-[176px] leading-5">
								{component.description}
							</p>
						</div>
					</div>
					<div className="border border-[#E9EFF2] w-[232px] bg-red-500 my-6"></div>
				</div>
			))}
		</>
	);
};

export default ComponentList;
