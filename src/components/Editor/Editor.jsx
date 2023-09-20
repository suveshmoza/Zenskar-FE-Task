import EditorCanvas from './EditorCanvas/EditorCanvas';
import EditorPicker from './EditorPicker/EditorPicker';

import './Editor.css';

const Editor = (props) => {
	return (
		<div className="flex h-full w-full">
			<EditorCanvas />
			<EditorPicker />
		</div>
	);
};

export default Editor;
