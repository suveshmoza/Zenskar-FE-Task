import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import App from './App';
import store from './store';
import { saveState } from './util/localStorage.js';

store.subscribe(() => {
	saveState({
		elements: store.getState().elements,
	});
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DndProvider backend={HTML5Backend}>
			<Provider store={store}>
				<App />
			</Provider>
		</DndProvider>
	</React.StrictMode>
);
