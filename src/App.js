import React, {Component} from 'react';
import Button from './Button';
import Header from './Header';
import './assets/styles/css/uikit.css';
import './assets/styles/css/main.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<h1>Main component</h1>
						<Button>This is from app</Button>
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
