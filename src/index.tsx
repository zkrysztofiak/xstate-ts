import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TrafficLights from './TrafficLights';

ReactDOM.render(
	<React.StrictMode>
		<TrafficLights />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
