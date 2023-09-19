import EditorCanvas from './EditorCanvas/EditorCanvas';
import EditorPicker from './EditorPicker/EditorPicker';

import './Editor.css';

const Editor = (props) => {
	return (
		<div className="editor">
			<EditorCanvas />
			<EditorPicker />
		</div>
	);
};

export default Editor;
