import React, {Component} from 'react';
import logo from './logo.svg';
import Button from './Button'
import './assets/styles/css/uikit.css';
import './assets/styles/css/main.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<h1>Main component</h1>
						<Button/>
					</div>

					<div className="uk-width-1-2">
						test
					</div>
				</div>
			</div>
		);
	};
}

export default App;
