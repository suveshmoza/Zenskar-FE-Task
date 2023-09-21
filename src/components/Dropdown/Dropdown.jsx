import React, { useState } from 'react';

const Dropdown = ({ listValues }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [option, setOption] = useState('');
	const [buttonTitle, setButtonTitle] = useState('Select a value');

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (value) => {
		if (typeof value === 'object') {
			setOption(value);
			setButtonTitle(value.label || value.value);
		} else {
			setOption(value);
			setButtonTitle(value);
		}

		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left ">
			<div>
				<button
					onClick={toggleDropdown}
					type="button"
					className="inline-flex justify-between min-w-[145px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-slate-300"
					id="options-menu"
					aria-haspopup="true"
					aria-expanded="true"
				>
					{buttonTitle}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div
					className="origin-top-right absolute right-0 mt-2 min-w-[145px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<div className="py-1" role="none">
						{listValues.map((value, index) => (
							<a
								key={index}
								onClick={() => selectOption(value)}
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								{value}
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
