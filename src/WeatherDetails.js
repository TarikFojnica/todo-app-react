import React, {Component} from 'react';
import request from 'superagent'

class WeatherDetails extends Component {
	componentDidMount() {
		request.get('https://api.forecast.io/forecast/d8ab77870812de67277ae47d3e9bf83e/43.8563,18.4131')
			.end( function (err, res) {
				console.log(res);
			})
	};

	render() {
		return (
			<div className="element">

			</div>
		);
	};
}

export default WeatherDetails;