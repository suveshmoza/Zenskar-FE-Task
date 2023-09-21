import { HiMenu } from 'react-icons/hi';

const Header = () => {
	return (
		<header className="h-[64px] flex justify-between shadow-2xl border-b bg-white">
			<div className="flex justify-center items-center gap-1 p-8 cursor-pointer">
				<HiMenu className="text-2xl" />
				<h4 className="font-bold text-sm">
					Design Board
					<span className="font-light text-[#9196A6] ml-1">(Draft)</span>
				</h4>
			</div>
		</header>
	);
};

export default Header;
