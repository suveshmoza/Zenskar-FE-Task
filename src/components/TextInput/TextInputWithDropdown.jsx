import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';

const TextInputWithDropdown = ({ values }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isValid, setIsValid] = useState(true);
	const [zoomSize, setZoomSize] = useState('100%');

	function handleChange(e) {
		const inputVal = e.target.value;

		if (inputVal.length === 0) {
			setIsValid(true);
			setZoomSize('%');
			e.target.setSelectionRange(0, 0);
			return;
		}

		const parsedVal = parseFloat(inputVal);

		if (isNaN(parsedVal)) {
			setIsValid(false);
			setZoomSize('');
			return;
		}

		if (parsedVal < 0 || parsedVal > 100) {
			setIsValid(false);
		} else {
			setIsValid(true);
			setZoomSize(parsedVal + '%');
		}
	}

	return (
		<label
			className="relative mr-6"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<input
				className={`pr-5 bg-transparent text-[#1A1A1A] rounded text-sm text-right leading-8 outline-0 w-[70px] ${
					isValid ? '' : 'border border-red-600'
				}`}
				value={zoomSize}
				onChange={handleChange}
			/>
			<AiFillCaretDown className="absolute top-1/2 transform -translate-y-1/2 right-1 cursor-pointer" />
			<ul
				className={`absolute z-10 rounded shadow-xl right-0 text-sm text-center bg-[#f9fbfc] border w-[70px] ${
					isHovered ? '' : 'hidden'
				}`}
				onClick={handleChange}
			>
				{values.map((value) => (
					<li key={value} className="hover:bg-[#effaff]" value={value}>
						{value}%
					</li>
				))}
			</ul>
		</label>
	);
};

export default TextInputWithDropdown;
