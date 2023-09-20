import {
	DraggableButton,
	DraggableDropdown,
	DraggableTable,
	DraggableTextInput,
} from './DraggableComponets';

import './index.css';

const EditorCanvas = (props) => {
	return (
		<div className="editor-canvas">
			<div className="flex items-center justify-center mt-60">
				<h4 className="w-[454px] text-[32px] text-center font-extrabold text-[#1A1A1A] opacity-10">
					Drag & drop components here.
				</h4>
			</div>
		</div>
	);
};

export default EditorCanvas;
