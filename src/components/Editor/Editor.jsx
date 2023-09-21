import EditorCanvas from './EditorCanvas/EditorCanvas';
import EditorPicker from './EditorPicker/EditorPicker';

import './Editor.css';

const Editor = () => {
	return (
		<div className="flex h-full">
			<EditorCanvas />
			<EditorPicker />
		</div>
	);
};

export default Editor;
