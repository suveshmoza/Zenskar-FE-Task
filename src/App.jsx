import React from 'react';
import './App.css';

import Editor from './Editor';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Editor />
		</div>
	);
};

export default App;
