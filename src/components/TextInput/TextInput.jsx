const TextInput = ({ val }) => {
	return (
		<input
			type="text"
			className="overflow-hidden w-[240px] px-2 h-[40px] border rounded text-[13px] shadow leading-8 text-[#707880]"
			placeholder={val}
		/>
	);
};

export default TextInput;
