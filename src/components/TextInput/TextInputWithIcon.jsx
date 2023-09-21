const TextInputWithIcon = ({ Icon, customStyle, name, placeholder }) => {
	return (
		<div style={customStyle}>
			<label htmlFor="search" className="relative">
				<input
					type="text"
					name={name}
					id={name}
					placeholder={placeholder}
					className="w-[240px] h-[40px] border py-3 pl-11 px-4 rounded text-[13px] leading-8 text-[#707880]"
				/>
				<Icon className="text-xl absolute top-1/2 transform -translate-y-1/2 left-4" />
			</label>
		</div>
	);
};

export default TextInputWithIcon;
