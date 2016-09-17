import React, {Component} from 'react';
import logo from './logo.svg';
import Button from './Button'
import './uikit.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Main component</h1>
				<Button/>
			</div>
		);
	};
}

export default App;
