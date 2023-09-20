import './index.css';

import ComponentList from '../../UI/ComponentList';
import IconInput from '../../UI/IconInput';
import InputWithSelect from '../../UI/InputWithSelect';

import { BsSearch } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

const EditorPicker = () => {
	return (
		<div className="editor-picker flex flex-col justify-start items-stretch">
			<div className="flex justify-center items-center">
				<InputWithSelect values={[25, 50, 75, 100]} />
				<button className="h-[32px] w-[96px] rounded flex justify-center items-center gap-1 text-[#5046E4] hover:bg-[#cad7fc] bg-[#DFE7FF]">
					<FaPlay /> Preview
				</button>
			</div>

			<IconInput
				Icon={BsSearch}
				placeholder="Search Components"
				customStyle={{
					marginTop: '40px',
				}}
			/>

			<p className="text-sm mt-7 leading-8 font-semibold text-[#707880] text-left">
				Components
			</p>
			<ComponentList />
		</div>
	);
};

export default EditorPicker;
