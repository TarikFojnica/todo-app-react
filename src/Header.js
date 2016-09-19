import React, {Component} from 'react';
import Button from './Button'
import './assets/styles/css/uikit.css';
import './assets/styles/css/main.css';

class Header extends Component {
	render() {
		return (
			<div>
				<h1>This is header</h1>
				<Button>This is from header</Button>
			</div>
		);
	};
}

export default Header;
