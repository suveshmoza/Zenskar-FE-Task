import './index.css';

import ComponentList from '../../ComponentList/ComponentList';
import SearchInput from '../../TextInput/SearchInput';
import TextInputWithDropdown from '../../TextInput/TextInputWithDropdown';

import { createNewElement } from '../../../util/element';

import componentListData from '../../../data/componentList.js';

import { FaPlay } from 'react-icons/fa';

const EditorPicker = () => {
	return (
		<div className="editor-picker flex flex-col justify-start items-stretch">
			<div className="flex justify-center items-center">
				<TextInputWithDropdown values={[25, 50, 75, 100]} />
				<button className="h-[32px] w-[96px] rounded flex justify-center items-center gap-1 text-[#5046E4] hover:bg-[#cad7fc] bg-[#DFE7FF]">
					<FaPlay /> Preview
				</button>
			</div>

			{/* Search input with Icon */}
			<SearchInput
				placeholder="Search Components"
				customStyle={{
					marginTop: '40px',
				}}
			/>

			<p className="text-sm mt-7 leading-8 font-semibold text-[#707880] text-left">
				Components
			</p>

			{/* Select components to drag and drop */}
			<ComponentList
				createNewElement={createNewElement}
				componentListData={componentListData}
			/>
		</div>
	);
};

export default EditorPicker;
