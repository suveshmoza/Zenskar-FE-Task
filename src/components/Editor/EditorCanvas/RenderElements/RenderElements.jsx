import { useSelector } from 'react-redux';

import Button from '../../../Button/Button';
import Dropdown from '../../../Dropdown/Dropdown';
import Table from '../../../Table/Table';
import TextInput from '../../../TextInput/TextInput';
import Wrapper from './Wrapper';

const renderElement = (element) => {
	const { type, ...props } = element;

	switch (type) {
		case 'button':
			return <Button {...props} />;
		case 'textInput':
			return <TextInput {...props} />;
		case 'dropdown':
			return <Dropdown {...props} />;
		case 'table':
			return <Table {...props} />;
		default:
			return <div></div>;
	}
};

const RenderElements = ({ canDrop }) => {
	const { elements } = useSelector((state) => state.elements);

	if (Object.keys(elements || {}).length) {
		return (
			<div>
				{Object.keys(elements).map((key, index) => (
					<Wrapper key={index} {...elements[key]}>
						{renderElement(elements[key])}
					</Wrapper>
				))}
			</div>
		);
	} else {
		return (
			<div className="flex justify-center items-center h-full w-full -z-10">
				<h1 className="text-[32px] font-extrabold text-[#1A1A1A] opacity-10">
					{!canDrop && 'Drag & drop components here.'}
				</h1>
			</div>
		);
	}
};

export default RenderElements;
