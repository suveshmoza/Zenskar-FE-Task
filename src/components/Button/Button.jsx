const Button = ({ val }) => {
	return (
		<button className="px-4 shadow-xl py-2 rounded text-white bg-violet-600 hover:bg-violet-800">
			{val}
		</button>
	);
};

export default Button;
