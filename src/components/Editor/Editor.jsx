import EditorCanvas from './EditorCanvas/EditorCanvas';
import EditorPicker from './EditorPicker/EditorPicker';

import './Editor.css';

const Editor = () => {
	return (
		<div className="editor relative">
			<EditorCanvas />
			<EditorPicker />
		</div>
	);
};

export default Editor;
