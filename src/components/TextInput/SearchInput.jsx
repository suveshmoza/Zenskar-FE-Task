import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BsSearch } from 'react-icons/bs';

import { setElement } from '../../store/slice/elementSlice.js';
import { createNewElement } from '../../util/element.js';

import componentListData from '../../data/componentList.js';

const SearchInput = ({ customStyle, name, placeholder }) => {
	const dispatch = useDispatch();

	const onClickCreate = (type) => {
		const newElement = createNewElement(type);
		dispatch(setElement(newElement));
	};

	const [userInput, setUserInput] = useState('');
	const [showList, setShowList] = useState(false);

	const handleInputChange = (e) => {
		const inputText = e.target.value;
		setUserInput(inputText);
		setShowList(!!inputText);
	};

	const handleMouseEnter = () => {
		if (userInput) {
			setShowList(true);
		}
	};

	const handleMouseLeave = () => {
		setShowList(false);
	};

	const filteredComponents = componentListData.filter((component) =>
		component.title.toLowerCase().includes(userInput.toLowerCase())
	);

	return (
		<div
			style={customStyle}
			className="relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<label htmlFor={name} className="relative">
				<input
					type="text"
					name={name}
					id={name}
					placeholder={placeholder}
					className="w-[240px] h-[40px] border py-3 pl-11 px-4 rounded text-[13px] leading-8 text-[#707880]"
					value={userInput}
					onChange={handleInputChange}
				/>
				<BsSearch className="text-xl absolute top-1/2 transform -translate-y-1/2 left-4" />
			</label>
			{showList && (
				<div className="z-10 absolute right-0 w-[240px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					{filteredComponents.map((component) => (
						<div
							key={component.type}
							onClick={() => onClickCreate(component.type)}
							className="py-1"
						>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								{component.title}
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchInput;
