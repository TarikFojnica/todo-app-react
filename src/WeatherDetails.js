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
				console.log(res.body.daily.data)
			})
	};

	render() {
		var allItems = this.state.weatherData.map(function(result, id) {
      return (
      	<div className="uk-panel uk-panel-box uk-width-medium-1-3" key={id}>
					<div className="uk-panel-badge uk-badge">{result.icon}</div>
					<h3 className="uk-panel-title">{result.icon}</h3>	
					<p>{result.summary}</p>
      	</div>
      );
    });

		return (
			<div className="uk-grid">
				<h1> From wethaer details component </h1>
				{allItems}
	    </div>
		)
	};
}

export default WeatherDetails;