import React, {Component} from 'react';
import request from 'superagent';
import _ from 'lodash'

class WeatherDetails extends Component {
	state = {
		weatherData: [],
	};

	componentDidMount() {
		var self = this;
		request.get('https://api.forecast.io/forecast/d8ab77870812de67277ae47d3e9bf83e/43.8563,18.4131')
			.end( function (err, res) {
				self.setState({
					weatherData: res.body.daily.data
				})
			})
	};

	render() {
		return (
			<div>
				{this.state.weatherData.map(function(result, id) {
           return <p key={id}>{result.icon}</p>;
        })}
	    </div>
		)
	};
}

export default WeatherDetails;